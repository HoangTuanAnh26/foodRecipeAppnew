export interface Recipe {
    strMeal: string;
    strMealThumb: string;
    strInstructions: string;
    ingredients: { name: string; measure: string }[];
}

// export const fetchRecipeById = async (id: string): Promise<Recipe> => {
//     return {
//         strMeal: "Callaloo Jamaican Style",
//         strMealThumb: "https://www.themealdb.com/images/media/meals/4xcfai1763765676.jpg",
//         strInstructions: "Cut leaves and soft stems from the kale branches...",
//         ingredients: [
//             { name: "Kale", measure: "1 bunch" },
//             { name: "Bacon", measure: "2 strips" },
//             { name: "Garlic", measure: "3 cloves Chopped" },
//             { name: "Onion", measure: "1 medium" },
//         ]
//     };

export const fetchRecipeById = async (id: string): Promise<Recipe> => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await res.json();
    const meal = data.meals[0];

    const ingredients: { name: string; measure: string }[] = [];

    for (let i = 1; i <= 20; i++) {
        const name = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (name && name.trim()) {
            ingredients.push({ name, measure });
        }
    }

    return {
        strMeal: meal.strMeal,
        strMealThumb: meal.strMealThumb,
        strInstructions: meal.strInstructions,
        ingredients,
    };
};