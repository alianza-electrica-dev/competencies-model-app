<?php

use App\Http\Controllers\Admin\RioController;
use App\Http\Controllers\Admin\TestController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Middleware\IsAdmin;
use Illuminate\Support\Facades\Route;

Route::prefix('/admin')->name('admin.')->group(function () {

  //? ****** MANAGERS ROUTES ****** //
  Route::prefix('/managers')->name('managers.')->group(function () {
    Route::get('/get-managers', [UserController::class, 'getManagers'])->name('get.managers');
    Route::post('/upsert/${id}', [UserController::class, 'upsert'])->name('upsert');
    Route::post('/status/${id}', [UserController::class, 'status'])->name('status');
  });

  //? ****** EMPLOYEES ROUTES ****** //
  Route::prefix('/employees')->name('employees.')->group(function () {
    Route::get('/employees', [UserController::class, 'indexContent'])->name('index_content');

    Route::get('/competencies/{competencyId}/{areaId}', [TestController::class, 'getCompetencies'])
      ->name('get.competencies');

    Route::post('/competencies/{userId}', [TestController::class, 'assingEvaluation'])
      ->name('assing.evaluation');

    Route::get('/employee/evaluations/{id}', [TestController::class, 'getUserTests'])
      ->name('user.test');

    Route::post('employee/evaluation/close/{userId}/{testId}', [TestController::class, 'closeEvaluation'])
      ->name('close.evaluation');
  });

  //? ****** RIOS ROUTES ****** //
  Route::prefix('/rios')->name('rios.')->group(function () {
    Route::get('/employees', [RioController::class, 'getRiosEmployees'])->name('rios_employees');
  });
})->middleware([IsAdmin::class]);
