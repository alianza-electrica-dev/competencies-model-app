<?php

use App\Http\Controllers\Admin\UserController;
use App\Http\Middleware\IsAdmin;
use Illuminate\Support\Facades\Route;

// route::get('/admin/welcome', function () {
//   return view('welcome');
// })->middleware([IsAdmin::class]);


Route::prefix('/admin')->name('admin.')->group(function () {

  // ****** EMPLOYEES ROUTES ****** //
  Route::prefix('employees')->name('employees.')->group(function () {
    Route::get('/employees', [UserController::class, 'indexContent'])->name('index_content');
  });
})->middleware([IsAdmin::class]);
