<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;

Route::get('/check-auth', function (Request $request) {
    $user = $request->user();
    
    return response()->json([
        'message' => 'Access granted',
        'user'=> $user,
    ]);
})->middleware('auth:sanctum');


Route::post('/login', [AuthController::class,'login'])->name('login');

Route::post('/register', [AuthController::class,'register'])->name('register');

Route::get('/user-check', [AuthController::class,'checkLoggedIn']);


