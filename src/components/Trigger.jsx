import React from 'react';
import { useInView } from 'react-intersection-observer';
import HeroSection from './HeroSection.jsx';
import Navbar from './Navbar.jsx';
import SecondHero from './SecondHero.jsx';
import ThirdHero from './ThirdHero.jsx';
import Card from './Card.jsx';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';

function App() {
    const [refHeroSection, inViewHeroSection] = useInView({
        triggerOnce: false, // Cambia a true para que el evento se dispare una sola vez
    });

    const [refSecondHero, inViewSecondHero] = useInView({
        triggerOnce: true, // Cambia a true para que el evento se dispare una sola vez
    });

    const [refThirdHero, inViewThirdHero] = useInView({
        triggerOnce: false, // Cambia a true para que el evento se dispare una sola vez
    });

    const [refCard, inViewCard] = useInView({
        triggerOnce: false, // Cambia a true para que el evento se dispare una sola vez
    });

    return (
        <>
            <Navbar />
            <div ref={refHeroSection}>
                {inViewHeroSection && <HeroSection />}
            </div>
            <div ref={refSecondHero}>
                {inViewSecondHero && <SecondHero />}
            </div>
            <div ref={refThirdHero}>
                {inViewThirdHero && <ThirdHero />}
            </div>
            <div ref={refCard}>
               {inViewCard && 
               <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <Card 
                        icon={faProductHunt} 
                        title="Products" 
                        description="Aqui podras ver mis Apps y nuevos lanzamientos, donde subo a mi repositorio todo lo que trabajo. Desde React como mi libreria de interfaz favorita hasta Nextjs y TypeScript para Apps mas robustas y escalables. Conoce mas sobre mi trabajo y si ves algo que te gusta no olvides de dejar una etrella. Cualquier colaboracion a los repositorios son bienvenidas" 
                        buttonText="GitHub" 
                    />
                    <Card 
                        icon={faProductHunt} 
                        title="Products" 
                        description="Aqui podras ver mis Apps y nuevos lanzamientos, donde subo a mi repositorio todo lo que trabajo. Desde React como mi libreria de interfaz favorita hasta Nextjs y TypeScript para Apps mas robustas y escalables. Conoce mas sobre mi trabajo y si ves algo que te gusta no olvides de dejar una etrella. Cualquier colaboracion a los repositorios son bienvenidas" 
                        buttonText="GitHub" 
                    />
                    <Card 
                        icon={faProductHunt} 
                        title="Products" 
                        description="Aqui podras ver mis Apps y nuevos lanzamientos, donde subo a mi repositorio todo lo que trabajo. Desde React como mi libreria de interfaz favorita hasta Nextjs y TypeScript para Apps mas robustas y escalables. Conoce mas sobre mi trabajo y si ves algo que te gusta no olvides de dejar una etrella. Cualquier colaboracion a los repositorios son bienvenidas" 
                        buttonText="GitHub" 
                    />
                </div>}
            </div>
        </>
    );
}

export default App;