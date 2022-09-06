<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\SalariesController;
use App\Http\Controllers\SickLeaveController;
use App\Http\Controllers\DepartmentsController;
use App\Http\Controllers\PositionsController;
use App\Http\Controllers\LocationsController;
use App\Http\Controllers\AbsenceTypesController;
use App\Http\Controllers\AbsencesController;
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


/*
 * AUTH SHOULD BE REMVOED FOR NOW FOR DEV PURPOSES, SSL IS NEEDED
 */
//Route::any('/{any}', [UserController::class, 'index'])->where('any', '^(?!api).*$');
//Route::any('/users', [UserController::class, 'index']);
//Route::get('/users/me', [UserController::class, 'user'])->middleware('auth:api');
//Route::post('/users/register', [UserController::class, 'register']);
//
////Route::get('/employee/me', [EmployeeController::class, 'me'])->middleware('auth:api');
//Route::resource('/employee', EmployeeController::class)
//    ->only(['index', 'show', 'store', 'update', 'destroy'])
//    ->middleware('auth:api');
//
//Route::resource('/salaries', SalariesController::class)
//    ->only(['index', 'show', 'store', 'update', 'destroy'])
//    ->middleware('auth:api');
//
//Route::get('/sick-leave/export', [SickLeaveController::class, 'export'])
//    ->middleware('auth:api');
//Route::resource('/sick-leave', SickLeaveController::class)
//    ->only(['index', 'show', 'store', 'update', 'destroy'])
//    ->middleware('auth:api');
//
//
//Route::get('/mail/me', [MailController::class, 'sendMail']);
//
//Route::resource('/departments', DepartmentsController::class)
//    ->only(['index', 'show', 'store', 'update', 'destroy'])
//    ->middleware('auth:api');
//
//Route::resource('/positions', PositionsController::class)
//    ->only(['index', 'show', 'store', 'update', 'destroy'])
//    ->middleware('auth:api');
//
//Route::resource('/locations', LocationsController::class)
//    ->only(['index', 'show', 'store', 'update', 'destroy'])
//    ->middleware('auth:api');
//
//Route::resource('/absence-types', AbsenceTypesController::class)
//    ->only(['index', 'show', 'store', 'update', 'destroy'])
//    ->middleware('auth:api');
//
//Route::resource('/absences', AbsencesController::class)
//    ->only(['index', 'show', 'store', 'update', 'destroy'])
//    ->middleware('auth:api');


Route::any('/users', [UserController::class, 'index']);
Route::get('/users/me', [UserController::class, 'user']);
Route::post('/users/register', [UserController::class, 'register']);

//Route::get('/employee/me', [EmployeeController::class, 'me'])->middleware('auth:api');
Route::resource('/employee', EmployeeController::class)
    ->only(['index', 'show', 'store', 'update', 'destroy']);

Route::resource('/salaries', SalariesController::class)
    ->only(['index', 'show', 'store', 'update', 'destroy']);

Route::get('/sick-leave/export', [SickLeaveController::class, 'export'])
    ->middleware('auth:api');
Route::resource('/sick-leave', SickLeaveController::class)
    ->only(['index', 'show', 'store', 'update', 'destroy']);


Route::get('/mail/me', [MailController::class, 'sendMail']);

Route::resource('/departments', DepartmentsController::class)
    ->only(['index', 'show', 'store', 'update', 'destroy']);

Route::resource('/positions', PositionsController::class)
    ->only(['index', 'show', 'store', 'update', 'destroy']);

Route::resource('/locations', LocationsController::class)
    ->only(['index', 'show', 'store', 'update', 'destroy']);

Route::resource('/absence-types', AbsenceTypesController::class)
    ->only(['index', 'show', 'store', 'update', 'destroy']);

Route::resource('/absences', AbsencesController::class)
    ->only(['index', 'show', 'store', 'update', 'destroy']);
