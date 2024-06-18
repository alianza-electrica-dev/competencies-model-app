<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Status;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TestController extends Controller
{
    public function indexContent()
    {
        $tests = User::find(Auth::user()->id)
            ->tests()
            ->with(['questions', 'competency'])
            ->get();

        $tests->each(function ($test) {
            $test->pivot->load('status');
        });

        return response()->json([
            'success' => true,
            'tests' => $tests
        ]);
    }

    public function answerTest(Request $request, $testId)
    {
        $score = array_reduce($request->responses, function ($carry, $item) {
            return $carry + $item['response_value'];
        }, 0);

        $user = User::findOrFail(Auth::user()->id);
        $responseData = [];

        foreach ($request->responses as $response) {
            $responseData[$response['question_id']] = ['response_value' => $response['response_value']];
        }

        $user->questions()->attach($responseData);

        $user->tests()->updateExistingPivot($testId, [
            'status_id' => Status::POR_REVISAR,
            'score' => $score,
        ]);


        return response()->json([
            'success' => true,
            'titleAlert' => 'Respuestas guardadas con éxito',
            'textAlert' => 'Espere a la revision de algun superior para continuar',
        ]);
    }
}
