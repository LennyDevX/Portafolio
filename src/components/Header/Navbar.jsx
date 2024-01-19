import React, { useState, useCallback } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom'

const Menu = ({ isOpen }) => {
    const divClasses = classNames(
        isOpen ? 'block' : 'hidden', 'w-full', 'block', 'flex-grow', 
        'lg:flex', 'lg:items-center', 'lg:w-auto'
    );

    const linkClasses = classNames(
        'block', 'mt-4', 'lg:inline-block', 'lg:mt-0', 'text-white', 'hover:text-white', 'mr-4'
    );

    return (
        <div className={divClasses}>
            <div className="text-sm lg:flex-grow">
                <a href="#responsive-header" className={linkClasses}>
                    Services
                </a>
                <a href="#responsive-header" className={linkClasses}>
                    Community
                </a>
                <a href="#responsive-header" className={`${linkClasses} mr-0`}>
                    Technologies
                </a>
            </div>
        </div>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    }, []);

    const navClasses = classNames(
        'flex', 'items-center', 'justify-between', 'flex-wrap', 
        'p-6', 'rounded-lg', '', 'text-white', 'text-center',
        
    );

    const buttonClasses = classNames(
        'flex', 'items-center', 'px-3', 'py-2', 'border', 'rounded', 
        'text-white', 'border-white', 'hover:text-white', 'hover:border-white'
    );

    return (
        <nav className={navClasses}>
            <div className="flex items-center flex-shrink-0 mr-6">
                <Link to="/" className="font-semibold italic text-xl tracking-tight text-white">LennyDevX</Link>
            </div>
            <div className="block lg:hidden">
                <button onClick={toggleMenu} className={buttonClasses} >
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z"/></svg>
                </button>
            </div>
            <Menu isOpen={isOpen} />
        </nav>
    );
};

export default Navbar;