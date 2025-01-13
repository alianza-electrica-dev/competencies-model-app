<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\DataRio;
use App\Models\Period;
use App\Models\Rio;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class RioController extends Controller
{
    public function getRiosEmployees()
    {
        return response()->json([
            'success' => true,
            'employees' => Auth::user()->getAllSubordinates(),
            'periods' => Period::all(),
        ]);
    }

    public function createRio(Request $request)
    {

        DB::beginTransaction();

        try {
            $rio = new Rio;
            $rio->user_id = $request->user_id;
            $rio->period_id = $request->period_id;
            $rio->saveOrFail();

            foreach ($request->rios as $rioData) {
                $dataRio = new DataRio;
                $dataRio->responsibility = $rioData['responsability'];
                $dataRio->indicator = $rioData['indicator'];
                $dataRio->weighing = $rioData['weighing'];
                $dataRio->rio_id = $rio->id;
                $dataRio->saveOrFail();
            }

            DB::commit();

            return response()->json([
                'success' => true,
                'titleAlert' => '¡Documento creado!',
                'textAlert' => 'El documento RIO ha sido creado correctamente',
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json([
                'error' => $th->getMessage(),
                'file' => $th->getFile(),
                'line' => $th->getLine(),
            ], 500);
        }
    }
}
