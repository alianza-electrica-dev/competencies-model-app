<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\UserController;
use App\Models\User;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('main');
});

Route::post('/login', [AuthController::class, 'login'])->name('login');
// Route::prefix('users')->name('users.')->group(function () {
//     Route::get('/managers', [UserController::class, 'getManagers'])->name('managers');
//     Route::get('/employees', [UserController::class, 'getEmployees'])->name('employees');
// });

// Route::get('employe-test', [UserController::class, 'getTest'])->name('employe.test');


require __DIR__ . '/admin.php';
require __DIR__ . '/client.php';

Route::view('/{path?}', 'main');
Route::view('/admin/{path?}', 'main');
Route::view('/client/{path?}', 'main');
