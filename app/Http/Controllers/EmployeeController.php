<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;
use Illuminate\Routing\Controller;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
//            $employees = Employee::join('salaries', 'employees.id', '=', 'salaries.employee_id')
//                ->get(['employees.*', 'salaries.gross_salary']);
            $employees = Employee::all();
            return response()->json($employees);

            // return only the employees //
            //            $employees = Employee::all()->toArray();
            //            return response()->json($employees);
        } catch (\Throwable $e) {

        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $employee = Employee::join('salaries', 'employees.id', '=', 'salaries.employee_id')
                ->where(['employees.user_id' => $id])->first();

            return response()->json($employee);
        } catch (\Throwable $e) {

        }
    }


    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
