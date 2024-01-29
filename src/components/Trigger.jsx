import React from 'react';
import { faCode, faCodeBranch, faCodeCommit, faSync, faBug, faRocket, faWrench, faFlagCheckered } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './Hero/HeroSection.jsx';
import Navbar from './Header/Navbar.jsx'; 
import SecondHero from './Hero/SecondHero.jsx';
import ThirdHero from './Hero/ThirdHero.jsx';
import Card from './Card/Card.jsx';
import Footer from './Footer/Footer.jsx';
import ArticleBlog from './pages/ArtticleBlog.jsx';
import HirePage from './pages/HirePage.jsx'; 
import ProjectCard from './Card/ProjectCard.jsx';
import { faUser } from '@fortawesome/free-solid-svg-icons';

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
                                    buttonText="See More" 
                                    buttonIcon ="search"
                                    buttonLink='/project'                      
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
                                    description="Discover the way I build my web applications. I share my knowledge and experience on my blog. I write about React, Next.js, TypeScript, and more. Feel free to contribute and don't forget to leave a star if you appreciate my work." 
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
                <Route path="/project" element={
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 ml-6 mt-6">
                    <ProjectCard 
                        title="Umbrella App" 
                        description="Umbrella is a weather application that allows you to know the weather in your city and other cities around the world. It's simple, fast, beautiful, and free. With the API from Tomorrow.io, you can get the weather forecast for the next 24 hours and the next 7 days."
                        githubLink="https://github.com/LennyDevX"
                        demoLink="https://umbrella-app-ejqq.vercel.app/"
                        image="/Weather2.png"
                        technologies={["Vue", "Vuetify", "JavaScript"]}
                        spamText="New update"
                        progress={60}
                        progressText={"Next Update 60%"}
                        spanColor={"text-green-300"}
                    />
                    <ProjectCard 
                        title="Layla AI" 
                        description="Layla is a chatbot powered by Google AI that allows you to chat with her and ask her questions. She can answer your questions and help you with your tasks. She can also tell you jokes and play games with you. She is a very smart and intelligent chatbot."
                        githubLink="https://github.com/LennyDevX/Layla"
                        demoLink="https://layla-r09in3hal-lennydevxs-projects.vercel.app/"
                        image="/LaylaAI.png"
                        technologies={["React", "Tailwindcss", "Google Cloud"]}
                        spamText="Alpha 1 Release"
                        progress={80}
                        spanColor={"text-orange-300"}
                        progressText={"Alpha 2"}
                        icon={faBug}
                        
                        
                    
                    />
                    <ProjectCard 
                        title="Todo App" 
                        description="Working on a Todo app for my porfolio, this will be my next project release. Support my work by leaving a star on my GitHub repository. I will be releasing the first version of this app soon. Stay tuned for more updates."
                        image="/Todo.png"
                        technologies={["undefiend", "undefiend", "undefiend"]}
                        spamText="Prototype"
                        icon={faWrench}
                        progress={20}
                        spanColor={"text-yellow-300"}
                        progressText={"Alpha 1 20%"}
                        
                        
                    
                    />
                </div>
                } />
                <Route path="/hire" element={<HirePage />} />            
            </Routes>
        </Router>
    );
}

export default App;