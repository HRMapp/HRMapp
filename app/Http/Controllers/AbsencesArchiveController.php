<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Http\JsonResponse;
use App\Models\AbsencesArchive;
use Illuminate\Http\Request;

class AbsencesArchiveController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        try {
            $archive = AbsencesArchive::join('employees', 'absences_archive.employee_id', '=', 'employees.id')
                ->join('absence_types', 'absences_archive.type_id', '=', 'absence_types.id')
                ->get(['absences_archive.*','employees.first_name','employees.last_name' ,'employees.position','employees.department', 'employees.location','absence_types.name' ]);
//            $employees = AbsencesArchive::all();
            return response()->json($archive);
        } catch (\Throwable $e) {

        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     * sdadasda da orpawq gornoto
     */
    public function store(Request $request)
    {
        try {
            $absence_archive = AbsencesArchive::insert([
                'employee_id' => $request['employee_id'],
                'type_id' => $request['type_id'],
                'days' => $request['days'],
                'due_date' => $request['due_date']
            ]);
        } catch (\Exception $e) {
            throw $e;
        }
        return $absence_archive;
    }
}
