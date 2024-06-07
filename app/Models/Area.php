<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Area extends Model
{
    use HasFactory;

    const ATENCION_CLIENTES            = 1;
    const AUDITORIA_EXTERNA            = 2;
    const AUDITORIA_INTERNA            = 3;
    const COMPRAS_MATERIALES           = 4;
    const DESARROLLO_NUEVOS_NEGOCIOS   = 5;
    const FINANZAS                     = 6;
    const INGENERIA_DESARROLLO         = 7;
    const INVESTIGACION_DESARROLLO     = 8;
    const LOGISTICA_DISTRIBUCION       = 9;
    const MANUFACTURA                  = 10;
    const MERCADOTECNIA                = 11;
    const RECURSOS_HUMANOS             = 12;
    const SOPORTE_ADMINISTRATIVO       = 13;
    const TECNOLOGIA_INFORMACION       = 14;
    const VENTAS                       = 15;

    public function users(): HasMany
    {
        return $this->hasMany(User::class);
    }

    public function tests(): BelongsToMany
    {
        return $this->belongsToMany(Test::class);
    }
}