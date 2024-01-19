import React, { useMemo, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faLightbulb, faChartBar } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const CardHire = ({ icon = "icon", title = "Título de la tarjeta", description = "texto", buttonText = "Click me", buttonLink = "#" }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const iconElement = useMemo(() => {
        switch (icon) {
            case 'Servicios de Programación':
                return <FontAwesomeIcon icon={faBriefcase} size="3x" className="block mx-auto mb-4 group-hover:text-white" />;
            case 'Mi Trabajo y Proceso':
                return <FontAwesomeIcon icon={faChartBar} size="3x" className="block mx-auto mb-4 group-hover:text-white" />;
            case 'Metodología Client-First':
                return <FontAwesomeIcon icon={faLightbulb} size="3x" className="block mx-auto mb-4 group-hover:text-white" />;
        }
    }, [title]);

    if (!isClient) {
        return null; // o puedes retornar un loader, un placeholder, etc.
    }

    return (
        <motion.div 
            className="max-w-sm rounded-lg text-center text-white bg-black bg-opacity-50 mt-4 mb-5 p-5 transition-colors duration-400 group hover:text-white hover:shadow-2xl mx-2 md:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1}}
            whileHover={{ scale: 1.05 }}
        >
            {iconElement}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-blue-600">{title}</div>                
                <p className="text-base group-hover:text-white">
                    {description}
                </p>
                <a href={buttonLink} className="mt-4 bg-transparent border border-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded inline-block">                    
                {buttonText}
                </a>
            </div>
        </motion.div>
    );
};

CardHire.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    buttonText: PropTypes.string,
    buttonLink: PropTypes.string,
};

export default CardHire;