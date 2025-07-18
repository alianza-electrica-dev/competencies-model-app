<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Status;
use App\Models\Test;
use App\Models\User;
use App\Models\TestUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TestController extends Controller
{
    public function closeEvaluation(Request $request, $userId, $testId)
    {
        $user = User::findOrFail($userId);
        $responses = collect($request->responses);
        $testUserId = $request->test_user_id;

        foreach ($responses as $response) {
            $questionId = $response['question_id'];
            $responseValue = $response['response_value'];

            $existing = \DB::table('user_response')
                ->where('user_id', $userId)
                ->where('question_id', $questionId)
                ->where('test_user_id', $testUserId)
                ->first();

            if ($existing) {
                \DB::table('user_response')
                    ->where('id', $existing->id)
                    ->update([
                        'response_value' => $responseValue,
                        'updated_at' => now()
                    ]);
            } else {
                $user->questions()->attach($questionId, [
                    'response_value' => $responseValue,
                    'test_user_id' => $testUserId,
                    'created_at' => now(),
                    'updated_at' => now()
                ]);
            }
        }

        $totalScore = $user->questions()
            ->wherePivotIn('question_id', $responses->pluck('question_id')->toArray())
            ->wherePivot('test_user_id', $testUserId)
            ->sum('response_value');

        $testUser = TestUser::find($testUserId);
        if (!$testUser) {
            return response()->json([
                'success' => false,
                'message' => 'No se encontró el registro del test',
            ], 404);
        }
        $testUser->update([
            'status_id' => Status::FINALIZADO,
            'score' => $totalScore / max($responses->count(), 1),
        ]);

        return response()->json([
            'success' => true,
            'titleAlert' => '¡Se finalizó la evaluación!',
            'textAlert' => 'Esta evaluación ha sido cerrada por un administrador',
        ]);
    }

    public function getCompetencies($competencyId, $areaId)
    {
        $tests = $this->evaluationsToAssing($competencyId, $areaId);

        return response()->json([
            'success' => true,
            'tests' => $tests,
        ]);
    }

    public function assingEvaluation(Request $request, $userId)
    {
        $user = User::findOrFail($userId);
        $user->tests()->attach(['test_id' => $request->test_id],  ['status_id' => Status::PENDIENTE]);

        return response()->json([
            'success' => true,
            'titleAlert' => '¡Evaluaciones asignadas correctamente!',
            'textAlert' => 'Todas las evaluaciones se han asignado a este usuario',
        ]);
    }

    public function getUserTests($id)
    {
        $user = User::findOrFail($id);
        $tests = $user->tests()
            ->with([
                'competency',
                'questions' => function ($query) use ($id) {
                    $query->with(['users' => function ($query) use ($id) {
                        $query->where('user_id', $id)
                            ->withPivot('response_value', 'test_user_id');
                    }]);
                }
            ])
            ->get();

        $tests->each(function ($test) {
            $test->pivot->load('status');
            $testUser = TestUser::where('user_id', $test->pivot->user_id)
                ->where('test_id', $test->pivot->test_id)
                ->where('created_at', $test->pivot->created_at)
                ->first();
            $test->pivot->id = $testUser ? $testUser->id : null;
        });

        return response()->json([
            'success' => true,
            'tests' => $tests,
        ]);
    }

    private function evaluationsToAssing($competencyId, $areaId)
    {
        switch ($competencyId) {
            case 1:
                return Test::where('competency_id', 1)->get();
            case 2:
                return Test::whereHas('areas', function ($query) use ($areaId) {
                    $query->where('area_id', $areaId);
                })->get();
            case 3:
                return Test::where('competency_id', 3)->get();
            case 4:
                return Test::where('competency_id', 4)->get();
            default:
                return [];
        }
    }
}
