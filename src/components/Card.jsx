import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import '../assets/Card.css' // Asegúrate de importar el archivo CSS

const Card = ({ icon, title, description, buttonText }) => {
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
        "rounded-xl",
        "shadow-xl",
        "text-center",
        "text-white",
        "bg-black",
        "mt-10",
        "p-3",
        "transition-colors",
        "duration-400",
        "group",
        "hover:bg-blue-600",
        "hover:shadow-2xl"
    );

    const paragraphClasses = classNames(
        "m-2",
        "text-white",
        "group-hover:text-white",
        "transition",
        "duration-400",
    );

    return (
        <motion.div 
        className={cardClasses}
        initial={{ opacity: 0, y: 100  }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1}}
        whileHover={{ scale: 1.05, backgroundColor: "#7fa2edab" }} // Cambia el valor de escala aquí y añade el cambio de color de fondo
    >
            <FontAwesomeIcon icon={icon} size="3x" className="block mx-auto mb-4" />
            <div className= "px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className={paragraphClasses}>
                    {description}
                </p>
                <button type="button" className="mt-4 bg-blue-500 hover:bg-black transform transition-transform hover:scale-110 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                    <FontAwesomeIcon icon={faGithub} className="mr-2" />
                    {buttonText}
                </button>
            </div>
        </motion.div>
    );
};

Card.propTypes = {
    icon: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
};

export default Card;