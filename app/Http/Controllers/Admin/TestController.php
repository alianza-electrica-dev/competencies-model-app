<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Competency;
use App\Models\Status;
use App\Models\Test;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TestController extends Controller
{

    public function prueba(Request $request, $testId)
    {

        // Obtener el usuario
        $user = User::findOrFail(3);

        // Obtener las respuestas enviadas
        $responses = collect($request->responses);

        // Obtener las preguntas existentes del usuario para evitar duplicados
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
                // Si la respuesta ya existe, actualizarla
                $user->questions()->updateExistingPivot($questionId, ['response_value' => $responseValue]);
            } else {
                // Si no existe, crear una nueva respuesta
                $attachData[$questionId] = ['response_value' => $responseValue];
            }
        }

        // Adjuntar nuevas respuestas si hay alguna
        if (!empty($attachData)) {
            $user->questions()->attach($attachData);
        }

        // Opcional: Actualizar el puntaje del test del usuario
        $totalScore = $user->questions()
            ->wherePivotIn('question_id', $responses->pluck('question_id')->toArray())
            ->sum('response_value');

        // Actualizar el pivote de tests con el puntaje y el estado
        $user->tests()->updateExistingPivot($testId, [
            'status_id' => Status::FINALIZADO,
            'score' => $totalScore,
        ]);

        // Devolver una respuesta
        return response()->json([
            'success' => true,
            'message' => 'Respuestas actualizadas correctamente',
        ]);
    }

    public function updateResponses(Request $request, $testId)
    {
        dd($request->all());
        // Obtener el usuario
        $user = User::findOrFail(Auth::user()->id);

        // Obtener las respuestas enviadas
        $responses = $request->responses;

        // Procesar las respuestas para attach
        $attachData = [];
        foreach ($responses as $response) {
            $attachData[$response['question_id']] = ['response_value' => $response['response_value']];
        }

        // Adjuntar las respuestas (crea nuevas o actualiza existentes)
        $user->responses()->syncWithoutDetaching($attachData);

        // Opcional: Actualizar el puntaje del test del usuario
        $totalScore = $user->responses()
            ->wherePivotIn('question_id', array_column($responses, 'question_id'))
            ->sum('response_value');

        $user->tests()->updateExistingPivot($testId, [
            'status_id' => Status::FINALIZADO,
            'score' => $totalScore,
        ]);

        // Devolver una respuesta
        return response()->json([
            'success' => true,
            'message' => 'Respuestas actualizadas correctamente',
        ]);
    }
    public function getTestsByArea($userId, $competencyId)
    {
        $test = $this->SearchEvaluationsToAssing($userId, $competencyId);
        return response()->json([
            'success' => true,
            'test' => $test,
            'competencies' => Competency::all(),
        ]);
    }

    private function SearchEvaluationsToAssing($userId, $competencyId)
    {
        $user = User::query()->findOrFail($userId);
        $areaId = $user->area->id;

        switch ($competencyId) {
            case 1:
                return Test::whereHas('areas', function ($query) use ($areaId) {
                    $query->where('area_id', $areaId);
                })->get();

            case 2:
                return Test::where('competency_id', 3)->get();

            case 3:
                return Test::where('competency_id', 4)->get();

            default:
                return [];
        }
    }
}
