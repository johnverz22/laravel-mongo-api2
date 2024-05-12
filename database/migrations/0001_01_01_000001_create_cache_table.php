<?php
declare(strict_types=1);

use MongoDB\Laravel\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    protected $connection = 'mongodb';
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cache', function (Blueprint $collection) {
            $collection->string('key')->primary();
            $collection->mediumText('value');
            $collection->integer('expiration');
        });

        Schema::create('cache_locks', function (Blueprint $collection) {
            $collection->string('key')->primary();
            $collection->string('owner');
            $collection->integer('expiration');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cache');
        Schema::dropIfExists('cache_locks');
    }
};
