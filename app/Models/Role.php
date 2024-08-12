<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Role extends Model
{
    use HasFactory;

    const ADMIN       = 1;
    const MANAGERS    = 2;
    const LEADERS     = 3;
    const EMPLOYEE    = 4;

    public function users(): HasMany
    {
        return $this->hasMany(User::class);
    }
}
