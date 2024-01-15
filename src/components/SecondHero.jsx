import React, { useState, useEffect } from 'react';
import DailyMotivation from '../../public/DailyMotivation.png';

const SecondHero = () => {
    const image = {
        src: DailyMotivation,
        alt: 'Daily Motivation',
        width: 350,
        height: 350,
        layout: 'responsive',
    };

    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const text = ["Stay motivated", "Every day", "With our daily tips"];

    useEffect(() => {
        if (index === text.length) return;

        if (subIndex === text[index].length + 1 && index !== text.length - 1 && !reverse) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => prev + 1);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, 75);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, text]);

    return (
        <div className="hero-section flex flex-col md:flex-row items-center justify-center px-2 md:px-4 mt-2 md:mt-4">
            <div className="w-full md:w-1/2 ml-0 md:ml-2 mt-2 md:mt-4">
                <div className="w-2/4 md:w-full mx-auto md:max-w-sm items-center">
                    <img src={image.src} alt={image.alt} loading="lazy" width={image.width} height={image.height} />
                </div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left mt-2 md:mt-4">
                <h1 className="hero-section-title text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-blue-600 min-h-[3.5rem] md:min-h-[4.5rem]">
                    {`${text[index].substring(0, subIndex)}${subIndex === text[index].length ? '_' : ''}`}
                </h1>
                <p className="hero-section-paragraph mt-2 text-lg md:text-xl">
                    Welcome to our daily motivation tips. Stay motivated every day!
                </p>
                <a
                    className="hero-section-button mt-2 inline-block bg-black text-white py-2 px-4 rounded"
                    title="Learn more about our daily motivation tips"
                >
                    Learn More
                </a>
            </div>
        </div>
    );
};

export default SecondHero;