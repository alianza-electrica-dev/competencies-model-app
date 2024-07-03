<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Area extends Model
{
    use HasFactory;

    const ADMINISTRACION          = 1;
    const ALMACEN                 = 2;
    const ATENCION_CLIENTES       = 3;
    const AUDITORIA_EXTERNA       = 4;
    const AUDITORIA_INTERNA       = 5;
    const CALIDAD                 = 6;
    const COMPRAS                 = 7;
    const INGENIERIA              = 8;
    const LOGISTICA               = 9;
    const MANTENIMIENTO           = 10;
    const MANUFACTURA             = 11;
    const MERCADOTECNIA           = 12;
    const PRODUCCION              = 13;
    const RECURSOS_HUMANOS        = 14;
    const SEGURIDAD_HIGIENE       = 15;
    const TECNOLOGIAS_INFORMACION = 16;
    const VENTAS                  = 17;

    public function users(): HasMany
    {
        return $this->hasMany(User::class);
    }

    public function tests(): BelongsToMany
    {
        return $this->belongsToMany(Test::class);
    }
}