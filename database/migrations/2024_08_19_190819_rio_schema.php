<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    protected const
        RIOS = 'rios',
        DATA_RIOS = 'data_rios';

    protected const
        RIO_ID = 'rio_id',
        USER_ID = 'user_id';
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        self::createRiosTable();
        self::createDataRioTable();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        $drops = [self::DATA_RIOS, self::RIOS];

        foreach ($drops as $tableName) {
            Schema::dropIfExists($tableName);
        }
    }

    private static function createRiosTable()
    {
        Schema::create(self::RIOS, function (Blueprint $table) {
            $table->id();
            $table->date('start_date');
            $table->date('end_date')->nullable();
            $table->float('total')->nullable();
            $table->foreignId(self::USER_ID)->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }

    private static function createDataRioTable()
    {
        Schema::create(self::DATA_RIOS, function (Blueprint $table) {
            $table->id();
            $table->longText('responsibility');
            $table->longText('indicator');
            $table->float('weighing');
            $table->float('real');
            $table->float('compliance');
            $table->longText('observations');
            $table->foreignId(self::RIO_ID)->constrained()->onDelete('cascade');
        });
    }
};
