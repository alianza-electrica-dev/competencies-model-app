<?php

namespace Database\Seeders;

use App\Models\Area;
use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            [
                'id' => 1,
                'name' => 'Oscar',
                'last_name' => 'Lopez',
                'second_last_name' => 'Rodriguez',
                'email' => 'admin@alianzaelectrica.com',
                'password' => Hash::make('testadmin123'),
                'active' => true,
                'role_id' => Role::ADMIN,
                'area_id' => Area::TECNOLOGIA_INFORMACION,
            ],
        ]);
    }
}
