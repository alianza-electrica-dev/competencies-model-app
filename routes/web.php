<?php

use App\Http\Controllers\Auth\AuthController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('main');
});

Route::prefix('/auth')->name('auth.')->group(function () {
    Route::post('/login', [AuthController::class, 'login'])->name('login');
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
    Route::post('/register', [AuthController::class, 'register'])->name('register');
    Route::get('/get-areas', [AuthController::class, 'getCatalogs'])->name('get_catalogs');
})->middleware(['guest']);

Route::get('/auth/check', function () {
    return response()->json([
        'authenticated' => Auth::check(),
        'user' => Auth::user(),
    ]);
})->name('auth_check');

require __DIR__ . '/admin.php';
require __DIR__ . '/client.php';

Route::view('/{path?}', 'main')->where('path', '.*');
