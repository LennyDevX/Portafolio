import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaHeart, FaGithub, FaDiscord, FaHome } from 'react-icons/fa';

const ArticleBlog = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);

    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [delay, setDelay] = useState(75);
    const text = ["Welcome To Sintetix", "Explore how Sintetix works"];

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

    const typingAnimation = useCallback(() => {
        if (index === text.length) return;

        if (subIndex === text[index].length+1 && 
            index !== text.length-1 && 
            !reverse ) {
            setReverse(true);
            setDelay(200); // reduced delay before starting to delete
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => prev + 1);
            setDelay(200); // reduced delay before starting to type
            return;
        }

        setSubIndex((prev) => prev + (reverse ? -1 : 1));
        setDelay(50); // normal typing speed
    }, [subIndex, index, reverse, text]);

    useEffect(() => {
        const timer = setTimeout(typingAnimation, delay);
        return () => clearTimeout(timer);
    }, [typingAnimation, delay]);
    return (
        <div className="flex flex-col items-center justify-center p-10 m-10 rounded shadow-lg ">
            <h1 ref={titleRef} className="hero-section-title text-center text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-blue-600 min-h-[3.5rem] md:min-h-[4.5rem]">
                {`${text[index].substring(0, subIndex)}${subIndex === text[index].length ? '_' : ''}`}
            </h1>
            <p className="text-lg mb-4 text-center mx-auto max-w-prose">
                Welcome to Sintetix, an innovative web application that amalgamates the best of blogging and social networking into a single platform. At Sintetix, users can read and upload articles, engage in discussions, and express their appreciation with a simple "like".<br/><br/>

                But Sintetix is more than just a blogging platform. It's built on a robust foundation of cutting-edge, modern technologies.<br/><br/>

                We utilize React for our user interface. React is a JavaScript library renowned for building interactive user interfaces. It provides a seamless, responsive user experience. Moreover, React's component-based architecture facilitates maintainability and scalability of our application.<br/><br/>

                For styling, we employ Tailwind CSS, a low-level utility-first framework that enables efficient and highly customizable UI design. With Tailwind CSS, we can create responsive designs that look and function well across a variety of devices and screen sizes.<br/><br/>

                The application logic is handled with JavaScript, the most popular programming language for web development. JavaScript allows us to create dynamic client-side interactions, enhancing the user experience.<br/><br/>

                On the server-side, we use Express, a minimalist and flexible framework for Node.js. Express equips us with the necessary tools to build our web server and handle HTTP requests.<br/><br/>

                Finally, for deployment, we use Vercel, a cloud deployment platform that allows us to implement our application swiftly and efficiently.<br/><br/>

                Sintetix is not just a blogging platform, but also a social network. Users can follow others, interact with their posts, and form communities around common interests. This fosters a dynamic and participatory environment where users can share ideas, learn from each other, and form meaningful connections.<br/><br/>

                Our goal with Sintetix is to provide a platform where users can freely express themselves, share their thoughts and ideas, and connect with others who share their interests. We believe that by combining aspects of blogging and social networking, we can create a unique and valuable experience for our users.<br/><br/>

                We hope you enjoy your time on Sintetix and we're excited to see what our community will create. Welcome to Sintetix!
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