<?php

use App\Http\Controllers\RestauranteController;
use Illuminate\Support\Facades\Route;

//ruta para la vista
Route::get('/', [RestauranteController::class, 'inicio']);

//ruta para mostrar los restaurantes
Route::get('/mostrarRestaurantes',[RestauranteController::class, 'mostrarRestaurante']);
//ruta para el login
Route::get('login', [RestauranteController::class, 'login']);
Route::post('loginPost',[RestauranteController::class, 'loginPost']);

//ruta para el logout
Route::get("logout",[RestauranteController::class,'logout']);

//ruta para el registro de usuarios
Route::get('registro',[RestauranteController::class, 'registro']);
Route::post('registroPost',[RestauranteController::class, 'registroPost']);
