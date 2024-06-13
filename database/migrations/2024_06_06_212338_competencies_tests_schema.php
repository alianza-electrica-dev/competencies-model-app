<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    protected const
        AREAS = 'areas',
        STATUSES = 'statuses',
        COMPETENCIES = 'competencies',
        QUESTIONS = 'questions',
        ROLES = 'roles',
        TESTS = 'tests',
        AREA_TEST = 'area_test',
        TEST_USER = 'test_user',
        USER_RESPONSES = 'user_response';

    protected const
        AREA_ID = 'area_id',
        COMPETENCY_ID = 'competency_id',
        QUESTION_ID = 'question_id',
        ROLE_ID = 'role_id',
        TEST_ID = 'test_id',
        STATUS_ID = 'status_id',
        USER_ID = 'user_id';

    /**
     * Run the migrations.
     */
    public function up(): void
    {
        self::createRolesTable();
        self::createStatusesTable();
        self::createAreasTable();
        self::createCompetenciesTable();
        self::createTestsTable();
        self::createQuestionsTable();
        self::createTestUserTable();
        self::createUserResponseTable();
        self::createAreaTestTable();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        $drops = [
            self::AREA_TEST,
            self::USER_RESPONSES,
            self::TEST_USER,
            self::QUESTIONS,
            self::TESTS,
            self::COMPETENCIES,
            self::AREAS,
            self::STATUSES,
            self::ROLES,
        ];

        foreach ($drops as $tableName) {
            Schema::dropIfExists($tableName);
        }
    }

    private static function createRolesTable()
    {
        Schema::create(self::ROLES, function (Blueprint $table) {
            $table->id();
            $table->string('name');
        });
    }

    private static function createStatusesTable()
    {
        Schema::create(self::STATUSES, function (Blueprint $table) {
            $table->id();
            $table->string('name');
        });
    }

    private static function createAreasTable()
    {
        Schema::create(self::AREAS, function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->boolean('active')->default(true);
        });
    }

    private static function createCompetenciesTable()
    {
        Schema::create(self::COMPETENCIES, function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->boolean('active')->default(true);
        });
    }

    private static function createTestsTable()
    {
        Schema::create(self::TESTS, function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->foreignId(self::COMPETENCY_ID)->constrained()->onDelete('cascade');
            $table->boolean('active')->default(true);
            $table->timestamps();
        });
    }

    private static function createQuestionsTable()
    {
        Schema::create(self::QUESTIONS, function (Blueprint $table) {
            $table->id();
            $table->text('question_text');
            $table->foreignId(self::TEST_ID)->constrained()->onDelete('cascade');
            $table->boolean('active')->default(true);
            $table->timestamps();
        });
    }

    private static function createTestUserTable()
    {
        Schema::create(self::TEST_USER, function (Blueprint $table) {
            $table->id();
            $table->foreignId(self::TEST_ID)->constrained()->onDelete('cascade');
            $table->foreignId(self::USER_ID)->constrained()->onDelete('cascade');
            $table->foreignId(self::STATUS_ID)->constrained('statuses')->onDelete('cascade');
            $table->integer('score')->default(0);
            $table->timestamps();
        });
    }

    private static function createUserResponseTable()
    {
        Schema::create(self::USER_RESPONSES, function (Blueprint $table) {
            $table->id();
            $table->foreignId(self::QUESTION_ID)->constrained()->onDelete('cascade');
            $table->foreignId(self::USER_ID)->constrained()->onDelete('cascade');
            $table->integer('response_value');
            $table->timestamps();
        });
    }

    private static function createAreaTestTable()
    {
        Schema::create(self::AREA_TEST, function (Blueprint $table) {
            $table->id();
            $table->foreignId(self::AREA_ID)->constrained()->onDelete('cascade');
            $table->foreignId(self::TEST_ID)->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }
};
