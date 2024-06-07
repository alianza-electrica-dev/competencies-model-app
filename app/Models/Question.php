<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Question extends Model
{
    use HasFactory;

    public function test(): BelongsTo
    {
        return $this->belongsTo(Test::class);
    }

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'user_response');
    }
}
