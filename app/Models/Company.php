<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Company extends Model
{
    use HasFactory;

    const ALIANZA_ELECTRICA       = 1;
    const FG_ELECTRICAL           = 2;
    const TABLEROS_ARRANCADORES   = 3;
    const MANOFACTURING           = 4;
    const EIPSA                   = 5;

    public function users(): HasMany
    {
        return $this->hasMany(User::class);
    }
}
