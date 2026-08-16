<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ingredient extends Model
{
    use HasFactory;

    protected $fillable = [
        'str_ingredient',
    ];

    public function meal_ingredients()
    {
        return $this->hasMany(MealIngredient::class);
    }
}
