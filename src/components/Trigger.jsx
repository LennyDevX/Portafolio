import React from 'react';
import { useInView } from 'react-intersection-observer';
import HeroSection from './HeroSection.jsx';
import Navbar from './Navbar.jsx';
import SecondHero from './SecondHero.jsx';
import ThirdHero from './ThirdHero.jsx';
import Card from './Card.jsx';
import Footer from './Footer.jsx';

function App() {
    const [refHeroSection, inViewHeroSection] = useInView({
        triggerOnce: false,
    });

    const [refSecondHero, inViewSecondHero] = useInView({
        triggerOnce: true,
    });

    const [refThirdHero, inViewThirdHero] = useInView({
        triggerOnce: false,
    });

    const [refCard, inViewCard] = useInView({
        triggerOnce: false,
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ml-6">
                        <Card 
                            icon="briefcase"
                            title="Products" 
                            description="Here you can see my apps and new releases, where I upload everything I work on to my repository. From React as my favorite interface library to Next.js and TypeScript for more robust and scalable apps. Learn more about my work and if you see something you like, don't forget to leave a star. Any contributions to the repositories are welcome" 
                            buttonText="GitHub" 
                            buttonIcon ="github"                       

                        />
                        <Card 
                            icon="building"
                            title="Enterprise" 
                            description="Here is an organization on Github where I colaborate with others developers, we are working on a project to create a platform for the sale of products and services Apps, where we will use the MERN stack, if you want to know more about the project, you can visit the repository and leave a star"
                            buttonText="Discord" 
                            buttonIcon ="discord"                       

                        />
                        <Card 
                            icon="microchip"
                            title="Under-Hood" 
                            description="Know the technologies that I use to develop my projects, from the frontend to the backend, I use the MERN stack, I also use other technologies such as Bootstrap, Tailwind CSS, Material UI, etc. Discovery the way that you also can do apps like Sintetix " 
                            buttonText="Learn More" 
                            buttonIcon ="rocket"                       

                        />
                    </div>
                }
            </div>
            <Footer />
        </>
    );
}

export default App;