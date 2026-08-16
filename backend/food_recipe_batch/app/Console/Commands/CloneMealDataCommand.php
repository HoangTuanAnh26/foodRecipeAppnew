<?php

namespace App\Console\Commands;

use App\Models\Category;
use App\Models\Ingredient;
use App\Models\Meal;
use App\Services\MealDbService;
use Illuminate\Console\Attributes\Description;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

#[Signature('meals:seed')]
#[Description('Import categories, meals, ingredients from TheMealDB API into database')]
class CloneMealDataCommand extends Command
{
    public function handle(MealDbService $mealDbService)
    {
        $this->info('=== Starting TheMealDB data migration batch ===');
        $successMealCount = 0;
        $skippedMealCount = 0;
        $skippedCategoryCount = 0;

        // STEP 1: Kiểm tra kết nối DB
        try {
            DB::connection()->getPdo();
        } catch (\Exception $e) {
            $this->error('Database connection failed: ' . $e->getMessage());
            Log::error('Database connection failed', ['exception' => $e->getMessage()]);
            return 1;
        }

        $this->info('Database connection established successfully.');

        // STEP 2: Lấy và lưu categories
        try {
            $categories = $mealDbService->getAllCategories();

            foreach ($categories as $categoryData) {
                Category::updateOrCreate(
                    ['id_category' => $categoryData['idCategory']],
                    [
                        'str_category' => $categoryData['strCategory'],
                        'str_category_thumb' => $categoryData['strCategoryThumb'],
                        'str_category_description' => $categoryData['strCategoryDescription'],
                    ]
                );
            }

            $this->info('Categories imported: ' . count($categories));
        } catch (\Exception $e) {
            $this->error('Import categories failed: ' . $e->getMessage());
            Log::error('Import categories failed', ['exception' => $e->getMessage()]);
            return 1;
        }

        // STEP 3 + 4: Lấy meal theo từng category, lưu chi tiết
        $categoriesInDb = Category::all();  // Câu hỏi 1: lấy toàn bộ Category đã lưu

        foreach ($categoriesInDb as $category) {
            try {
                $mealsBasic = $mealDbService->getMealsByCategory($category->str_category);

                foreach ($mealsBasic as $mealBasic) {
                    try {
                        $detail = $mealDbService->getMealDetail($mealBasic['idMeal']);

                        if ($detail === null) {
                            Log::warning('Meal detail not found', ['idMeal' => $mealBasic['idMeal']]);
                            continue;
                        }

                        // TODO: lưu vào bảng meals bằng updateOrCreate,
                        $meal = Meal::updateOrCreate(
                            ['id_meal' => $detail['idMeal']],
                            [
                                'str_meal' => $detail['strMeal'],
                                'category_id' => $category->id,
                                'str_area' => $detail['strArea'],
                                'str_instructions' => $detail['strInstructions'],
                                'str_meal_thumb' => $detail['strMealThumb'],
                                'str_tags' => $detail['strTags'],
                                'str_youtube' => $detail['strYoutube'],
                                'str_source' => $detail['strSource'],

                            ]
                        );
                        // Step 4.2 + 4.3: xử lý ingredients
                        for ($i = 1; $i <= 20; $i++) {
                            $ingredientName = $detail['strIngredient' . $i];
                            $measure = $detail['strMeasure' . $i];
                            if (empty(trim($ingredientName ?? ''))) {
                                continue;
                            }

                            $ingredient = Ingredient::firstOrCreate(
                                ['str_ingredient' => trim($ingredientName)]
                            );

                            // Gắn Ingredient vào Meal qua bảng trung gian meal_ingredients
                            $meal->ingredients()->syncWithoutDetaching([
                                $ingredient->id => ['measure' => trim($measure ?? '')],
                            ]);
                        }

                        $successMealCount++;
                    } catch (\Exception $e) {
                        Log::error('Failed to import meal detail', ['exception' => $e->getMessage()]);
                        $skippedMealCount++;
                    }
                }
            } catch (\Exception $e) {
                Log::error('Failed to fetch meals for category', [
                    'category' => $category->str_category,
                    'exception' => $e->getMessage(),
                ]);
                $skippedCategoryCount++;
            }
        }

        $this->info('=== Batch finished ===');
        $this->info("Meals imported successfully: {$successMealCount}");
        $this->info("Meals skipped: {$skippedMealCount}");
        $this->info("Categories skipped: {$skippedCategoryCount}");

        Log::info('Batch finished', [
            'status' => 'success',
            'meals_imported' => $successMealCount,
            'meals_skipped' => $skippedMealCount,
            'categories_skipped' => $skippedCategoryCount,
        ]);
        return 0;
    }
}
