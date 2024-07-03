<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('companies')->insert([
            ['id' => 1, 'name' => 'Alianza Eléctrica'],
            ['id' => 2, 'name' => 'FG Eléctrical'],
            ['id' => 3, 'name' => 'Tableros y Arrancadores'],
            ['id' => 4, 'name' => 'Manofacturing'],
            ['id' => 5, 'name' => 'Eipsa'],
        ]);
    }
}
