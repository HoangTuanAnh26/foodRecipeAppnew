import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecipeDetails } from "../../controllers/useRecipeDetails";

const RecipeDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { recipe, loading } = useRecipeDetails(id || "");

    if (loading || !recipe) {
        return <p>Loading...</p>;
    }

    return (
        <div className="recipe-details-container">

            <div className="recipe-banner">
                <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipe-image" />
            </div>

            {/* Tên món ăn */}
            <h1 className="recipe-title">{recipe.strMeal}</h1>

            {/* Phần Nguyên liệu (Ingredients) */}
            <section className="ingredients-section">
                <h2>Ingredients</h2>
                <table className="ingredients-table">
                    <tbody>
                        {recipe.ingredients.map((ing: { name: string; measure: string }, index: number) => (
                            <tr key={index}>
                                <td className="ing-name">{ing.name}</td>
                                <td className="ing-measure">{ing.measure}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
            <section className="instructions-section">
                <h2>Instructions</h2>
                <p className="instructions-text">{recipe.strInstructions}</p>
            </section>
        </div>
    );


};

export default RecipeDetails;
