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

    protected $appends = ['full_name'];

    public function getFullNameAttribute(): string
    {
        return "{$this->name} {$this->last_name} {$this->second_last_name}";
    }

    public function area(): BelongsTo
    {
        return $this->belongsTo(Area::class);
    }

    public function questions(): BelongsToMany
    {
        return $this->belongsToMany(Question::class, 'user_response');
    }

    public function role(): BelongsTo
    {
        return $this->belongsTo(Role::class);
    }

    public function tests(): BelongsToMany
    {
        return $this->belongsToMany(Test::class);
    }
}
