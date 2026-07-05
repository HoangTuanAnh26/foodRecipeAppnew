CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username_or_email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
);

CREATE TABLE favorites (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    recipe_id VARCHAR(50) NOT NULL,
    recipe_name VARCHAR(255) NOT NULL,
    recipe_image VARCHAR(255),
    
    -- Tạo liên kết khóa ngoại (Foreign Key) sang bảng users
    CONSTRAINT fk_user_favorites FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);