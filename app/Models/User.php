<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'last_name',
        'second_last_name',
        'email',
        'password',
        'role_id',
        'area_id',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
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
        return "{$this->name} {$this->last_name} {$this->second_last_name}";
    }

    public function getScoreAttribute(): int
    {
        $score = 0;

        foreach ($this->tests as $test) {
            $score += $test->pivot->score;
        }

        return $score;
    }

    public function getAverageAttribute(): ?float
    {
        $totalTests = $this->tests->count();

        if ($totalTests > 0) {
            return $this->score / $totalTests;
        } else {
            return null; // Opcional: Devolver null si no hay tests asociados
        }
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

    public function tests(): BelongsToMany
    {
        return $this->belongsToMany(Test::class)
            ->using(TestUser::class)
            ->withPivot('status_id', 'score')
            ->withTimestamps();
    }
}
