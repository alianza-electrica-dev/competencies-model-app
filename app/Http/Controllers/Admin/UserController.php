<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AreaTest;
use App\Models\Role;
use App\Models\Test;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function indexContent()
    {
        $employees = User::query()
            ->where('role_id', Role::EMPLOYEE)
            ->with(['role', 'area'])
            ->get();

        return response()->json([
            'success' => true,
            'employees' => $employees,
        ]);
    }

    public function getUserTests($id)
    {
        $user = User::query()->findOrFail($id);
        $tests = $user->tests()
            ->with('competency')
            ->get();

        $tests->each(function ($test) {
            $test->pivot->load('status');
        });

        return response()->json([
            'success' => true,
            'tests' => $tests,
        ]);
    }

    public function assingEvaluation($id)
    {
        $user = User::query()->findOrFail($id);
        $evaluations = $this->SearchEvaluationsToAssing($id);

        if (count($evaluations) > 0) {
            $testData = [];

            foreach ($evaluations as $evaluation) {
                $testData[$evaluation] = ['status_id' => 1];
            }

            $user->tests()->attach($testData);

            return response()->json([
                'success' => true,
                'titleAlert' => '¡Evaluaciones asignadas correctamente!',
                'textAlert' => 'Todas las evaluaciones se han asignado a este usuario',
            ]);
        }

        return response()->json([
            'success' => false,
            'titleAlert' => '¡Ya no ha mas asignaciones!',
            'textAlert' => 'Este empleado ya tiene todas las evaluaciones asignadas',
        ]);
    }

    private function SearchEvaluationsToAssing($id)
    {
        $user = User::query()->findOrFail($id);
        $lastCompetency = $user->tests()->orderBy('competency_id', 'desc')->first()->competency_id;

        switch ($lastCompetency) {
            case 1:
                $testIds = AreaTest::query()
                    ->where('area_id', $user->area->id)
                    ->pluck('test_id')
                    ->toArray();

                return $testIds;

            case 2:
                $testIds = Test::query()
                    ->where('competency_id', 3)
                    ->pluck('id')
                    ->toArray();

                return $testIds;

            case 3:
                $testIds = Test::query()
                    ->where('competency_id', 4)
                    ->pluck('id')
                    ->toArray();

                return $testIds;

            default:
                return [];
        }
    }
}
