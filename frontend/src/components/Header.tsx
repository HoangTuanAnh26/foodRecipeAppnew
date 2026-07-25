import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";


const Header: React.FC = () => {

    return (
        <header className="sticky top-0 z-50 flex h-32 max-w-7xl mx-auto items-center justify-between border-b bg-white/80 px-6 backdrop-blur-md dark:border-slate-800/80">
            <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white hover:opacity-90 transition-opacity">Food Recipe</h1>
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600 dark:text-slate-300">
                {/* Can can ngang */}
                {/* <a className="nav-item" href="#">Trang chủ</a> */}
                <Link className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400" to="/">Home</Link>
                <a className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400" href="#">Favorites</a>
                {/* <a
                    href="#"
                    className="nav-item"
                    style={{ marginRight: "20px" }}
                    onClick={(e) => {
                        e.preventDefault(); // ❗ chặn hành vi mặc định
                        window.history.back();
                    }}
                >
                    Back
                </a> */}
                <a className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400" href="#">Category Details</a>
                <a className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400" href="#">Profile</a>

                <div className="flex items-center gap-5">
                    <button className="text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors text-lg p-1">
                        <FaSearch />
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;