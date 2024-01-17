import React from 'react';
import { motion } from 'framer-motion';
import DailyMotivation from '../../public/DailyMotivation1.png';

const SecondHero = () => {
    const image = {
        src: DailyMotivation,
        alt: 'Daily Motivation',
        width: 350,
        height: 350,
        layout: 'responsive',
    };

    return (
        <motion.div className="hero-section flex flex-col md:flex-row-reverse items-center justify-center px-2 md:px-4 mt-2 md:mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.div className="w-full md:w-1/2 text-center md:text-right mt-2 md:mt-4"
                initial={{ opacity: 0, y: 100 }} 
                animate={{ opacity: 1, y: 0}} 
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <h1 className="hero-section-title text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-blue-600 min-h-[3.5rem] md:min-h-[4.5rem]">
                    Stay motivated, Every day, With our daily tips
                </h1>
                <p className="hero-section-paragraph mt-2 text-lg md:text-xl">
                    Welcome to our daily motivation tips. Stay motivated every day!
                </p>
                <motion.button
                    className="hero-section-button mt-4 inline-block text-white  py-3 px-5 rounded-xl transform transition-transform duration-300 hover:scale-110"
                    title="Learn more about our daily motivation tips"
                    initial={{ opacity: 0, }} 
                    animate={{ opacity: 1, }} 
                    transition={{ duration: 1, delay: 1.5 }}
                >
                    Learn More
                </motion.button>
            </motion.div>
            <motion.div className="w-full md:w-1/2 ml-0 md:ml-2 mt-2 md:mt-4"
                initial={{ opacity: 0,}} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }}
            >
                <div className="w-2/4 md:w-full mx-auto md:max-w-sm items-center">
                    <motion.img className="rounded-full" src={image.src} alt={image.alt} loading="lazy" width={image.width} height={image.height} 
                        initial={{ opacity: 0, y: -100 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1.5, delay: 0.5 }}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
};

export default SecondHero;