import React, { useState, useCallback } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = useCallback(() => setIsSidebarOpen(prevIsSidebarOpen => !prevIsSidebarOpen), []);

    const navClasses = classNames(
        'flex', 'items-center', 'justify-between', 'flex-wrap', 
        'p-6', 'rounded-2xl', 'text-white', 'text-center',  'opacity-75', 'bg-black', 'shadow-lg'
    );

    return (
        <nav className={navClasses}>
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center flex-shrink-0 mr-6">
                    <NavLink to="/" className="font-semibold italic text-xl tracking-tight text-white">LennyDevX</NavLink>
                    <div className="text-left text-blue-300 ml-5">V 1.7</div>
                </div>
                <button onClick={toggleSidebar} className="flex items-center bg-transparent border border-blue-300 transform transition-transform duration-300 hover:scale-105">Discover</button>
            </div>
            <Sidebar isOpen={isSidebarOpen} />
            {isSidebarOpen && <div className="fixed inset-0 bg-black opacity-50" onClick={toggleSidebar}></div>}
        </nav>
    );
};

const Sidebar = ({ isOpen }) => {
    const sidebarClasses = classNames(
        'fixed', 'top-0', 'right-0', 'w-64', 'h-full', 'bg-blue-900', 'p-6', 'overflow-auto', 'z-10',
        'transform', 'transition-transform', 'duration-500', 'ease-in-out', isOpen ? 'translate-x-0' : 'translate-x-full'
    );

    const linkClasses = classNames(
        'block', 'mt-4', 'text-white', 'hover:text-gray-300', 'mr-4'
    );

    return (
        <div className={sidebarClasses}>
            <NavLink to="/services" className={linkClasses} activeClassName="active">Services</NavLink>
            <NavLink to="/community" className={linkClasses} activeClassName="active">Community</NavLink>
            <NavLink to="/technologies" className={`${linkClasses} mr-0`} activeClassName="active">Technologies</NavLink>
        </div>
    );
};

Sidebar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
};

export default Navbar;