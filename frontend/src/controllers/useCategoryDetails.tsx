import { useState, useEffect } from 'react';
import { categoryRepository } from '../repositories/categoryRepository';

export const useCategoryDetails = (categoryName: string) => {
    const [meals, setMeals] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchMeals = async () => {
            setLoading(true);

            const data = await categoryRepository.getMealsByCategory(categoryName);
            console.log(data);

            setMeals(data);
            setLoading(false);
        };

        fetchMeals();
    }, [categoryName]);

    return { meals, loading };
};