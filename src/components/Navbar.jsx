import React, { useState, useCallback } from 'react';
import classNames from 'classnames';

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
                    Servicios
                </a>
                <a href="#responsive-header" className={linkClasses}>
                    Blog
                </a>
                <a href="#responsive-header" className={linkClasses}>
                    Comunidad
                </a>
                <a href="#responsive-header" className={`${linkClasses} mr-0`}>
                    Tecnologias
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
        'bg-black', 'bg-opacity-50', 'p-6', 'rounded-lg', 'shadow', 'text-white'
    );

    const buttonClasses = classNames(
        'flex', 'items-center', 'px-3', 'py-2', 'border', 'rounded', 
        'text-white', 'border-white', 'hover:text-white', 'hover:border-white'
    );

    return (
        <nav className={navClasses}>
            <div className="flex items-center flex-shrink-0 mr-6">
                <span className="font-semibold text-xl tracking-tight">LennyDevX</span>
            </div>
            <div className="block lg:hidden">
                <button onClick={toggleMenu} className={buttonClasses}>
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z"/></svg>
                </button>
            </div>
            <Menu isOpen={isOpen} />
        </nav>
    );
};

export default Navbar;