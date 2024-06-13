<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\Pivot;

class TestUser extends Pivot
{
    use HasFactory;

    protected $table = 'test_user';

    protected $fillable = [
        'test_id',
        'user_id',
        'status_id',
        'score',
    ];

    public function status(): BelongsTo
    {
        return $this->belongsTo(Status::class, 'status_id');
    }
}
