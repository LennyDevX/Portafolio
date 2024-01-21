import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

const HeroSection = () => {
    const image = {
        src: '/LennyDev3.png',
        alt: 'Descripción de la imagen',
        width: 500,
        height: 500,
    };

    const [index, setIndex] = useState(0);
    const [textVisible, setTextVisible] = useState(false);
    const text = ["Developer UI/UX", "Community manager", "Prompt Engineer",  "How Can I Help You?"];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Efecto de escritura
    const [visibleText, setVisibleText] = useState('');

    const animateText = useCallback(() => {
        if (visibleText.length < text[index].length) {
            setVisibleText(text[index].slice(0, visibleText.length + 1));
        } else if (index < text.length - 1) {
            setVisibleText('');
            setIndex(index + 1);
        }
    }, [visibleText, text, index]);

    useEffect(() => {
        const timer = setInterval(animateText, 70);
        return () => clearInterval(timer);
    }, [animateText]);

    // Efecto para mostrar los textos después de que la imagen haya terminado de animarse
    useEffect(() => {
        const timeout = setTimeout(() => {
            setTextVisible(true);
        }, 300); // Duración de la animación de la imagen

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="  hero-section flex flex-col md:flex-row items-center justify-center px-2 md:px-4 mt-2 md:mt-4">
            <div className="w-full md:w-1/2 ml-0 md:ml-2 mt-2 md:mt-4 relative">
                <div className="w-2/4 md:w-full mx-auto md:max-w-sm items-center  block  top-0 left-0">
                    <motion.img 
                        src={image.src} 
                        alt={image.alt} 
                        loading="lazy" 
                        width={image.width} 
                        height={image.height} 
                        aria-label="Esta imagen es generada por IA / DALL-E 3" 
                        
                        style={{ transform: 'translateX(0px)', opacity: 0 }} 
                        animate={{ transform: 'translateY(0px)', opacity: 1 }} 
                        initial={{ opacity: 0, y: 100 }} 
                        transition={{ duration: 0.8, delay: 0.5 }}
                    />
                    <p className="hero-section-paragraph mt-2 text-2xs md:text-sm italic text-gray-600">
                        Made with DALL-E 3 AI
                    </p>
                </div>
            </div>
            {textVisible && (
                <div className="w-full md:w-1/2 text-center md:text-left mt-2 md:mt-4">
                    <motion.h1 
                        className="hero-section-title text-4xl md:text-6xl bg-clip-text text-White min-h-[3.5rem] md:min-h-[4.5rem]"
                        initial={{ opacity: 0, y: -100 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1.5 }}
                    >
                        Hello, I'm Lenny 🪄
                    </motion.h1>
                    <motion.h2 
                        className="hero-section-title text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-blue-600 min-h-[3.5rem] md:min-h-[4.5rem]"
                        initial={{ opacity: 0, y: -100 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1.5 }}
                    >
                        {visibleText}
                    </motion.h2>
                    <motion.p 
                        className="hero-section-paragraph mt-2 text-lg md:text-xl"
                        initial={{ opacity: 0, y: -100 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Welcome to my digital world, explore my own Apps and webs! If you are looking for more, I invite you to explore the Blog section with more info.
                    </motion.p>
                    <Link to ="/hire">
                    <motion.button
                        className="hero-section-button mt-4 inline-block bg-transparent border border-blue-300 hover:border-green-400 text-white  py-3 px-5 rounded-lg transform transition-transform duration-300 hover:scale-110"
                        title="Learn more about our daily motivation tips"
                        initial={{ opacity: 0, }} 
                        animate={{ opacity: 1, }} 
                        transition={{ duration: 1, delay: 1.5 }}
                    >
                        Hire me!
                    </motion.button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default HeroSection;