import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { FaGithub, FaPlayCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, githubLink, demoLink, image, technologies, spamText, progress, progressText, icon }) => {
    progress = progress || 70; // Si no se proporciona un valor de progreso, se asume un valor de 70%
    spamText = spamText || 'Next Update'; // Si no se proporciona un texto de progreso, se asume 'Release v1.0'
    icon = icon || faSync; // Si no se proporciona un ícono, se asume faSync

    return (
        <motion.div 
            className="rounded-lg p-2 text-center text-white bg-black bg-opacity-40 transition-colors duration-400 group hover:text-white md:mx-0 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1}}
            whileHover={{ scale: 1.05 }}
        >
            <span className="absolute top-0 right-0 bg-blue-800 text-white rounded-bl-lg px-1 py-1 text-sm">
                <FontAwesomeIcon icon={icon} className="mr-1" />
                {spamText}
            </span>
            <img src={image} alt={title} className="w-full rounded-full mt-3 h-48 object-cover"/>
            <div className="px-4 py-4">
                <div className="font-bold text-xl mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-blue-500">{title}</div>                
                <div className="relative pt-2">
                    <div className="overflow-hidden h-5 mb-4 text-xs flex rounded-lg bg-blue-400" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
                        <div style={{ width: `${progress}%` }} className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center transition-all duration-500 ease-in-out ${progress > 50 ? 'bg-green-700' : 'bg-red-700'}`}>
                            <span className="text-sm ">{spamText}</span>
                        </div>
                    </div>
                </div>                
                <p className="text-base group-hover:text-white">
                    {description}
                </p>
                <div className="mt-2 flex flex-wrap justify-center space-x-3">
                    {technologies.map((tech, index) => (
                        <span key={index} className="inline-block bg-blue-200 rounded-lg px-2 py-1 text-sm font-semibold text-gray-800  mb-2">{tech}</span>
                    ))}
                </div>
                <div className="mt-4 flex justify-center space-x-2">
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center bg-transparent border border-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-2 rounded">
                        <FaGithub size="1em" className="mr-1" /> GitHub
                    </a>
                    <a href={demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center bg-transparent border border-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-2 rounded">
                        <FaPlayCircle size="1em" className="mr-1" /> Demo
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;