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
                    title='Servicios de Programación'
                    description="Como experto en React, Node, Express y TailwindCSS, ofrezco servicios de desarrollo web de primera calidad. Mi enfoque se centra en crear soluciones eficientes y personalizadas que se ajusten a tus necesidades específicas. Mi objetivo es proporcionar un equilibrio perfecto entre calidad y precio." 
                    buttonText="CONTRATAR"
                    buttonLink="/servicios"
                />
                <CardHire 
                    icon="Mi Trabajo y Proceso" 
                    title='Mi Trabajo y Proceso'
                    description="Mi proceso de trabajo está diseñado para garantizar tu satisfacción. Trabajo de manera eficiente y siempre cumplo con los plazos acordados. Mi tarifa es competitiva y justa, reflejando la alta calidad de los servicios que ofrezco." 
                    buttonText="SABER MAS"
                    buttonLink="/proceso"
                />
                <CardHire 
                    icon="Metodología Client-First" 
                    title='Metodología Client-First'
                    description="Mi metodología 'Client-First' se centra en atender tus necesidades desde el principio. Diseño y desarrollo aplicaciones con un alto rendimiento y productividad, siempre con el objetivo de impulsar tu éxito. Tu satisfacción es mi prioridad." 
                buttonText="VER MAS DETALLES"
                    buttonLink="/metodologia"
                />
                
            </div>
        </>
    );
};

export default HirePage;