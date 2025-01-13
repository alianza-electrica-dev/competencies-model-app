<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PeriodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('periods')->insert([
            ['id' => 1, 'name' => 'Periodo de Enero a Junio'],
            ['id' => 2, 'name' => 'Periodo de Julio a Diciembre'],
        ]);
    }
}
