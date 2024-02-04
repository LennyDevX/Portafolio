import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';import { faReact, faJsSquare, faCss3Alt, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCode, faCloud, faUserCircle, faRobot } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    const links = {
        'React': 'https://reactjs.org/',
        'Vue': 'https://vuejs.org/',
        'Vite ': 'https://vitejs.dev/',
        'Layla AI': 'https://layla-r09in3hal-lennydevxs-projects.vercel.app/',
        'GitHub': 'https://github.com/LennyDevX',
        'Umbrella': 'https://umbrella-app-ejqq.vercel.app/',
        'Contact': '#',
        'Twitter': 'https://twitter.com/sintetix',
        'LinkedIn': 'https://www.linkedin.com/in/lenny-mercado-valdez-330643141/'
    };

    return (
        <footer className=" bg-gray-2300 rounded-lg text-white py-10 px-5 grid grid-cols-3 md:grid-cols-3 items-start">
            <div>
                <h3 className="font-bold mb-2">Tecnologies</h3>
                <ul className="space-y-3">
                    {[
                        { name: 'React', icon: faReact },
                        { name: 'Vue', icon: faCode },
                        { name: 'Vite ', icon: faCode }
                    ].map((item, index) => (
                        <li key={index}>
                            <a href={links[item.name]} alt={`Go to ${item.name}`} className="hover:underline footer-link" rel="noopener noreferrer" target="_blank">
                                <FontAwesomeIcon icon={item.icon} className="mr-2" />
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="font-bold mb-2">Projects</h3>
                <ul className="space-y-3">
                    {[
                        { name: 'Layla AI', icon: faRobot },
                        { name: 'GitHub', icon: faGithub },
                        { name: 'Umbrella', icon: faCloud }
                    ].map((item, index) => (
                        <li key={index}>
                            <a href={links[item.name]} alt={`Go to ${item.name}`} className="hover:underline footer-link" rel="noopener noreferrer" target="_blank">
                                <FontAwesomeIcon icon={item.icon} className="mr-2" />
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="font-bold mb-2">Contact me</h3>
                <ul className="space-y-3 md:mt-0">
                    {[
                        { name: 'Contact', icon: faEnvelope },
                        { name: 'Twitter', icon: faTwitter },
                        { name: 'LinkedIn', icon: faLinkedin }
                    ].map((item, index) => (
                        <li key={index + 4}>
                            <a href={links[item.name]} alt={`Go to ${item.name}`} className="hover:underline footer-link " rel="noopener noreferrer" target="_blank">
                                <FontAwesomeIcon icon={item.icon} className="mr-2" />
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="col-span-full text-center md:mt-5 mt-7">
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