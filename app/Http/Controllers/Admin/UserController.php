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
}
