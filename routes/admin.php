<?php

use App\Http\Controllers\Admin\UserController;
use App\Http\Middleware\IsAdmin;
use Illuminate\Support\Facades\Route;

Route::prefix('/admin')->name('admin.')->group(function () {

  // ****** EMPLOYEES ROUTES ****** //
  Route::prefix('/employees')->name('employees.')->group(function () {
    Route::get('/employees', [UserController::class, 'indexContent'])->name('index_content');
    Route::get('/employee-evaluation/{id}', [UserController::class, 'getUserTests'])->name('user_test');
    Route::post('/assing-evaluation/{id}', [UserController::class, 'assingEvaluation'])->name('add.evaluation');
  });
})->middleware([IsAdmin::class]);
