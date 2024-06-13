<?php

namespace Database\Seeders;

use App\Models\Status;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TestUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('test_user')->insert([
            ['id' => 1, 'test_id' => 1, 'user_id' => 3, 'status_id' => Status::PENDIENTE],
            ['id' => 2, 'test_id' => 2, 'user_id' => 3, 'status_id' => Status::PENDIENTE],
            ['id' => 3, 'test_id' => 3, 'user_id' => 3, 'status_id' => Status::PENDIENTE],
        ]);
    }
}
