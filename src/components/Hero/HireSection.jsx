import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const HireSection = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const image = {
        src: '/HireImg.png',
        alt: 'Nueva descripción de la imagen',
        width: 500,
        height: 500,
    };

    return (
        <div className="new-hero-section flex flex-col md:flex-row items-center justify-center px-2 md:px-4 mt-2 md:mt-4">
            <div className="w-full md:w-1/2 ml-0 md:ml-2 mt-2 md:mt-4 relative">
                <div className="w-2/4 md:w-full mx-auto md:max-w-sm items-center  block  top-0 left-0">
                    <img 
                        src={image.src} 
                        alt={image.alt} 
                        loading="lazy" 
                        width={image.width} 
                        height={image.height} 
                        aria-label="Esta imagen es generada por IA / DALL-E 3" 
                    />
                </div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left md:mt-2">
                <h1 className="new-hero-section-title text-4xl md:text-6xl text-White  md:min-h-[2.5rem]">
                    Why Hire me?
                </h1>
                <br />
                <p className="new-hero-section-paragraph mt-2 text-lg md:text-xl">
                    Welcome to my digital world, where creativity meets functionality.<br /> As a programmer specialized in UI/UX and powerfull interfaces, with libraries like TailwindCSS, I offer customized and efficient web development solutions.<br /> My focus is on creating interactive, optimized, and high-quality applications and websites that meet your needs and exceed your expectations.<br /><br />

                    My commitment to excellence and meticulous attention to detail allow me to offer affordable and personalized services.<br /> I understand that each project has its own uniqueness and complexity, so I offer fast and flexible delivery, ensuring that the final product fits exactly to your requirements.<br /><br />

                    In addition to my development skills, I offer ongoing maintenance for a minimal subscription, ensuring that your application or website continues to run smoothly after its launch.<br /> My goal is to provide you with a comprehensive service, from development to maintenance, so you can focus on what you do best.<br /><br />

                    If you're looking for a programmer who combines technical skills with a customer-focused approach, look no further.<br /> I'm here to turn your digital ideas into reality.
                </p>
                <NavLink to="/services">
                    <motion.button
                        onClick={toggleSidebar}
                        className="hero-section-button mt-4 inline-block bg-transparent border border-blue-300 hover:text-black hover:bg-green-300 text-white  py-3 px-5 rounded-lg transform transition-transform duration-200 hover:scale-110"
                        title="Learn more about our daily motivation tips"
                        initial={{ opacity: 0, }} 
                        animate={{ opacity: 1, }} 
                        transition={{ duration: 1, delay: 1.5 }}
                    >
                        Get Started
                    </motion.button>
                </NavLink>
            </div>
        </div>
    );
};

export default HireSection;