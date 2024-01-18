import React, { useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const CardHire = ({ title = "Título de la tarjeta", text = "Texto de la tarjeta", buttonText = "Botón" }) => {
    const iconElement = useMemo(() => <FontAwesomeIcon icon={faStar} size="3x" className="block mx-auto mb-4 group-hover:text-white" />, []);

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
                    {text}
                </p>
                <button type="button" className="text-white mt-4 border-r-2 border-blue-900 transform transition-transform hover:scale-110 group-hover:text-white font-bold py-2 px-4 rounded-xl inline-flex items-center">
                    {buttonText}
                </button>
            </div>
        </motion.div>
    );
};

CardHire.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    buttonText: PropTypes.string,
};

export default CardHire;