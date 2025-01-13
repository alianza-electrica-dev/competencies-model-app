<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Period;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RioController extends Controller
{
    public function getRiosEmployees()
    {
        return response()->json([
            'success' => true,
            'employees' => Auth::user()->getAllSubordinates(),
            'periods' => Period::all(),
        ]);
    }
}
