<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    protected const
        PERIODS = 'periods',
        RIOS = 'rios',
        DATA_RIOS = 'data_rios';

    protected const
        PERIOD_ID = 'period_id',
        RIO_ID = 'rio_id',
        USER_ID = 'user_id';
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        self::createPeriodsTable();
        self::createRiosTable();
        self::createDataRioTable();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        $drops = [self::DATA_RIOS, self::RIOS, self::PERIODS];

        foreach ($drops as $tableName) {
            Schema::dropIfExists($tableName);
        }
    }

    private static function createPeriodsTable()
    {
        Schema::create(self::PERIODS, function (Blueprint $table) {
            $table->id();
            $table->string('name');
        });
    }

    private static function createRiosTable()
    {
        Schema::create(self::RIOS, function (Blueprint $table) {
            $table->id();
            $table->float('total')->nullable();
            $table->foreignId(self::USER_ID)->constrained()->onDelete('cascade');
            $table->foreignId(self::PERIOD_ID)->constrained()->onDelete('cascade');
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
