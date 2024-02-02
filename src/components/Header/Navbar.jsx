import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => setIsSidebarOpen(prevIsSidebarOpen => !prevIsSidebarOpen);
    const node = useRef();

    const handleClickOutside = e => {
        if (node.current.contains(e.target)) {
            // inside click
            return;
        }
        // outside click 
        setIsSidebarOpen(false);
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
        'p-6', 'rounded-2xl', 'text-white', 'text-center', 'bg-black', 'shadow-lg'
    );

    const sidebarClasses = classNames(
        'transform', 'transition-transform', 'duration-400', 'ease-in', 'duration-200',
        'fixed', 'right-0', 'top-0', 'h-full', 'w-64', 'shadow-lg', 'p-6', 'm-auto', 'overflow-y-auto', 'z-50', isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
    );

    return (
        <nav className={navClasses}>
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center flex-shrink-0 mr-6">
                    <NavLink to="/" className="font-semibold italic text-xl tracking-tight text-white">LennyDevX</NavLink>
                    <div className="text-left text-blue-300 ml-5">V 1.7</div>
                </div>
                <div className="flex items-center justify-end">
                    <NavLink to="/services">
                        <button
                            onClick={SubmitEvent}
                            className="hero-section-button inline-block bg-transparent border border-green-300 hover:text-black hover:bg-green-300 text-white rounded-lg transform transition-transform duration-400 hover:scale-110"
                            title="Learn more about our daily motivation tips"
                        >
                            Get Started
                        </button>
                    </NavLink>
                    <button onClick={toggleSidebar} className="flex items-center bg-transparent border border-purple-300 hover:bg-purple-800 transform transition-transform duration-400 hover:scale-110 ml-4">Discover</button>
                </div>
            </div>
            <div ref={node} className={sidebarClasses} style={{background: '#000'}}>
                <NavLink onClick={toggleSidebar} to="/services" className="block px-4 py-2 text-sm text-white m-3 border rounded-lg hover:bg-purple-900">Services</NavLink>
                <NavLink onClick={toggleSidebar} to="/community" className="block px-4 py-2 text-sm text-white m-3 border rounded-lg hover:bg-purple-900">Community</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;