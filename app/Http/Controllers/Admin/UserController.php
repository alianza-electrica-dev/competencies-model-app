<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Role;
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

    public function getUserTests()
    {
        $user = User::query()->findOrFail(3);
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
}
