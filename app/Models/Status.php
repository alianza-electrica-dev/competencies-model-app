<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    use HasFactory;

    const PENDIENTE    = 1;
    const POR_REVISAR  = 2;
    const FINALIZADO   = 3;
}
