import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {

    return (
        <header className="app-header">
            <h1 className='title-header'>Food Recipe</h1>
            <div className="nav-menu">
                {/* <a className="nav-item" href="#">Trang chủ</a> */}
                <Link className="nav-item" to="/">Home</Link>
                <a className="nav-item" href="#">Search</a>
                <a className="nav-item" href="#">Favorites</a>
                <a
                    href="#"
                    className="nav-item"
                    style={{ marginRight: "20px" }}
                    onClick={(e) => {
                        e.preventDefault(); // ❗ chặn hành vi mặc định
                        window.history.back();
                    }}
                >
                    Back
                </a>
            </div>
        </header>
    );
};

export default Header;