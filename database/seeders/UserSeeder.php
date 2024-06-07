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
                'email' => 'oscar.lopez@alianzaelectrica.com',
                'password' => Hash::make('testadmin123'),
                'role_id' => Role::ADMIN,
                'area_id' => Area::TECNOLOGIA_INFORMACION,
            ],
            [
                'id' => 2,
                'name' => 'Roberto',
                'last_name' => 'Blasi',
                'second_last_name' => 'Blasi',
                'email' => 'roberto.blasi@alianzaelectrica.com',
                'password' => Hash::make('rhdmin123'),
                'role_id' => Role::ADMIN,
                'area_id' => Area::RECURSOS_HUMANOS,
            ],
            [
                'id' => 3,
                'name' => 'Empleado',
                'last_name' => 'Prueba',
                'second_last_name' => '1',
                'email' => 'empleado.prueba1@alianzaelectrica.com',
                'password' => Hash::make('prueba123'),
                'role_id' => Role::EMPLOYEE,
                'area_id' => Area::ATENCION_CLIENTES,
            ],
            [
                'id' => 4,
                'name' => 'Empleado',
                'last_name' => 'Prueba',
                'second_last_name' => '2',
                'email' => 'empleado.prueba2@alianzaelectrica.com',
                'password' => Hash::make('prueba123'),
                'role_id' => Role::EMPLOYEE,
                'area_id' => Area::COMPRAS_MATERIALES,
            ],
            [
                'id' => 5,
                'name' => 'Empleado',
                'last_name' => 'Prueba',
                'second_last_name' => '3',
                'email' => 'empleado.prueba3@alianzaelectrica.com',
                'password' => Hash::make('prueba123'),
                'role_id' => Role::EMPLOYEE,
                'area_id' => Area::VENTAS,
            ],
        ]);
    }
}
