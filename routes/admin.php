<?php

use App\Http\Controllers\Admin\TestController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Middleware\IsAdmin;
use Illuminate\Support\Facades\Route;

Route::prefix('/admin')->name('admin.')->group(function () {

  // ****** EMPLOYEES ROUTES ****** //
  Route::prefix('/managers')->name('managers.')->group(function () {
    Route::get('/get-managers', [UserController::class, 'getManagers'])->name('get.managers');
  });

  // ****** EMPLOYEES ROUTES ****** //
  Route::prefix('/employees')->name('employees.')->group(function () {
    Route::get('/employees', [UserController::class, 'indexContent'])->name('index_content');
    Route::get('/employee-evaluation/{id}', [UserController::class, 'getUserTests'])->name('user_test');
    Route::get('/evaluations-area/{userId}/{competencyId}', [TestController::class, 'getTestsByArea'])->name('tests.area');
  });

  Route::post('prueba/{testId}', [TestController::class, 'prueba'])->name('prueba');
})->middleware([IsAdmin::class]);
