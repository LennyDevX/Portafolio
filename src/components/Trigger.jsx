import React from 'react';
import { useInView } from 'react-intersection-observer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './Hero/HeroSection.jsx';
import Navbar from './Header/Navbar.jsx'; 
import SecondHero from './Hero/SecondHero.jsx';
import ThirdHero from './Hero/ThirdHero.jsx';
import Footer from './Footer/Footer.jsx';
import ArticleBlog from './pages/ArtticleBlog.jsx';
import HirePage from './pages/HirePage.jsx'; 
import ProjectPage from './pages/ProjectPage.jsx';
import PriceSection from './pages/PriceSection.jsx';
import CardPage from './pages/CardPage.jsx';

function App() {
    const [refHeroSection, inViewHeroSection] = useInView({
        triggerOnce: false,
    });

    const [refCard, inViewCard] = useInView({
        triggerOnce: false,
    });
    const [refFooter, inViewFooter] = useInView({
        triggerOnce: false,
    });

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <>
                        <div ref={refHeroSection} style={{visibility: inViewHeroSection ? 'visible' : 'hidden'}}>
                            <HeroSection />
                        </div>
                        <ThirdHero />
                        <SecondHero />

                        <div ref={refCard} style={{visibility: inViewCard ? 'visible' : 'hidden'}}>
                            <CardPage />
                        </div>

                        <div ref={refFooter} style={{visibility: inViewFooter ? 'visible' : 'hidden'}}>
                            <Footer />
                        </div>
                    </>
                }/>
                <Route path="/services" element={<PriceSection />} /> // Usa ServicesPage aquí
                <Route path="/blog" element={<ArticleBlog />} />
                <Route path="/project" element={<ProjectPage />} />
                <Route path="/hire" element={<HirePage />} />            
            </Routes>
        </Router>
    );
}

export default App;