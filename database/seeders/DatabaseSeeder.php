<?php

namespace Database\Seeders;

use App\Models\Status;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            RolSeeder::class,
            CompanySeeder::class,
            BranchSeeder::class,
            StatusSeeder::class,
            AreaSeeder::class,
            CompetencySeeder::class,
            UserSeeder::class,
            // UserProdSeeder::class,
            TestSeeder::class,
            QuestionSeeder::class,
            AreaTestSeeder::class,
        ]);
    }
}
