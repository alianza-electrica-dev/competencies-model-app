<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\UserController;
use App\Models\User;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('main');
});

Route::prefix('/auth')->name('auth.')->group(function () {
    Route::post('/login', [AuthController::class, 'login'])->name('login');
    Route::post('/register', [AuthController::class, 'register'])->name('register');
    Route::get('/get-areas', [AuthController::class, 'getAreas'])->name('get_areas');
})->middleware(['guest']);

require __DIR__ . '/admin.php';
require __DIR__ . '/client.php';

Route::view('/{path?}', 'main');
Route::view('/admin/{path?}', 'main');
Route::view('/client/{path?}', 'main');
