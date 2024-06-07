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
            ['id' => 1,  'name' => 'Atención a clientes'],
            ['id' => 2,  'name' => 'Auditoria externa'],
            ['id' => 3,  'name' => 'Auditoria interna'],
            ['id' => 4,  'name' => 'Compras y materiales'],
            ['id' => 5,  'name' => 'Desarrollo de nuevos negocios'],
            ['id' => 6,  'name' => 'Finanzas'],
            ['id' => 7,  'name' => 'Ingenería y desarrollo'],
            ['id' => 8,  'name' => 'Investigación y desarrollo'],
            ['id' => 9,  'name' => 'Logística y distribución'],
            ['id' => 10, 'name' => 'Manufactura'],
            ['id' => 11, 'name' => 'Mercadotecnia'],
            ['id' => 12, 'name' => 'Recursos humanos'],
            ['id' => 13, 'name' => 'Soporte administrativo'],
            ['id' => 14, 'name' => 'Tecnologías de la información'],
            ['id' => 15, 'name' => 'Ventas'],
        ]);
    }
}
