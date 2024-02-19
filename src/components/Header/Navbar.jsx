import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CV from '../documentation/CV.pdf';
import './Navbar.css'
import { faCoffee, faUsers, faRobot, faUmbrella, faProjectDiagram, faHandshake, faFilePdf } from '@fortawesome/free-solid-svg-icons';


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
                    <div className="text-left text-green-200 ml-5">V 2.0</div>
                </div>
                <div className="flex items-center justify-end">
                <NavLink to="/documentation" className="hidden md:block">
                        <button
                            onClick={SubmitEvent}
                            className="hero-section-button inline-block bg-transparent border px-3 mr-4 border-red-300 hover:text-black hover:bg-red-300 text-white rounded-lg transform transition-transform duration-400 hover:scale-110"
                            title="Learn more about our daily motivation tips"
                        >
                            Documentation
                        </button>
                    </NavLink>
                    <NavLink to="/services">
                        <button
                            onClick={SubmitEvent}
                            className="hero-section-button inline-block bg-transparent border px-3 border-green-300 hover:text-black hover:bg-green-300 text-white rounded-lg transform transition-transform duration-400 hover:scale-110"
                            title="Learn more about our daily motivation tips"
                        >
                            Get Started
                        </button>
                    </NavLink>
                    <button onClick={toggleSidebar} className="flex items-center bg-transparent border px-3 hover:border-purple-300 border-purple-300 transform transition-transform duration-400 hover:scale-110 ml-4">
                        <div className="hamburger-menu">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </button>
                </div>
            </div>
            <div ref={node} className={sidebarClasses} style={{background: '#000'}}>
            <NavLink onClick={toggleSidebar} to="/services" className="block px-4 py-2 text-sm text-white m-3 border rounded-lg hover:text-black hover:bg-green-400">
                 Services <FontAwesomeIcon icon={faCoffee} className='mx-1' />
            </NavLink>
            <NavLink onClick={toggleSidebar} to="https://discord.gg/fhe8P6M2" target='_blank' className="block px-4 py-2 text-sm text-white m-3 border rounded-lg hover:text-black hover:bg-sky-400">
                 Community <FontAwesomeIcon icon={faUsers} className='mx-1' />
            </NavLink>
            <NavLink onClick={toggleSidebar} to="https://layla-r09in3hal-lennydevxs-projects.vercel.app/" target='_blank' className=" hover:text-black block px-4 py-2 text-sm text-white m-3 border rounded-lg hover:bg-red-400">
                 Layla AI <FontAwesomeIcon icon={faRobot} className='mx-1' />
            </NavLink>
            <NavLink onClick={toggleSidebar} to="/community" target='_blank' className="block px-4 py-2 text-sm text-white m-3 border rounded-lg hover:text-black hover:bg-purple-400">
                Umbrella App  <FontAwesomeIcon icon={faUmbrella} className='mx-1' /> 
            </NavLink>
            <NavLink onClick={toggleSidebar} to="/community" className="block px-4 py-2 text-sm text-white m-3 border rounded-lg hover:text-black hover:bg-orange-400">
                 Next projects <FontAwesomeIcon icon={faProjectDiagram} className='mx-1' />
            </NavLink>
            <NavLink onClick={toggleSidebar} to="/community" className="block px-4 py-2 text-sm text-white m-3 border rounded-lg hover:text-black hover:bg-yellow-400">
                 Collaborations <FontAwesomeIcon icon={faHandshake} className='mx-1' />
            </NavLink>
            <a href={CV} download>
                <div onClick={toggleSidebar} className="block px-4 py-2 text-sm text-white m-3 border rounded-lg hover:text-black hover:bg-blue-400">
                    CV <FontAwesomeIcon icon={faFilePdf} className='mx-1' />
                </div>
            </a>

            </div>
        </nav>
    );
};

export default Navbar;