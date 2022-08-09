<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\SalariesController;
use App\Http\Controllers\SickLeaveController;
use App\Http\Controllers\MailController;

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

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});

//Route::any('/{any}', [UserController::class, 'index'])->where('any', '^(?!api).*$');
Route::any('/users', [UserController::class, 'index']);
Route::get('/users/me', [UserController::class, 'user'])->middleware('auth:api');
Route::post('/users/register', [UserController::class, 'register']);

//Route::get('/employee/me', [EmployeeController::class, 'me'])->middleware('auth:api');
Route::resource('/employee', EmployeeController::class)
    ->only(['index', 'show', 'store', 'update', 'destroy'])
    ->middleware('auth:api');
Route::get('/employee/id', EmployeeController::class, 'getEmployee')
    ->middleware('auth:api');

Route::resource('/salaries', SalariesController::class)
    ->only(['index', 'show', 'store', 'update', 'destroy'])
    ->middleware('auth:api');

Route::get('/sick-leave/export', [SickLeaveController::class, 'export'])
    ->middleware('auth:api');
Route::resource('/sick-leave', SickLeaveController::class)
    ->only(['index', 'show', 'store', 'update', 'destroy'])
    ->middleware('auth:api');


Route::get('/mail/me', [MailController::class, 'sendMail']);
