<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BranchSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('branches')->insert([
            ['id' => 1, 'name' => 'Atizapan'],
            ['id' => 2, 'name' => 'Culiacan'],
            ['id' => 3, 'name' => 'Hermosillo'],
            ['id' => 4, 'name' => 'La paz'],
            ['id' => 5, 'name' => 'Leon'],
            ['id' => 6, 'name' => 'Merida, Yucatan'],
            ['id' => 7, 'name' => 'Monterrey'],
            ['id' => 8, 'name' => 'Puebla'],
            ['id' => 9, 'name' => 'Queretaro'],
            ['id' => 10, 'name' => 'San Luis Potosi'],
        ]);
    }
}
