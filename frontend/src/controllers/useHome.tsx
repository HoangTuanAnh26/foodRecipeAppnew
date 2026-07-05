import { useState, useEffect } from 'react';
import { homeRepository } from '../repositories/homeRepository';

export const useHome = () => {
    const [slideMeals, setSlideMeals] = useState<any[]>([]);
    const [categories, setCategories] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchHomeData = async () => {
            setLoading(true);
            const data = await homeRepository.getHomeData();

            setSlideMeals(data.slideMeals);
            setCategories(data.categories);
            setLoading(false);
        };
        fetchHomeData();
    }, []);

    return { slideMeals, categories, loading };
};