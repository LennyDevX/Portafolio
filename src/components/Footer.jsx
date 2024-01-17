import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJsSquare, faCss3Alt } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const links = {
        'React Documentation': 'https://reactjs.org/docs/getting-started.html',
        'Next.js Documentation': 'https://nextjs.org/docs',
        'Vite Documentation': 'https://vitejs.dev/guide/',
        'Node.js Documentation': 'https://nodejs.org/en/docs/',
        'Express.js Documentation': 'https://expressjs.com/en/4x/api.html',
        'MongoDB Documentation': 'https://docs.mongodb.com/',
        'About Sintetix': 'https://sintetixhub.com/about',
        'GitHub Copilot': 'https://copilot.github.com/',
        'Sintetix on GitHub': 'https://github.com/SintetixHub/sintetix',
        'Contact': 'https://sintetixhub.com/contact',
        'Twitter': 'https://twitter.com/YourTwitterHandle',
        'LinkedIn': 'https://www.linkedin.com/in/YourLinkedInProfile/'
    };

    return (
        <footer className= "shadow bg-opacity-50 bg-black rounded-lg text-white py-10 px-5 grid grid-cols-3 md:grid-cols-3 items-start">
            <div>
                <ul className="space-y-3">
                    {['React Documentation', 'Next.js Documentation', 'Vite Documentation'].map((enlace, index) => (
                        <li key={index}><a href={links[enlace]} alt={`Go to ${enlace}`} className="hover:underline" rel="noopener noreferrer" target="_blank">{enlace}</a></li>
                    ))}
                </ul>
            </div>
            <div>
                <ul className="space-y-3">
                    {['About Sintetix', 'GitHub Copilot', 'Sintetix on GitHub'].map((enlace, index) => (
                        <li key={index}><a href={links[enlace]} alt={`Go to ${enlace}`} className="hover:underline" rel="noopener noreferrer" target="_blank">{enlace}</a></li>
                    ))}
                </ul>
            </div>
            <div>
                <ul className="space-y-3 md:mt-0">
                    {['Contact', 'Twitter', 'LinkedIn'].map((enlace, index) => (
                        <li key={index + 4}><a href={links[enlace]} alt={`Go to ${enlace}`} className="hover:underline" rel="noopener noreferrer" target="_blank">{enlace}</a></li>
                    ))}
                </ul>
            </div>
            <div className="col-span-full text-center md:mt-5 mt-7"> <br/>
                ©2024 All rights reserved. SintetixHub.com
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