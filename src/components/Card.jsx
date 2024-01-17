import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaGithub, FaDiscord, FaSpaceShuttle } from 'react-icons/fa';
import { faHandshake, faMicrochip, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../assets/Card.css' // Asegúrate de importar el archivo CSS

const Card = ({ icon, title, description, buttonText, buttonIcon }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // o puedes retornar un loader, un placeholder, etc.
    }

    const cardClasses = classNames(
        "card", // Añade la clase 'card' para aplicar el estilo CSS
        "max-w-sm",
        "rounded-lg",
        "text-center",
        "text-white",
        "bg-black bg-opacity-50", // Cambia el color de fondo a negro semi-transparente
        "mt-4",
        "mb-5",
        "p-5",
        "transition-colors",
        "duration-400",
        "group",
        "hover:text-white", // Cambia el color del texto a blanco al hacer hover
        "hover:shadow-2xl",
        "mx-2",
        "md:mx-0"
    );
    
    const paragraphClasses = classNames(
        "m-2",
        "text-white",
        "group-hover:text-white", // Cambia el color del texto a blanco al hacer hover
        "transition",
        "duration-400",
    );

    let iconElement;
    switch (icon) {
        case 'building':
            iconElement = <FontAwesomeIcon icon={faHandshake} size="3x" className="block mx-auto mb-4 group-hover:text-white" />;
            break;
        case 'briefcase':
            iconElement = <FontAwesomeIcon icon={faBriefcase} size="3x" className="block mx-auto mb-4 group-hover:text-white" />;
            break;
        case 'microchip':
            iconElement = <FontAwesomeIcon icon={faMicrochip} size="3x" className="block mx-auto mb-4 group-hover:text-white" />;
            break;
        default:
            iconElement = null;
    }

    let buttonIconElement;
    switch (buttonIcon) {
        case 'github':
            buttonIconElement = <FaGithub className="mr-2 group-hover:text-white" />;
            break;
        case 'discord':
            buttonIconElement = <FaDiscord className="mr-2 group-hover:text-white" />;
            break;
        case 'rocket':
            buttonIconElement = <FaSpaceShuttle className="mr-2 group-hover:text-white" />;
            break;
        default:
            buttonIconElement = null;
    }

    return (
        <Link to="/blog/under-hood">
            <motion.div 
                className={cardClasses}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1}}
                whileHover={{ scale: 1.05 }} // Solo crece al hacer hover
            >
                {iconElement}
                <div className= "px-6 py-4">
                    <div className="font-bold text-xl mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-blue-600">{title}</div>                
                    <p className={paragraphClasses}>
                        {description}
                    </p>
                    <button type="button" className="mt-4 border-r-2 border-blue-900 transform transition-transform hover:scale-110 group-hover:text-white font-bold py-2 px-4 rounded-xl inline-flex items-center">
                        {buttonIconElement}
                        {buttonText}
                    </button>
                </div>
            </motion.div>
        </Link>
    );
};

Card.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    buttonIcon: PropTypes.string,
};

export default Card;