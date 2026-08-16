<?php

namespace App\Services;

use Illuminate\Http\Client\ConnectionException;
use Illuminate\Http\Client\RequestException;
use Illuminate\Support\Facades\Http;

class MealDbService
{
    protected string $baseUrl = 'https://www.themealdb.com/api/json/v1/1';
    public function getAllCategories(): array
    {
        $response = $this->request('categories.php');
        return $response['categories'] ?? [];
    }

    public function getMealsByCategory(string $categoryName): array
    {
        $response = $this->request('filter.php', ['c' => $categoryName]);
        return $response['meals'] ?? [];
    }

    public function getMealDetail(string $idMeal): ?array
    {
        $response = $this->request('lookup.php', ['i' => $idMeal]);
        return $response['meals'][0] ?? null;
    }

    protected function request(string $endpoint, array $params = []): array
    {
        $response = Http::retry(3, 1000, when: function ($exception, $request) {
            if ($exception instanceof ConnectionException) {
                return true;
            }

            if (
                $exception instanceof RequestException
                && $exception->response->status() >= 500
            ) {
                return true;
            }

            return false;
        })->get("{$this->baseUrl}/{$endpoint}", $params);
        $response->throw();
        return $response->json();
    }
}
