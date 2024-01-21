import React from 'react';
import { motion } from 'framer-motion';
import DailyMotivation from '/DailyMotivation1.png';

const SecondHero = () => {
    const image = {
        src: DailyMotivation,
        alt: 'Daily Motivation',
        width: 350,
        height: 350,
        layout: 'responsive',
    };

    return (
        <motion.div className="max-w-7xl mx-auto hero-section flex flex-col md:flex-row-reverse items-center justify-center px-2 md:px-4 mt-2 md:mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.div className="w-full md:w-1/2 text-center md:text-right mt-2 md:mt-4"
                initial={{ opacity: 0, y: 100 }} 
                animate={{ opacity: 1, y: 0}} 
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <h1 className="hero-section-title text-4xl md:text-6xl bg-clip-text text-blue-100 min-h-[3.5rem] md:min-h-[4.5rem]">
                    A little bit about me
                </h1>
                <p className="hero-section-paragraph mt-2 text-lg md:text-xl">
                    I am a developer with a passion for the world of technology. Currently, I am self-studying and have experience in the sales and business/marketing sector. I have worked on projects involving React, Next.js, Node.js, Express.js, MongoDB, and more. At present, I am collaborating with a group of developers on a project to create a blog platform for the software developer community. If you're interested in learning more about this project, feel free to visit our repository and join us on Discord. Don't forget to leave a star!                </p>
                
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