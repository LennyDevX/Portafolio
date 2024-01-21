import React from 'react';
import { useInView } from 'react-intersection-observer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './Hero/HeroSection.jsx';
import Navbar from './Header/Navbar.jsx'; 
import SecondHero from './Hero/SecondHero.jsx';
import ThirdHero from './Hero/ThirdHero.jsx';
import Card from    './Card/Card.jsx';
import Footer from './Footer/Footer.jsx';
import ArticleBlog from './pages/ArtticleBlog.jsx';
import HirePage from './pages/HirePage.jsx'; 

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
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ml-6 mt-6">
                            <Card 
                                    icon="briefcase" 
                                    title="Products" 
                                    description="Explore my diverse portfolio of applications and new releases. I leverage React, Next.js, and TypeScript to build robust, scalable solutions. Feel free to contribute and don't forget to leave a star if you appreciate my work." 
                                    buttonText="GitHub" 
                                    buttonIcon ="github"
                                    buttonLink='https://github.com/LennyDevX'                      
                                />
                                <Card 
                                    icon="building"
                                    title="Enterprise" 
                                    description="I collaborate with a team of developers on a blog platform for the tech community. Visit our repository to learn more and collaborate with us, join us on Discord." 
                                    buttonText="Discord" 
                                    buttonIcon ="discord"  
                                    buttonLink='https://discord.gg/c252kH9v'
                                                         
                                />
                                <Card 
                                    icon="microchip"
                                    title="Under-Hood" 
                                    description="Discover the technologies I use, from frontend to backend. I primarily use the MERN stack, along with Bootstrap, Tailwind CSS, Material UI, and more. Learn how you can also create applications like Sintetix." 
                                    buttonText="Learn More" 
                                    buttonIcon ="rocket" 
                                    buttonLink='/blog'                      
                                />
                            </div>
                        </div>
                        <div ref={refFooter} style={{visibility: inViewFooter ? 'visible' : 'hidden'}}>
                            <Footer />
                        </div>
                    </>
                }/>
                <Route path="/blog" element={<ArticleBlog />} />
                <Route path="/hire" element={<HirePage />} />            
            </Routes>
        </Router>
    );
}

export default App;