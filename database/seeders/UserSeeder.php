<?php

namespace Database\Seeders;

use App\Models\Area;
use App\Models\Company;
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
                'password' => Hash::make('C0MP3T3NC&APP$'),
                'active' => true,
                'role_id' => Role::ADMIN,
                'area_id' => Area::TECNOLOGIAS_INFORMACION,
                'company_id' => Company::ALIANZA_ELECTRICA,
            ],
            // [
            //     'id' => 2,
            //     'name' => 'Gonzalo',
            //     'last_name' => 'Mata',
            //     'second_last_name' => 'Camacho',
            //     'email' => 'gonzalo.matac@fgelectrical.com',
            //     'password' => Hash::make('GoMaAl24'),
            //     'active' => true,
            //     'role_id' => Role::ADMIN,
            //     'area_id' => Area::ADMINISTRACION,
            //     'company_id' => Company::ALIANZA_ELECTRICA,
            // ],
            // [
            //     'id' => 3,
            //     'name' => 'Fernando',
            //     'last_name' => 'Mata',
            //     'second_last_name' => 'Camacho',
            //     'email' => 'fernando.mata@alianzaelectrica.com',
            //     'password' => Hash::make('FeMaFg24'),
            //     'active' => true,
            //     'role_id' => Role::ADMIN,
            //     'area_id' => Area::ADMINISTRACION,
            //     'company_id' => Company::FG_ELECTRICAL,
            // ],
            // [
            //     'id' => 4,
            //     'name' => 'Gonzalo',
            //     'last_name' => 'Mata',
            //     'second_last_name' => 'Ruiz',
            //     'email' => 'gonzalo.mata@alianzaelectrica.com',
            //     'password' => Hash::make('GoMaRu24'),
            //     'active' => true,
            //     'role_id' => Role::ADMIN,
            //     'area_id' => Area::ADMINISTRACION,
            //     'company_id' => Company::MANOFACTURING,
            // ],
            // [
            //     'id' => 5,
            //     'name' => 'test',
            //     'last_name' => 'test',
            //     'second_last_name' => 'test',
            //     'email' => 'test1@alianzaelectrica.com',
            //     'password' => Hash::make('prueba123'),
            //     'active' => true,
            //     'role_id' => Role::EMPLOYEE,
            //     'area_id' => Area::RECURSOS_HUMANOS,
            //     'company_id' => Company::ALIANZA_ELECTRICA,
            // ],
            // [
            //     'id' => 6,
            //     'name' => 'test',
            //     'last_name' => 'test',
            //     'second_last_name' => 'test',
            //     'email' => 'test2@alianzaelectrica.com',
            //     'password' => Hash::make('prueba123'),
            //     'active' => true,
            //     'role_id' => Role::EMPLOYEE,
            //     'area_id' => Area::LOGISTICA,
            //     'company_id' => Company::TABLEROS_ARRANCADORES,
            // ],
            // [
            //     'id' => 7,
            //     'name' => 'test',
            //     'last_name' => 'test',
            //     'second_last_name' => 'test',
            //     'email' => 'test3@alianzaelectrica.com',
            //     'password' => Hash::make('prueba123'),
            //     'active' => true,
            //     'role_id' => Role::EMPLOYEE,
            //     'area_id' => Area::VENTAS,
            //     'company_id' => Company::ALIANZA_ELECTRICA,
            // ],
            // [
            //     'id' => 8,
            //     'name' => 'test',
            //     'last_name' => 'test',
            //     'second_last_name' => 'test',
            //     'email' => 'test4@alianzaelectrica.com',
            //     'password' => Hash::make('prueba123'),
            //     'active' => true,
            //     'role_id' => Role::EMPLOYEE,
            //     'area_id' => Area::ATENCION_CLIENTES,
            //     'company_id' => Company::MANOFACTURING,
            // ],
            // [
            //     'id' => 9,
            //     'name' => 'test',
            //     'last_name' => 'test',
            //     'second_last_name' => 'test',
            //     'email' => 'test5@alianzaelectrica.com',
            //     'password' => Hash::make('prueba123'),
            //     'active' => true,
            //     'role_id' => Role::EMPLOYEE,
            //     'area_id' => Area::INGENIERIA,
            //     'company_id' => Company::MANOFACTURING,
            // ],
        ]);
    }
}
