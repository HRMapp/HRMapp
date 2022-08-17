<?php

namespace App\Http\Controllers;
use Illuminate\Routing\Controller;
use Illuminate\Http\JsonResponse;

use App\Models\Absences;
use Illuminate\Http\Request;

class AbsencesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $absences = Absences::join('employees', 'absences.employee_id', '=', 'employees.id')
                ->join('absence_types', 'absences.type', '=', 'absence_types.id' )
                ->get(['absences.*', 'absence_types.name', 'employees.first_name','employees.last_name' ,'employees.position','employees.department', 'employees.location', 'employees.user_id']);

        } catch (\Throwable $e) {

        }
        return response()->json($absences);
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
        try {
            $absence = Absences::insert([
                'employee_id' => $request['employee_id'],
                'type' => $request['type'],
                'approval' => $request['approval'],
                'approval_status' => $request['approval_status'],
                'start_date' => $request['start_date'],
                'end_date' => $request['end_date'],
                'days' => $request['days'],
                'cost' => $request['cost'],
                'archive' => $request['archive'],
            ]);
        } catch (\Exception $e) {
            throw $e;
        }
        return $absence;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Absences  $absences
     * @return \Illuminate\Http\Response
     */
    public function show(Absences $absences)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Absences  $absences
     * @return \Illuminate\Http\Response
     */
    public function edit(Absences $absences)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Absences  $absences
//     * @return \Illuminate\Http\Response
     * @return JsonResponse
     */
    public function update(Request $request, $id)
    {
        try {
            $absence = Absences::where('id', $id)->update(
                [
                    'employee_id' => $request['employee_id'],
                    'absence_type' => $request['absence_type'],
                    'approval' => $request['approval'],
                    'approval_status' => $request['approval_status'],
                    'start_date' => $request['start_date'],
                    'end_date' => $request['end_date'],
                    'days' => $request['days'],
                    'cost' => $request['cost'],
                    'archive' => $request['archive'],
                ]
            );

        } catch (\Throwable $e){
            throw $e;
        };

        return response()->json($absence);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Absences  $absences
//     * @return \Illuminate\Http\Response
     * * @return JsonResponse
     */
    public function destroy($id)
    {
        try {
            $absence = Absences::find($id);
            if (!is_null($absence)) {
                return response()->json($absence->delete());
            }
        } catch (\Throwable $e) {
            return $this->handleThrowable($e);
        }
        return response()->json($absence);
    }
}
