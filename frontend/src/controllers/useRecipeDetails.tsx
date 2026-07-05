// src/controllers/useRecipeDetails.tsx
import { useState, useEffect } from 'react';
import { fetchRecipeById } from '../repositories/recipeRepository';
import type { Recipe } from '../repositories/recipeRepository';
// import { Recipe, fetchRecipeById } from '../repositories/recipeRepository';

export const useRecipeDetails = (id: string) => {
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchRecipeById(id).then((data) => {
            setRecipe(data);
            setLoading(false);
        });
    }, [id]);

    return { recipe, loading };
};