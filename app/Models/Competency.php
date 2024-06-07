<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Competency extends Model
{
    use HasFactory;

    const CLAVE       = 1;
    const PROFESIONAL = 2;
    const GERENCIAL   = 3;
    const DIRECCIÓN   = 4;

    public function tests(): HasMany
    {
        return $this->hasMany(Test::class);
    }
}
