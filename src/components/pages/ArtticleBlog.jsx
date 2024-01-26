import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaHeart, FaGithub, FaDiscord, FaHome } from 'react-icons/fa';

const ArticleBlog = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);

    const text = ["Inside My Porfolio "];

    const longestText = text.reduce((a, b) => a.length > b.length ? a : b);
    const titleRef = useRef(null);

    useEffect(() => {
        if (titleRef.current) {
            titleRef.current.style.minWidth = `${longestText.length}ch`;
            titleRef.current.style.minHeight = '1.5em'; // set a minimum height
        }
    }, [longestText]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center p-10 m-10 rounded shadow-lg ">
            <h1 ref={titleRef} className="hero-section-title text-center text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-blue-600 min-h-[3.5rem] md:min-h-[4.5rem]">
                {text[0]}
            </h1>
            <p className="text-lg mb-4 text-center mx-auto max-w-prose">
                Welcome to my portfolio, a powerful web application that showcases my skills and projects as a web developer.<br/>
                This platform is more than just a showcase; it's a testament to my expertise and dedication.<br/><br/>

                Built with modern technologies, my portfolio provides a seamless, responsive user experience.
                I utilize React for the user interface, renowned for its interactive capabilities and component-based architecture.
                This ensures the maintainability and scalability of my application.<br/><br/>

                For styling, I employ Tailwind CSS, a utility-first framework that enables efficient and highly customizable UI design.
                This ensures my portfolio is responsive and functions well across a variety of devices and screen sizes.<br/><br/>

                The application logic is handled with JavaScript, the most popular programming language for web development.
                This allows me to create dynamic client-side interactions, enhancing the user experience.<br/><br/>

                On the server-side, I use Express, a minimalist and flexible framework for Node.js.
                For deployment, I use Vercel, a cloud deployment platform that allows for swift and efficient implementation.<br/><br/>

                My portfolio is not just a showcase, but also a testament to my skills as a web developer.
                It highlights my ability to create dynamic, interactive web applications, and my commitment to using the latest technologies and best practices in web development.<br/><br/>

                I hope you enjoy exploring my portfolio. Welcome!
            </p>
            <div className="flex space-x-4">
                <button aria-label="Like" className="px-4 py-2 hover:text-red-500 bg-blue-500 text-white rounded flex items-center space-x-2 transition transform hover:scale-110">
                    <FaHeart />
                </button>
                <a href="https://github.com/SintetixHub" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className=" hover:text-blue-300 px-4 py-2 bg-black text-white rounded flex items-center space-x-2 transition transform hover:scale-110">
                    <FaGithub />
                </a>
                <a href="https://discord.gg/MceEbBjV" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="px-4 py-2 bg-indigo-600 text-white rounded flex items-center space-x-2 transition transform hover:scale-110">
                    <FaDiscord />
                </a>
                <Link to="/" aria-label="Home" className="px-4 py-2 bg-red-800 text-white rounded flex items-center space-x-2 transition transform hover:scale-110">
                    <FaHome />
                </Link>
            </div>
        </div>
    );
};

export default ArticleBlog;