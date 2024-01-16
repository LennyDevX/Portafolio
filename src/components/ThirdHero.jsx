import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faJs, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import LennyDev from '/LennyDev6.png';

const ThirdHero = () => { 
    const image = {
        src: LennyDev,
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
            <motion.div className="w-full md:w-1/2 ml-0 md:ml-2 mt-2 md:mt-4"
                initial={{ opacity: 0}} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1 }}
            >
                <div className="w-2/4 md:w-full mx-auto md:max-w-sm items-center">
                    <motion.img className=" image-xl" src={image.src} alt={image.alt} loading="lazy" width={image.width} height={image.height} 
                        initial={{ opacity: 0, x: -100 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 1.5, delay: 0.5 }}
                    />
                </div>
            </motion.div>
            <motion.div className="w-full md:w-1/2 text-center md:text-left mt-2 md:mt-5 ml-2"
                initial={{ opacity: 0, y: 100 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <h1 className="hero-section-title text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-blue-600 min-h-[3.5rem] md:min-h-[4.5rem]">
                    Skill Lenguaje Programing
                </h1>
                <p className="hero-section-paragraph mt-3 text-lg md:text-xl">
                        This website is built with many of these technologies, I can create components and style with Tailwind CSS, Bootstrap and other libraries. I have over 2 years of experience with all these tools, I am capable of developing minimalist and powerful web interfaces.
                    </p>
                    <br/>
                <p className="hero-section-paragraph  text-lg md:text-xl">
                    React <FontAwesomeIcon icon={faReact} className="mx-2" />
                    Node.js <FontAwesomeIcon icon={faNodeJs} className="mx-2" />
                    JavaScript <FontAwesomeIcon icon={faJs} className="mx-2" />
                    PostgreSQL <FontAwesomeIcon icon={faDatabase} className="mx-2" />
                    MongoDB <FontAwesomeIcon icon={faDatabase} className="mx-2" />
                    Bootstrap <FontAwesomeIcon icon={faBootstrap} className="mx-2" />
                    Tailwind CSS <FontAwesomeIcon icon={faPalette} className="mx-2" />
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
        </motion.div>
    );
};

export default ThirdHero;