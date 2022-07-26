<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SickLeave;
use Illuminate\Routing\Controller;
use Illuminate\Http\JsonResponse;

class SickLeaveController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        try {
            $sickLeave = SickLeave::join('employees', 'sick_leave.employee_id', '=', 'employees.id')
                ->get(['sick_leave.*', 'employees.first_name','employees.last_name' ,'employees.position','employees.department', 'employees.location' ]);
            return response()->json($sickLeave);

            // return only the employees //
            //            $employees = Employee::all()->toArray();
            //            return response()->json($employees);



//            $sickLeaveRequests = SickLeaveRequest::all()->toArray();
//            return response()->json($sickLeaveRequests);
        } catch (\Throwable $e) {

        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the registered sick leave from storage.
     *
     * @param  int  $id
     * @return JsonResponse
     */
    public function destroy(int $id): JsonResponse
    {
        try {
            $sickLeave = SickLeave::find($id);
            if (!is_null($sickLeave)) {
                return response()->json($sickLeave->delete());
            }
        } catch (\Throwable $e) {
            return $this->handleThrowable($e);
        }
    }

}
