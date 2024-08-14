<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Area;
use App\Models\AreaTest;
use App\Models\Branch;
use App\Models\Company;
use App\Models\Competency;
use App\Models\Role;
use App\Models\Status;
use App\Models\Test;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function getManagers()
    {
        $managers = User::query()
            ->whereIn('role_id', [Role::ADMIN, Role::MANAGERS, Role::LEADERS])
            ->where('id', '!=', 1)
            ->with(['role', 'area', 'company', 'branch', 'supervisor', 'subordinates'])
            ->get();

        return response()->json([
            'success' => true,
            'managers' => $managers,
            'areas' => Area::all(),
            'branches' => Branch::all(),
            'companies' => Company::all(),
            'roles' => Role::query()->where('id', '!=', Role::EMPLOYEE)->get(),
        ]);
    }

    public function indexContent()
    {
        if (Auth::user()->email === 'admin@alianzaelectrica.com') {
            $employees = User::query()
                ->where('id', '!=', 1)
                ->with(['role', 'area', 'tests', 'company', 'supervisor', 'subordinates', 'branch'])
                ->get();
        } else {
            $employees = Auth::user()->getAllSubordinates();
            $employees->load(['role', 'area', 'tests', 'company', 'supervisor', 'subordinates', 'branch']);
        }

        return response()->json([
            'success' => true,
            'employees' => $employees,
            'competencies' => Competency::all(),
            'tests' => Test::all(),
        ]);
    }

    public function upsert(Request $request, $id)
    {
        DB::beginTransaction();

        try {
            $user = User::firstOrNew(['id' => $id]);
            $user->fill($request->except(['password']));
            (!empty($request->password)) && $user->password = Hash::make($request->password);
            $user->saveOrFail();

            if ($id === 'FAKE_ID') {
                $testIds = [1, 2, 3];
                $testData = [];

                foreach ($testIds as $testId) {
                    $testData[$testId] = ['status_id' => Status::PENDIENTE];
                }

                $user->tests()->attach($testData);
            }

            DB::commit();

            return response()->json([
                'success' => true,
                'titleAlert' => $id === 'FAKE_ID' ? '¡Administrador agregado!' : '¡Administrador actualizado!',
                'textAlert' => $id === 'FAKE_ID'
                    ? 'El administrador ha sido agregado correctamente'
                    : 'El administrador ha sido actualizado correctamente',
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json([
                'error' => $th->getMessage(),
                'file' => $th->getFile(),
                'line' => $th->getLine(),
            ], 500);
        }
    }

    public function status($id)
    {
        DB::beginTransaction();

        try {
            $user = User::findOrFail($id);
            $user->active = !$user->active;
            $user->saveOrFail();
            DB::commit();

            return response()->json([
                'success' => true,
                'titleAlert' => $user->active ? '¡Administrador activado!' : '¡Administrador desactivado!',
                'textAlert' => $user->active
                    ? 'El administrador ha sido activado correctamente'
                    : 'El administrador ha sido desactivado correctamente',
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json([
                'error' => $th->getMessage(),
                'file' => $th->getFile(),
                'line' => $th->getLine(),
            ], 500);
        }
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
