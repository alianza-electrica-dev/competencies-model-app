<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Test extends Model
{
    use HasFactory;

    const ENFOQUE_CLIENTE = 1;
    const ORIENTACION_RESULTADOS = 2;
    const TRABAJO_EQUIPO_COLABORACION = 3;
    const ADMINISTRACION_PROYECTOS = 4;
    const APLICACION_CONOCIMIENTO_PROFESIONAL = 5;
    const POLITICAS_FINANCIERAS = 6;
    const ENTENDIMIENTO_NEGOCIO = 7;
    const ENTENDIMIENTO_GLOBAL = 8;
    const CONSULTOR_CONFIABLE = 9;
    const DECISIONES_OPERACION_VENTAS = 10;
    const DESARROLLO_TALENTO_ORGANIZACIONAL = 11;
    const EFICIENCIA_OPERATIVA = 12;
    const ENFOQUE_CALIDAD = 13;
    const ESPIRITU_EMPRENDEDOR = 14;
    const EXCELENCIA_MERCADOTECNIA = 15;
    const EXCELENCIA_PROCESOS_FINANCIEROS = 16;
    const EXCELENCIA_TECNICA_PRODUCTO = 17;
    const GENERACION_LEALTAD_CLIENTE = 18;
    const GENERACION_OPORTUNIDADES_NEGOCIO = 19;
    const GESTION_PROCESOS_GLOBALES = 20;
    const INNOVACION = 21;
    const LIDERAZGO_ESTRATEGIA_NEGOCIO = 22;
    const NEGOCIACION = 23;
    const PLANEACION_VENTAS_ESTRATEGICAS = 24;
    const PLANEACION_ORGANIZACION = 25;
    const RELACIONES_CONFIANZA = 26;
    const RELACIONES_EXTERNAS = 27;
    const REPUTACION_SERVICIO = 28;
    const SEGUIMIENTO = 29;
    const DESARROLLO_GERENTE = 30;
    const EXCELENCIA_EJECUCION = 31;
    const LIDERAZGO_EQUIPO = 32;
    const OPTIMIZACION_RECURSOS_PRESUPUESTOS = 33;
    const PENSAMIENTO_CREATIVO = 34;
    const CAPACIDAD_ORGANIZACIONAL = 35;
    const DIRECCION_ESTRATEGICA = 36;
    const INFLUENCIA_IMPACTO = 37;
    const LIDERAZGO_ORGANIZACIONAL = 38;
    const VISION_NEGOCIO = 39;

    public function areas(): BelongsToMany
    {
        return $this->belongsToMany(Area::class);
    }

    public function competency(): BelongsTo
    {
        return $this->belongsTo(Competency::class);
    }

    public function questions(): HasMany
    {
        return $this->hasMany(Question::class);
    }

    public function status(): BelongsTo
    {
        return $this->belongsTo(Status::class);
    }

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class)
            ->using(TestUser::class)
            ->withPivot('status_id', 'score')
            ->withTimestamps();
    }
}
