import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";


const Header: React.FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="z-50 max-w-7xl mx-auto border-b-0 px-6">
            <div className="flex h-16 md:h-32 items-center justify-between">
                <Link to="/" className="text-2xl md:text-5xl font-extrabold tracking-tight text-slate-900 hover:opacity-90 transition-opacity">Food Recipe</Link>
                <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600 dark:text-slate-300">
                    <Link className="transition-colors hover:text-indigo-600 dark:text-black" to="/">Home</Link>
                    <Link className="transition-colors hover:text-indigo-600 dark:text-black" to="#">Favorites</Link>
                    <Link className="transition-colors hover:text-indigo-600 dark:text-black" to="#">Category</Link>
                    {/* <Link className="transition-colors hover:text-indigo-600 dark:text-black" to="#">Archive</Link> */}
                    <Link className="transition-colors hover:text-indigo-600 dark:text-black" to="#">Profile</Link>

                    <div className="flex items-center gap-5">
                        <button className="text-slate-600 hover:text-indigo-600 dark:text-black transition-colors text-lg p-1">
                            <FaSearch className="hover:text-indigo-600 dark:text-black" />
                        </button>
                    </div>
                </nav>

                {/* Mobile */}
                <div className="md:hidden flex items-center gap-4">
                    <button className="text-black text-sm p-1">
                        <FaSearch />
                    </button>

                    <Link to="#" className="text-sm font-medium text-black">
                        Profile
                    </Link>

                    <button onClick={toggleMenu} className="text-sm text-black focus:outline-none">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

            </div>
            {/* Menu xổ xuống trên Mobile */}
            {isOpen && (
                <nav className="md:hidden flex flex-col gap-4 pb-6 pt-2 text-sm font-medium text-black border-t border-slate-100">
                    <Link to="/" onClick={() => setIsOpen(false)}>
                        Home
                    </Link>

                    <Link to="#" onClick={() => setIsOpen(false)}>
                        Favorites
                    </Link>

                    <Link to="#" onClick={() => setIsOpen(false)}>
                        Category
                    </Link>

                    <Link to="#" onClick={() => setIsOpen(false)}>
                        Archive
                    </Link>
                </nav>
            )}
        </header>
    );
};

export default Header;