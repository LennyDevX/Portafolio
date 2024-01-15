import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJsSquare, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className= "bg-black rounded-xl text-white py-10 px-5 mt-10 grid grid-cols-1 md:grid-cols-3 items-start">
            <div>
                <h1 className="text-xl mb-5 md:text-2xl">Mi Sitio Web</h1>
                <ul className="space-y-3">
                    {['Enlace 1', 'Enlace 2', 'Enlace 3', 'Enlace 4'].map((enlace, index) => (
                        <li key={index}><a href="#" alt={`Ir a ${enlace}`} className="hover:underline" rel="noopener">{enlace}</a></li>
                    ))}
                </ul>
            </div>
            <div>
                <h1 className="text-xl mb-4 md:text-2xl mt-5">Mi Sitio Web</h1>
                <ul className="space-y-3 mt-5 md:mt-0">
                    {['Enlace 5', 'Enlace 6', 'Enlace 7', 'Enlace 8'].map((enlace, index) => (
                        <li key={index + 4}><a href="#" alt={`Ir a ${enlace}`} className="hover:underline" rel="noopener">{enlace}</a></li>
                    ))}
                </ul>
            </div>
            <div className="flex justify-end mt-20 md:mt-0">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-2xl mt-10 md:mt-0">
                    <FontAwesomeIcon icon={faSearch} className="mr-2" />
                    Explorar
                </button>
            </div>
            <div className="col-span-full pt-10 text-center md:mt-0">
                ©2024 Todos los derechos reservados.
                <div className="mt-4">
                    <FontAwesomeIcon icon={faJsSquare} className="mx-2" />
                    <FontAwesomeIcon icon={faReact} className="mx-2" />
                    <FontAwesomeIcon icon={faCss3Alt} className="mx-2" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;