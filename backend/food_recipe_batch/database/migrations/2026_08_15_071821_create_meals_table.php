<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('meals', function (Blueprint $table) {
            $table->id();
            $table->string('id_meal', 100)->unique();
            $table->string('str_meal', 255);
            $table->foreignId('category_id')->nullable()->constrained('categories')->nullOnDelete();
            $table->string('str_area', 100)->nullable();
            $table->text('str_instructions')->nullable();
            $table->string('str_meal_thumb', 500)->nullable();
            $table->string('str_tags', 255)->nullable();
            $table->string('str_youtube', 500)->nullable();
            $table->string('str_source', 500)->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('meals');
    }
};