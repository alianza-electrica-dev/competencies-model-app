<?php

use App\Http\Controllers\UserController;
use App\Models\User;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('main');
});



Route::prefix('users')->name('users.')->group(function () {
    Route::get('/managers', [UserController::class, 'getManagers'])->name('managers');
    Route::get('/employees', [UserController::class, 'getEmployees'])->name('employees');
});

Route::get('employe-test', [UserController::class, 'getTest'])->name('employe.test');


Route::view('/{path?}', 'main');
