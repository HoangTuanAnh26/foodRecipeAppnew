import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHome } from '../../controllers/useHome';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const { slideMeals, categories, loading } = useHome();
    const [itemsPerPage, setItemsPerPage] = useState(window.innerWidth <= 768 ? 1 : 4);
    const [currentPage, setCurrentPage] = useState(0);

    // 2. Lắng nghe sự thay đổi kích thước màn hình (Resize)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setItemsPerPage(1);
            } else {
                setItemsPerPage(4);
            }
        };
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
    }, []);

    const start = currentPage * itemsPerPage;
    const currentCategories = categories.slice(start, start + itemsPerPage);

    // Tổng số page
    const totalPages = Math.ceil(categories.length / itemsPerPage);

    const handleCategoryClick = (name: string) => {
        navigate(`/category/${name}`);
    };

    const handleNext = () => {
        setCurrentPage((prev) => prev + 1);
    };

    const handleBack = () => {
        setCurrentPage((prev) => prev - 1);
    };

    if (loading) {
        return <p>Loading homepage...</p>;
    }

    return (
        <div className="home-container">
            <div className="slide-container">
                <div className="image-wrapper">
                    {slideMeals.map((meal) => (
                        <div key={meal.idMeal} className="slide-card">
                            <img src={meal.strMealThumb} alt={meal.strMeal} className="slide-image" onClick={() => navigate(`/recipe/${meal.idMeal}`)}/>
                        </div>
                    ))}
                </div>
                <h2 className="home-title"> Eat Eat Eat 🔥</h2>
            </div>

            <div className="categories">
                <div className="categories-container">
                    <div className="categories-item">
                        {currentCategories.map((Category) => (
                            <div key={Category.idCategory} className="item-card" onClick={() => handleCategoryClick(Category.strCategory)}>
                                <img src={Category.strCategoryThumb} alt={Category.strCategory} className="category-image" />
                            </div>
                        ))}
                    </div>

                    <div className="pagination-buttons">
                        <button
                            onClick={handleBack}
                            disabled={currentPage === 0}
                        >
                            Back
                        </button>

                        <button
                            onClick={handleNext}
                            disabled={currentPage === totalPages - 1}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
