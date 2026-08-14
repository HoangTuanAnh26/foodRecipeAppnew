import { useState, useEffect } from 'react';
import { archiveRepository } from '../repositories/archiveRepository';

export const useArchive = (categoryName: string) => {
    const [meals, setMeals] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchMeals = async () => {
            setLoading(true);

            const data = await archiveRepository.getMealsByCategory(categoryName);
            console.log(data);

            setMeals(data);
            setLoading(false);
        };

        fetchMeals();
    }, [categoryName]);

    return { meals, loading };
};