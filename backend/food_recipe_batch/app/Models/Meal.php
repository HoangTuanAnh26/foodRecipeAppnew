<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meal extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_meal',
        'str_meal',
        'category_id',
        'str_area',
        'str_instructions',
        'str_meal_thumb',
        'str_tags',
        'str_youtube',
        'str_source',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function ingredients()
    {
        return $this->belongsToMany(Ingredient::class, 'meal_ingredients')
            ->withPivot('measure');
    }
}
