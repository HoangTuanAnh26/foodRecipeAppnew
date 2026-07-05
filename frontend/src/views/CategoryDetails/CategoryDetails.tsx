import React from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useCategoryDetails } from "../../controllers/useCategoryDetails";

// interface Meal {
//     idMeal: string;
//     strMeal: string;
//     strMealThumb: string;
// }

const CategoryDetails: React.FC = () => {
    const navigate = useNavigate();
    const { categoryName } = useParams();
    const { meals, loading } = useCategoryDetails(categoryName!);

    return (
        <div className="category-container">
            {<section className="banner-section">
                <img
                    src={`https://www.themealdb.com/images/ingredients/${categoryName}.png`}
                    className="banner-image"
                />
                <h2 className="category-title">{categoryName!}</h2>
            </section>}

            <section className="meals-grid">
                {loading ? (
                    <p>Đang tải ...</p>
                ) : (
                    meals.slice(0, 10).map((meal) => (
                        <div key={meal.idMeal} className="meal-card" onClick={() => navigate(`/recipe/${meal.idMeal}`)}>
                            <img
                                src={meal.strMealThumb}
                                alt={meal.strMeal}
                                className="meal-image"
                            />
                            <div className="meal-title-container">
                                <h3 className="meal-title">{meal.strMeal}</h3>
                            </div>
                        </div>
                    ))
                )}
            </section>
        </div>
    );
};

export default CategoryDetails;