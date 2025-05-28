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
            $rio->objective = $request->objective;
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

    public function updateRio(Request $request, $id)
    {
        DB::beginTransaction();

        try {
            $rio = Rio::findOrFail($id);
            
            // Solo actualizar objective y total en la tabla rios
            if ($request->has('objective')) $rio->objective = $request->objective;
            if ($request->has('total')) $rio->total = $request->total;
            $rio->saveOrFail();

            // Actualizar solo los campos permitidos en data_rios
            if ($request->has('data_rios')) {
                foreach ($request->data_rios as $dataRio) {
                    $dataRioModel = DataRio::findOrFail($dataRio['id']);
                    if (isset($dataRio['responsability'])) $dataRioModel->responsibility = $dataRio['responsability'];
                    if (isset($dataRio['indicator'])) $dataRioModel->indicator = $dataRio['indicator'];
                    if (isset($dataRio['weighing'])) $dataRioModel->weighing = $dataRio['weighing'];
                    $dataRioModel->saveOrFail();
                }
            }

            DB::commit();

            return response()->json([
                'success' => true,
                'titleAlert' => '¡Documento actualizado!',
                'textAlert' => 'El documento RIO ha sido actualizado correctamente',
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
