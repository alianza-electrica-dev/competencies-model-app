<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getManagers()
    {
        $managers = User::query()
            ->where('role_id', Role::ADMIN)
            ->with(['role', 'area'])
            ->get();

        return response()->json([
            'success' => true,
            'managers' => $managers,
        ]);
    }

    public function getEmployees()
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

    public function getTest($id = 3)
    {
        $user = User::findOrFail($id);
        // $user = User::where('id', $id)
        //     ->with(['tests.questions'])
        //     ->first();

        $tests = $user->tests()
            ->with(['questions', 'competency'])
            ->get();

        return response()->json([
            'success' => true,
            'user' => $user,
            'tests' => $tests,
        ]);
    }
}
