<?php

use App\Http\Controllers\RestauranteController;
use Illuminate\Support\Facades\Route;

Route::get('', [RestauranteController::class, 'login']);

Route::post('login',[RestauranteController::class, 'loginPost']);

Route::get('registro',[RestauranteController::class, 'registro']);

Route::post('registro',[RestauranteController::class, 'registroPost']);
