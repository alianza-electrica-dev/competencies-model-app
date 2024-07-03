<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Area;
use App\Models\Company;
use App\Models\Status;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return response()->json([
                'user' => Auth::user(),
                'success' => true,
                'isLogin' => true,
            ]);
        }

        return response()->json([
            'message' => 'Las credenciales proporcionadas no son correctas.',
            'success' => false
        ], 401);
    }


    public function logout(Request $request): RedirectResponse
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }

    public function register(Request $request)
    {
        DB::beginTransaction();

        try {
            $user = new User();
            $user->fill($request->all());
            $user->saveOrFail();

            $testIds = [1, 2, 3];
            $testData = [];

            foreach ($testIds as $testId) {
                $testData[$testId] = ['status_id' => Status::PENDIENTE];
            }

            $user->tests()->attach($testData);
            DB::commit();

            return response()->json([
                'success' => true,
                'isRegister' => true,
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

    public function getAreas()
    {
        return response()->json([
            'areas' => Area::all(),
            'companies' => Company::all(),
        ]);
    }
}
