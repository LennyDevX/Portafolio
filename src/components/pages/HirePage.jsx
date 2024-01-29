// HirePage.jsx
import React from 'react';
import HireSection from '../Hero/HireSection.jsx';
import CardHire from '../Card/CardHire.jsx';

const HirePage = () => {
    return (
        <>
            <HireSection />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4 mt-2'>
                <CardHire 
                    icon="Servicios de Programación" 
                    title='Web Development'
                    description="I especialist on web development, with the most popular tecnologies on the market, like React, Next.js, Vue, Tailwindcss, and more. I have experience on the development of web applications, with a high performance and productivity." 
                   
                />
                <CardHire 
                    icon="Mi Trabajo y Proceso" 
                    title='Price and Process'
                    description=" I offer a high quality product with a competitive price. I work with a client-first methodology, I focus on your needs from the beginning. I design and develop applications with high performance and productivity, always with the goal of boosting your success. Your satisfaction is my priority" 
                    
                />
                <CardHire 
                    icon="Metodología Client-First" 
                    title='Priority and Satisfaction'
                    description="I work with a client-first methodology, I focus on your needs from the beginning. I design and develop applications with high performance and productivity, always with the goal of boosting your success. Your satisfaction is my priority." 
                
                />
                
            </div>
        </>
    );
};

export default HirePage;