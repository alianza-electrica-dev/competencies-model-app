<?php

use Illuminate\Support\Facades\Route;

route::get('/welcome', function () {
  return view('welcome');
});

