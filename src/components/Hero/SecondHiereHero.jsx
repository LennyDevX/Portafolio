import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center bg-transparent p-6">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-2">Título de la Sección</h1>
                <p className="text-lg">Esta es la descripción de la sección. Aquí puedes hablar más sobre lo que haces y los servicios que ofreces.</p>
                <motion.button
                    className="hero-section-button mt-4 inline-block text-white py-3 px-5 rounded-xl transform transition-transform duration-300 hover:scale-110"
                    title="Learn more about our daily motivation tips"
                    initial={{ opacity: 0, }} 
                    animate={{ opacity: 1, }} 
                    transition={{ duration: 1, delay: 1.5 }}
                >
                    Request a service
                </motion.button>
            </div>
        </div>
    );
};

export default HeroSection;