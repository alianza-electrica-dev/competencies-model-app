<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Status;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\TestUser;

class TestController extends Controller
{
    public function indexContent()
    {
        $user = Auth::user();
        $tests = $user->tests()
            ->with(['questions', 'competency'])
            ->withPivot('id', 'status_id', 'score', 'created_at')
            ->wherePivot('created_at', '>=', now()->startOfYear())
            ->wherePivot('created_at', '<=', now()->endOfYear())
            ->get();

        $statusIds = $tests->pluck('pivot.status_id')->unique()->filter();
        $statuses = \App\Models\Status::whereIn('id', $statusIds)->get()->keyBy('id');

        $tests->each(function ($test) use ($statuses) {
            $test->pivot->status = $statuses[$test->pivot->status_id] ?? null;
        });

        $rios = $user->rios()->get();

        return response()->json([
            'success' => true,
            'tests' => $tests,
            'rios' => $rios,
        ]);
    }

    public function answerTest(Request $request, $testId)
    {
        try {
            $user = Auth::user();
            $testUserId = $request->test_user_id;
            $testUser = TestUser::find($testUserId);
            if (!$testUser) {
                return response()->json([
                    'success' => false,
                    'message' => 'No se encontró el registro del test',
                ], 404);
            }

            $responses = collect($request->responses);
            $score = $responses->sum('response_value');
            $responseData = $responses->mapWithKeys(function ($response) use ($testUserId) {
                return [
                    $response['question_id'] => [
                        'response_value' => $response['response_value'],
                        'test_user_id' => $testUserId,
                    ]
                ];
            })->toArray();

            $user->questions()->attach($responseData);

            $testUser->update([
                'status_id' => Status::POR_REVISAR,
                'score' => $score / max($responses->count(), 1),
            ]);

            return response()->json([
                'success' => true,
                'titleAlert' => 'Respuestas guardadas con éxito',
                'textAlert' => 'Espere a la revisión de algún superior para continuar',
            ]);
        } catch (\Throwable $e) {
            \Log::error('Error en answerTest: ' . $e->getMessage(), [
                'exception' => $e,
                'user_id' => Auth::id(),
                'test_id' => $testId,
            ]);
            return response()->json([
                'success' => false,
                'titleAlert' => 'Error en el servidor',
                'textAlert' => 'Ocurrió un error inesperado. Contacte al administrador.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
