import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const toggleSubmenu = () => setIsSubmenuOpen(prevIsSubmenuOpen => !prevIsSubmenuOpen);
    const node = useRef();

    const handleClickOutside = e => {
        if (node.current.contains(e.target)) {
            // inside click
            return;
        }
        // outside click 
        setIsSubmenuOpen(false);
    };

    useEffect(() => {
        // add when mounted
        document.addEventListener("mousedown", handleClickOutside);
        // return function to be called when unmounted
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const navClasses = classNames(
        'flex', 'items-center', 'justify-between', 'flex-wrap', 
        'p-6', 'rounded-2xl', 'text-white', 'text-center',  'opacity-75', 'bg-black', 'shadow-lg'
    );

    const submenuClasses = classNames(
        'transform', 'transition-transform', 'duration-300', 'hover:scale-105',
        'absolute', 'right-0', 'mt-8', 'w-48', 'rounded-md', 'shadow-lg', 'bg-white', 'ring-1', 'ring-black', 'ring-opacity-5', 'divide-y', 'divide-gray-100', 'origin-top-right', 'transition-all', 'duration-200', 'ease-in-out', isSubmenuOpen ? 'block' : 'hidden'
    );

    return (
        <nav className={navClasses} ref={node}>
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center flex-shrink-0 mr-6">
                    <NavLink to="/" className="font-semibold italic text-xl tracking-tight text-white">LennyDevX</NavLink>
                    <div className="text-left text-blue-300 ml-5">V 1.7</div>
                </div>
                <button onClick={toggleSubmenu} className="flex items-center bg-transparent border border-blue-300 transform transition-transform duration-300 hover:scale-105">Discover</button>
            </div>
            <div className={submenuClasses}>
                <NavLink to="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-900">Services</NavLink>
                <NavLink to="/community" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-900">Community</NavLink>
                <NavLink to="/technologies" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-900">Technologies</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;