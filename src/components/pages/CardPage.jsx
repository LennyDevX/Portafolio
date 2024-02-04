// Cards.jsx
import React from 'react';
import Card from '../Card/Card.jsx';

export default function Cards() {
    return (
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
    );
}