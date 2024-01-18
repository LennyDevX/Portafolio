import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion'

const HireSection = () => {
    const image = {
        src: '/HireImg.png',
        alt: 'Nueva descripción de la imagen',
        width: 500,
        height: 500,
    };

    const [index, setIndex] = useState(0);
    const [textVisible, setTextVisible] = useState(false);
    const text = ["Quality-Price ", "Fast delivery", "Future updates",  "Low cost"];

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
        const timer = setInterval(animateText, 80);
        return () => clearInterval(timer);
    }, [animateText]);

    // Efecto para mostrar los textos después de que la imagen haya terminado de animarse
    useEffect(() => {
        const timeout = setTimeout(() => {
            setTextVisible(true);
        }, 500); // Duración de la animación de la imagen

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="new-hero-section flex flex-col md:flex-row items-center justify-center px-2 md:px-4 mt-2 md:mt-4">
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
                    
                </div>
            </div>
            {textVisible && (
                <div className="w-full md:w-1/2 text-center md:text-left mt-2 md:mt-4">
                    <motion.h1 
                        className="new-hero-section-title text-4xl md:text-6xl bg-clip-text text-White min-h-[3.5rem] md:min-h-[4.5rem]"
                        initial={{ opacity: 0, y: -100 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1.5 }}
                    >
                        Why Hire me?
                    </motion.h1>
                    <motion.h2 
                        className="new-hero-section-title text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-white to-green-800 min-h-[3.5rem] md:min-h-[4.5rem]"
                        initial={{ opacity: 0, y: -100 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1.5 }}
                    >
                        {visibleText}
                    </motion.h2>
                    <motion.p 
                        className="new-hero-section-paragraph mt-2 text-lg md:text-xl"
                        initial={{ opacity: 0, y: -100 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Welcome to my digital world, where creativity meets functionality.<br /> As a programmer specialized in UI/UX and powerfull interfaces, with libraries like TailwindCSS, I offer customized and efficient web development solutions.<br /> My focus is on creating interactive, optimized, and high-quality applications and websites that meet your needs and exceed your expectations.<br /><br />

                        My commitment to excellence and meticulous attention to detail allow me to offer affordable and personalized services.<br /> I understand that each project has its own uniqueness and complexity, so I offer fast and flexible delivery, ensuring that the final product fits exactly to your requirements.<br /><br />

                        In addition to my development skills, I offer ongoing maintenance for a minimal subscription, ensuring that your application or website continues to run smoothly after its launch.<br /> My goal is to provide you with a comprehensive service, from development to maintenance, so you can focus on what you do best.<br /><br />

                        If you're looking for a programmer who combines technical skills with a customer-focused approach, look no further.<br /> I'm here to turn your digital ideas into reality.
                        </motion.p>

                        <motion.button
                        className="hero-section-button mt-4 inline-block text-white  py-3 px-5 rounded-xl transform transition-transform duration-300 hover:scale-110"
                        title="Learn more about our daily motivation tips"
                        initial={{ opacity: 0, }} 
                        animate={{ opacity: 1, }} 
                        transition={{ duration: 1, delay: 1.5 }}
                    >
                        Request a service
                    </motion.button>
                    
                </div>
            )}
        </div>
    );
};

export default HireSection;