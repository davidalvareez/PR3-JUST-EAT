<?php

use App\Http\Controllers\RestauranteController;
use Illuminate\Support\Facades\Route;

//ruta para el login

Route::get('', [RestauranteController::class, 'login']);

Route::post('login',[RestauranteController::class, 'loginPost']);

//ruta para el registro de usuarios

Route::get('registro',[RestauranteController::class, 'registro']);

Route::post('registro',[RestauranteController::class, 'registroPost']);
