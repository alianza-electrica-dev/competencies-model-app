<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\DataRio;
use App\Models\Period;
use App\Models\Rio;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class RioController extends Controller
{
    public function getRiosEmployees()
    {
        try {
            return response()->json([
                'success' => true,
                'employees' => Auth::user()->getAllSubordinates(),
                'periods' => Period::all(),
            ]);
        } catch (\Throwable $th) {
            Log::error('Error al obtener empleados y períodos: ' . $th->getMessage());
            Log::error('Stack trace: ' . $th->getTraceAsString());
            
            return response()->json([
                'success' => false,
                'titleAlert' => 'Error',
                'textAlert' => 'Ha ocurrido un error al obtener los datos',
                'error' => $th->getMessage()
            ], 500);
        }
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
                if (isset($rioData['objective'])) {
                    $dataRio->objective = $rioData['objective'];
                }
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
            Log::error('Error al crear RIO: ' . $th->getMessage());
            Log::error('Stack trace: ' . $th->getTraceAsString());
            
            return response()->json([
                'success' => false,
                'titleAlert' => 'Error',
                'textAlert' => 'Ha ocurrido un error al crear el documento RIO',
                'error' => $th->getMessage()
            ], 500);
        }
    }

    public function updateRio(Request $request, $id)
    {
        DB::beginTransaction();

        try {
            $dataRio = DataRio::findOrFail($id);
            
            // Solo actualizar los campos permitidos
            if (isset($request->real)) $dataRio->real = $request->real;
            if (isset($request->compliance)) $dataRio->compliance = $request->compliance;
            if (isset($request->observations)) $dataRio->observations = $request->observations;
            
            $dataRio->saveOrFail();

            DB::commit();

            return response()->json([
                'success' => true,
                'titleAlert' => '¡Documento actualizado!',
                'textAlert' => 'El documento RIO ha sido actualizado correctamente',
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error('Error al actualizar RIO: ' . $th->getMessage());
            Log::error('Stack trace: ' . $th->getTraceAsString());
            
            return response()->json([
                'success' => false,
                'titleAlert' => 'Error',
                'textAlert' => 'Ha ocurrido un error al actualizar el documento RIO',
                'error' => $th->getMessage()
            ], 500);
        }
    }

    public function getEmployeeRios($employeeId)
    {
        try {
            $rios = Rio::with(['dataRios', 'period', 'user'])
                ->where('user_id', $employeeId)
                ->get();

            if ($rios->isEmpty()) {
                return response()->json([
                    'success' => true,
                    'titleAlert' => 'Información',
                    'textAlert' => 'No se encontraron RIOs para este empleado',
                    'rios' => []
                ]);
            }

            return response()->json([
                'success' => true,
                'rios' => $rios
            ]);
        } catch (\Throwable $th) {
            Log::error('Error al obtener RIOs del empleado: ' . $th->getMessage());
            Log::error('Stack trace: ' . $th->getTraceAsString());
            
            return response()->json([
                'success' => false,
                'titleAlert' => 'Error',
                'textAlert' => 'Ha ocurrido un error al obtener los RIOs del empleado',
                'error' => $th->getMessage()
            ], 500);
        }
    }
}
