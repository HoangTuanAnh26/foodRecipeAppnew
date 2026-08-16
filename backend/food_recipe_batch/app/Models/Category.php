<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_category',
        'str_category',
        'str_category_thumb',
        'str_category_description',
    ];

    public function meals()
    {
        return $this->hasMany(Meal::class);
    }
}
