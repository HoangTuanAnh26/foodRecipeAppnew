<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RecipeResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'idMeal' => $this->id_meal,
            'strMeal' => $this->str_meal,
            'strArea' => $this->str_area,
            'strInstructions' => $this->str_instructions,
            'strMealThumb' => $this->str_meal_thumb,
            'strTags' => $this->str_tags,
            'strYoutube' => $this->str_youtube,
            'strSource' => $this->str_source,
        ];
    }
}