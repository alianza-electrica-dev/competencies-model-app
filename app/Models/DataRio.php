<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOneThrough;

class DataRio extends Model
{
    use HasFactory;

    public function rio(): BelongsTo
    {
        return $this->belongsTo(Rio::class);
    }

    public function user(): HasOneThrough
    {
        return $this->hasOneThrough(User::class, Rio::class, 'id', 'id', 'rio_id', 'user_id');
    }
}
