<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('danhsach', [ProductController::class ,'getDanhSach']);
Route::post('danhsach/them', [ProductController::class ,'postThem']);
Route::get('danhsach/xoa/{id}', [ProductController::class ,'getXoa']);
Route::get('danhsach/sua/{id}', [ProductController::class ,'getSua']);
Route::post('danhsach/sua/{id}', [ProductController::class ,'postSua']);

Route::post('register', [UserController::class ,'postRegister']);
Route::post('user', [UserController::class ,'getUser']);
Route::post('login', [UserController::class ,'postLogin']);

Route::get('home', [HomeController::class ,'getHome']);

