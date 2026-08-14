import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useArchive } from "../../controllers/useArchive";

const Archive: React.FC = () => {
    const navigate = useNavigate();
    const { categoryName } = useParams();
    const { meals, loading } = useArchive(categoryName!);
    const [visibleCount, setVisibleCount] = useState(12);
    const mockDescription = "One thing I learned living in the Canarsie section of Brooklyn...";

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 12);
    };

    return (
        <div className="category-container">
            <section className="w-full h-32 md:h-80 bg-orange-50 flex items-center">
                <div className="w-full max-w-7xl mx-auto px-6">
                    <img
                        src={`https://www.themealdb.com/images/ingredients/${categoryName}.png`}
                        className="object-contain h-24 md:h-56"
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-2 md:px-6">
                <div className="my-4">
                    <div className="flex items-baseline gap-2">
                        <h2 className="font-bold text-xl md:text-2xl">{categoryName!}</h2>
                        <span className="text-gray-500 sm:text-sm">({meals.length} Recipes)</span>
                    </div>
                    <p className="text-sm text-gray-900">{mockDescription}</p>
                </div>

                <section className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6">
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        meals.slice(0, visibleCount).map((meal) => (
                            <div key={meal.idMeal} className="cursor-pointer" onClick={() => navigate(`/recipe/${meal.idMeal}`)}>
                                <img
                                    src={meal.strMealThumb}
                                    alt={meal.strMeal}
                                    className="h-32 md:h-48 w-full rounded-xl object-cover transition-transform duration-300 hover:scale-105"
                                />

                                <h3 className="mt-3 text-gray-900 hover:text-amber-600">{meal.strMeal}</h3>
                            </div>
                        ))
                    )}
                </section>

                <div className="flex justify-center  py-8">
                    <button className="border border-black px-1 py-1 rounded-sm hover:bg-black hover:text-white" onClick={handleLoadMore}>Load more</button>
                </div>
            </div>
        </div>
    );
};

export default Archive;

