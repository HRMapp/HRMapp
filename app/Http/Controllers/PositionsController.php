<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Positions;
use Illuminate\Routing\Controller;
use Illuminate\Http\JsonResponse;

class PositionsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        try {
            $positions = Positions::all();
        } catch (\Throwable $e) {

        }
        return response()->json($positions);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
    //     * @return JsonResponse
     */
    public function store(Request $request)
    {
        try {
            $position = Positions::insert([
                'name' => $request['name'],
                'job_description' => $request['job_description']
            ]);
        } catch (\Exception $e) {
            throw $e;
        }
        return $position;
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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return JsonResponse
     */
    public function update(Request $request, $id)
    {
        try {
            $position = Positions::where('id', $id)->update(
                [
                    'name' => $request['position'],
                    'job_description' => $request['job_description']
                ]
            );

        } catch (\Throwable $e){
            throw $e;
        };

        return response()->json($position);
    }

    /**
     * Remove the registered position from storage.
     *
     * @param  int  $id
     * @return JsonResponse
     */
    public function destroy(int $id): JsonResponse
    {
        try {
            $position = Positions::find($id);
            if (!is_null($position)) {
                return response()->json($position->delete());
            }
        } catch (\Throwable $e) {
            return $this->handleThrowable($e);
        }
        return response()->json($position);
    }
}

