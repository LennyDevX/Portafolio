import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJsSquare, faCss3Alt } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const links = {
        'React.Doc': 'https://reactjs.org/docs/getting-started.html',
        'Next.JS': 'https://nextjs.org/docs',
        'Vite': 'https://vitejs.dev/guide/',
        'About Sintetix': '#',
        'IA': '#',
        'Web': '#',
        'Copilot': 'https://copilot.github.com/',
        'Github Sintetix': 'https://github.com/SintetixHub.com/sintetix',
        'Contacto': '#'
    };

    return (
        <footer className= "shadow bg-opacity-50 bg-black rounded-lg text-white py-10 px-5 grid grid-cols-3 md:grid-cols-3 items-start">
            <div>
                <ul className="space-y-3">
                    {['React.Doc', 'Next.JS', 'Vite'].map((enlace, index) => (
                        <li key={index}><a href={links[enlace]} alt={`Ir a ${enlace}`} className="hover:underline" rel="noopener" target="_blank">{enlace}</a></li>
                    ))}
                </ul>
            </div>
            <div>
                <ul className="space-y-3">
                    {['About Sintetix', 'IA', 'Web'].map((enlace, index) => (
                        <li key={index}><a href={links[enlace]} alt={`Ir a ${enlace}`} className="hover:underline" rel="noopener" target="_blank">{enlace}</a></li>
                    ))}
                </ul>
            </div>
            <div>
                <ul className="space-y-3 md:mt-0">
                    {['Copilot', 'Github Sintetix', 'Contacto'].map((enlace, index) => (
                        <li key={index + 4}><a href={links[enlace]} alt={`Ir a ${enlace}`} className="hover:underline" rel="noopener" target="_blank">{enlace}</a></li>
                    ))}
                </ul>
            </div>
        
            <div className="col-span-full text-center md:mt-5 mt-7">
                ©2024 All rigths reserved. SintetixHub.com
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