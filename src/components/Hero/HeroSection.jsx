import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import LennyDev3 from '/LennyDev3.png';
import { Fade } from 'react-awesome-reveal';

const HeroSection = () => {
    const image = {
        src: LennyDev3,
        alt: 'Daily Motivation',
        width: 350,
        height: 350,
        layout: 'responsive',
    };

    const titles = useMemo(() => ['Developer UI/UX ', 'Freelancer', 'Prompt Engineer'], []);
    const [index, setIndex] = useState(0);

    const changeTitle = useCallback(() => {
        setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, [titles]);

    useEffect(() => {
        const interval = setInterval(changeTitle, 3000);
        return () => clearInterval(interval);
    }, [changeTitle]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div className="max-w-7xl mx-auto hero-section flex flex-col md:flex-row items-center justify-center px-2 md:px-4 mt-2 md:mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.div className="w-full md:w-1/2 ml-0 md:ml-2 mt-2 md:mt-4 relative"
                initial={{ opacity: 0, x: 0 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1.5, delay: 0.5 }}
            >
                <div className="w-2/4 md:w-full mx-auto md:max-w-sm items-center block top-0 left-0">
                    <div className="bg-clip-content text-transparent bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 rounded-full p-2 flex">
                        <img
                            src={image.src} 
                            alt={image.alt} 
                            loading="lazy" 
                            width={image.width} 
                            height={image.height} 
                            aria-label="Esta imagen es generada por IA / DALL-E 3" 
                        />
                    </div>
                    <p className="hero-section-paragraph mt-2 text-2xs md:text-sm italic text-gray-600">
                        Made with DALL-E 3 AI
                    </p>
                </div>
            </motion.div>
            {/* Aquí asumí que textVisible y visibleText son verdaderos y una cadena vacía respectivamente, ya que no estaban definidos en tu código original */}
            {true && (
                <motion.div className=" md:w-1/2 text-center md:text-left mt-2 md:mt-4"
                    initial={{ opacity: 0, y: 100 }} 
                    animate={{ opacity: 1, y: 0}} 
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                   <motion.h1 
                        className="hero-section-title text-4xl md:text-6xl bg-clip-text text-White min-h-[3.5rem] md:min-h-[4.5rem]"
                        initial={{ opacity: 0, x: 0 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 0.5 }}
                    >
                        Hello, I'm Lenny 🪄
                    </motion.h1>
                    <Fade direction="up" triggerOnce>
                        <motion.h2 
                            className="hero-section-subtitle text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-blue-600 min-h-[3.5rem] md:min-h-[4.5rem]"
                            initial={{ opacity: 0, x: 0 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            transition={{ duration: 0.5 }}
                        >
                            {titles[index]}
                        </motion.h2>
                    </Fade>
                    <motion.p 
                        className="hero-section-paragraph mt-2 text-lg md:text-xl"
                        initial={{ opacity: 0, x: 0 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 1 }}
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
                </motion.div>
            )}
        </motion.div>
    );
};

export default HeroSection;