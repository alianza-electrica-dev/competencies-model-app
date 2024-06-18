<?php

use App\Http\Controllers\Client\TestController;
use Illuminate\Support\Facades\Route;

Route::prefix('/client')->name('client.')->group(function () {
  Route::get('/evaluations', [TestController::class, 'indexContent'])
    ->name('evaluations.indexContent');

  Route::post('/evaluations-response/{testId}', [TestController::class, 'answerTest'])
    ->name('evaluations.answer_test');
});
