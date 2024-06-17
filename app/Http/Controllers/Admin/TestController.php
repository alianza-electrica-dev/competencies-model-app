<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Competency;
use App\Models\Test;
use App\Models\User;
use Illuminate\Http\Request;

class TestController extends Controller
{
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
