<?php

namespace Database\Seeders;

use App\Models\Test;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class testUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('test_user')->insert([
            ['id' => 1, 'test_id' => 1, 'user_id' => 3],
            ['id' => 2, 'test_id' => 2, 'user_id' => 3],
            ['id' => 3, 'test_id' => 3, 'user_id' => 3],
        ]);
    }
}
