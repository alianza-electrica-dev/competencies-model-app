<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Collection as EloquentCollection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'name', 'last_name', 'second_last_name', 'email', 'password',
        'role_id', 'area_id', 'company_id', 'branch_id', 'reports_to',
    ];

    protected $hidden = ['password', 'remember_token'];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    protected $appends = ['full_name', 'score', 'average'];

    public function getFullNameAttribute(): string
    {
        return "$this->name $this->last_name $this->second_last_name";
    }

    public function getScoreAttribute(): float
    {
        return $this->tests->sum(fn($test) => $test->pivot->score);
    }

    public function getAverageAttribute(): ?float
    {
        $totalTests = $this->tests->count();
        return $totalTests > 0 ? round($this->score / $totalTests, 2) : null;
    }

    public function area(): BelongsTo
    {
        return $this->belongsTo(Area::class);
    }

    public function questions(): BelongsToMany
    {
        return $this->belongsToMany(Question::class, 'user_response')
            ->withPivot('response_value')
            ->withTimestamps();
    }

    public function role(): BelongsTo
    {
        return $this->belongsTo(Role::class);
    }

    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
    }

    public function branch(): BelongsTo
    {
        return $this->belongsTo(Branch::class);
    }

    public function tests(): BelongsToMany
    {
        return $this->belongsToMany(Test::class)
            ->using(TestUser::class)
            ->withPivot('id', 'status_id', 'score')
            ->withTimestamps();
    }

    public function supervisor(): BelongsTo
    {
        return $this->belongsTo(User::class, 'reports_to');
    }

    public function subordinates(): HasMany
    {
        return $this->hasMany(User::class, 'reports_to');
    }

    public function getAllSubordinates(): EloquentCollection
    {
        $subordinates = new EloquentCollection();
        foreach ($this->subordinates as $subordinate) {
            $subordinates->push($subordinate);
            $subordinates = $subordinates->merge($subordinate->getAllSubordinates());
        }
        return $subordinates;
    }

    public function hasSupervisor(): bool
    {
        return !is_null($this->reports_to);
    }

    public function rios(): HasMany
    {
        return $this->hasMany(Rio::class);
    }
}
