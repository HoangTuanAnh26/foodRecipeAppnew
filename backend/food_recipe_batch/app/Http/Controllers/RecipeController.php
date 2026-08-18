<?php

namespace App\Http\Controllers;

use App\Http\Resources\RecipeResource;
use App\Models\Category;
use App\Models\Meal;
use Illuminate\Http\Request;

class RecipeController
{
    public function index(Request $request)
    {
        $categoryName = $request->query('category');

        $category = Category::where('str_category', $categoryName)->first();

        if (!$category) {
            return response()->json([], 404);
        }

        $meals = $category->meals;

        return RecipeResource::collection($category->meals);
    }

    public function show($id)
    {
        $meal = Meal::where('id_meal', $id)->first();

        if (!$meal) {
            return response()->json([], 404);
        }

        return new RecipeResource($meal);
    }

    public function random()
    {
        $meal = Meal::inRandomOrder()->first();

        return new RecipeResource($meal);
    }
}
