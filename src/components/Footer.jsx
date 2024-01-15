import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJsSquare, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className= "bg-black rounded-xl text-white py-10 px-5 mt-10 grid grid-cols-1 md:grid-cols-3 items-start">
            <div>
                <ul className="space-y-3">
                    {['React.Doc', 'Next.JS', 'Vite', 'Tailwindscss'].map((enlace, index) => (
                        <li key={index}><a href="#" alt={`Ir a ${enlace}`} className="hover:underline" rel="noopener">{enlace}</a></li>
                    ))}
                </ul>
            </div>
            <div>
                <ul className="space-y-3 mt-5 md:mt-0">
                    {['Copilot', 'Github Sintetix', 'Contacto',].map((enlace, index) => (
                        <li key={index + 4}><a href="#" alt={`Ir a ${enlace}`} className="hover:underline" rel="noopener">{enlace}</a></li>
                    ))}
                </ul>
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