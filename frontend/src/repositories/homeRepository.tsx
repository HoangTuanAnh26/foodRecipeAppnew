// const mockSlideMeals = [
//     { idMeal: '1', strMeal: 'Spicy Arrabiata Penne', strMealThumb: 'https://www.themealdb.com/images/media/meals/4xcfai1763765676.jpg' },
//     { idMeal: '2', strMeal: 'Teriyaki Chicken Casserole', strMealThumb: 'https://www.themealdb.com/images/media/meals/4xcfai1763765676.jpg' }
// ];

// const mockCategories = [
//     { idCategory: '1', strCategory: 'Beef', strCategoryThumb: 'https://www.themealdb.com/images/ingredients/Beef.png' },
//     { idCategory: '2', strCategory: 'Chicken', strCategoryThumb: 'https://www.themealdb.com/images/ingredients/Chicken.png' },
//     { idCategory: '3', strCategory: 'Dessert', strCategoryThumb: 'https://www.themealdb.com/images/ingredients/Sugar.png' },
//     { idCategory: '4', strCategory: 'Lamb', strCategoryThumb: 'https://www.themealdb.com/images/ingredients/Lamb.png' }
// ];


import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://www.themealdb.com/api/json/v1/1',
});

const fetchRandomMeals = async () => {
    const isMobile = window.innerWidth <= 768;
    const length = isMobile ? 1 : 2;

    const requests = Array.from({ length }, () => api.get('/random.php'));
    // const requests = Array.from({ length: 2 }, () => api.get('/random.php'));
    const responses = await Promise.all(requests);
    console.log('responseRandomMeals:', responses);
    return responses.map(res => res.data.meals[0]);
};

const fetchCategories = async () => {
    const response = await api.get('/categories.php');
    console.log('responseCategories:', response);
    return response.data.categories;
};


export const homeRepository = {
    getHomeData: async () => {
        try {
            const [slideMeals, categories] = await Promise.all([
                fetchRandomMeals(),
                fetchCategories()
            ]);
            return { slideMeals, categories };
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu:", error);
            return {
                slideMeals: [],
                categories: []
            };
        }
    }
};

