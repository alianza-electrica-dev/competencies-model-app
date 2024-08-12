<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Branch extends Model
{
    use HasFactory;

    const ATIZAPAN        = 1;
    const CULIACAN        = 2;
    const HERMOSILLO      = 3;
    const LA_PAZ          = 4;
    const LEON            = 5;
    const MERIDA_YUCATAN  = 6;
    const MONTERREY       = 7;
    const PUEBLA          = 8;
    const QUERETARO       = 9;
    const SAN_LUIS_POTOSI = 10;

    public function users(): HasMany
    {
        return $this->hasMany(User::class);
    }
}
