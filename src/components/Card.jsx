import React, { useMemo, useState, useEffect } from 'react';
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

    const iconElement = useMemo(() => {
        switch (icon) {
            case 'building':
                return <FontAwesomeIcon icon={faHandshake} size="3x" className="block mx-auto mb-4 group-hover:text-white" />;
            case 'briefcase':
                return <FontAwesomeIcon icon={faBriefcase} size="3x" className="block mx-auto mb-4 group-hover:text-white" />;
            case 'microchip':
                return <FontAwesomeIcon icon={faMicrochip} size="3x" className="block mx-auto mb-4 group-hover:text-white" />;
            default:
                return null;
        }
    }, [icon]);

    const buttonIconElement = useMemo(() => {
        switch (buttonIcon) {
            case 'github':
                return <FaGithub className="mr-2 group-hover:text-white" />;
            case 'discord':
                return <FaDiscord className="mr-2 group-hover:text-white" />;
            case 'rocket':
                return <FaSpaceShuttle className="mr-2 group-hover:text-white" />;
            default:
                return null;
        }
    }, [buttonIcon]);

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
        "text-base",
        "group-hover:text-white"
    );

    return (
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
                    <Link to="/blog/under-hood">
                    <button type="button" className=" text-white mt-4 border-r-2 border-blue-900 transform transition-transform hover:scale-110 group-hover:text-white font-bold py-2 px-4 rounded-xl inline-flex items-center">
                        {buttonIconElement}
                        {buttonText}
                    </button>
                    </Link>

                </div>
            </motion.div>
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