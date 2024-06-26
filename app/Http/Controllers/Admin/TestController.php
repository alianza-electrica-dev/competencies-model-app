<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Status;
use App\Models\Test;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TestController extends Controller
{

    public function closeEvaluation(Request $request, $userId, $testId)
    {
        $user = User::findOrFail($userId);

        $responses = collect($request->responses);

        $existingResponses = $user->questions()
            ->whereIn('questions.id', $responses->pluck('question_id'))
            ->get()
            ->pluck('pivot', 'id')
            ->toArray();

        $attachData = [];
        foreach ($responses as $response) {
            $questionId = $response['question_id'];
            $responseValue = $response['response_value'];

            if (isset($existingResponses[$questionId])) {
                $user->questions()->updateExistingPivot($questionId, ['response_value' => $responseValue]);
            } else {
                $attachData[$questionId] = ['response_value' => $responseValue];
            }
        }

        if (!empty($attachData)) {
            $user->questions()->attach($attachData);
        }

        $totalScore = $user->questions()
            ->wherePivotIn('question_id', $responses->pluck('question_id')->toArray())
            ->sum('response_value');

        $user->tests()->updateExistingPivot($testId, [
            'status_id' => Status::FINALIZADO,
            'score' => $totalScore / count($responses),
        ]);

        return response()->json([
            'success' => true,
            'titleAlert' => '¡Se finalizo la evaluación!',
            'textAlert' => 'Esta evaluación ha dado cierre por un administrador',
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
        $user = User::query()->findOrFail($id);

        $tests = $user->tests()
            ->with([
                'competency',
                'questions' => function ($query) use ($id) {
                    $query->with(['users' => function ($query) use ($id) {
                        $query->where('user_id', $id)
                            ->withPivot('response_value');
                    }]);
                }
            ])
            ->get();

        $tests->each(function ($test) {
            $test->pivot->load('status');
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
