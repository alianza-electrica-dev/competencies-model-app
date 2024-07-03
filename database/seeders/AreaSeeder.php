<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AreaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('areas')->insert([
            ['id' => 1,   'name' => 'Administración'],
            ['id' => 2,   'name' => 'Almacén'],
            ['id' => 3,   'name' => 'Atención a clientes'],
            ['id' => 4,   'name' => 'Auditoría Externa'],
            ['id' => 5,   'name' => 'Auditoría Interna'],
            ['id' => 6,   'name' => 'Calidad'],
            ['id' => 7,   'name' => 'Compras'],
            ['id' => 8,   'name' => 'Ingeniería'],
            ['id' => 9,   'name' => 'Logística'],
            ['id' => 10,  'name' => 'Mantenimiento'],
            ['id' => 11,  'name' => 'Manufactura'],
            ['id' => 12,  'name' => 'Mercadotecnia'],
            ['id' => 13,  'name' => 'Producción'],
            ['id' => 14,  'name' => 'Recursos Humanos'],
            ['id' => 15,  'name' => 'Seguridad e Higiene'],
            ['id' => 16,  'name' => 'Tecnologías de la Información'],
            ['id' => 17,  'name' => 'Ventas'],
        ]);
    }
}
