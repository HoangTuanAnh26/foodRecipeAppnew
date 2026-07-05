export const categoryRepository = {
    getMealsByCategory: async (categoryName: string) => {
        try {
            // const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef');
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);

            const data = await response.json();
            return data.meals || [];
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu:", error);
            return [];
        };
    }
}