import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ArticleBlog = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const underHood = query.get('under-hood');

    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [delay, setDelay] = useState(75);
    const text = ["Welcome To Sintetix", "Explore how Sintetix works"];

    const longestText = text.reduce((a, b) => a.length > b.length ? a : b);
    const titleRef = useRef(null);

    useEffect(() => {
        if (titleRef.current) {
            titleRef.current.style.minWidth = `${longestText.length}ch`;
            titleRef.current.style.minHeight = '1.5em'; // set a minimum height
        }
    }, [longestText]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (index === text.length) return;

        if (subIndex === text[index].length+1 && 
            index !== text.length-1 && 
            !reverse ) {
            setReverse(true);
            setDelay(500); // reduced delay before starting to delete
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => prev + 1);
            setDelay(500); // reduced delay before starting to type
            return;
        }

        setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
            setDelay(75); // normal typing speed
        }, delay);
    }, [subIndex, index, reverse, text, delay]);

    return (
        <div className="flex flex-col items-center justify-center p-10 m-10 rounded shadow-lg ">
            <h1 ref={titleRef} className="hero-section-title text-center text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-blue-600 min-h-[3.5rem] md:min-h-[4.5rem]">
                {`${text[index].substring(0, subIndex)}${subIndex === text[index].length ? '_' : ''}`}
            </h1>
            <p className="text-lg mb-4 text-center mx-auto max-w-prose">
                TEST TEST TEST TEST Bienvenidos a Sintetix, una innovadora aplicación web que combina lo mejor de los blogs y las redes sociales en una sola plataforma. <br/>
                En Sintetix, los usuarios pueden leer y subir artículos, comentar en las publicaciones de otros y expresar su aprecio con un simple “like”.<br/><br/>

                Pero eso no es todo, Sintetix es mucho más que una simple plataforma de blogging. <br/>
                Sintetix se construye sobre una base sólida de tecnologías modernas y de vanguardia.<br/><br/>

                Utilizamos React para la interfaz de usuario. React es una biblioteca de JavaScript para construir interfaces de usuario. Proporciona una experiencia de usuario fluida y reactiva. Además, React nos permite crear componentes reutilizables, lo que facilita el mantenimiento y la escalabilidad de nuestra aplicación.<br/><br/>

                Para los estilos, utilizamos Tailwind CSS, un marco de trabajo de bajo nivel que nos permite diseñar nuestras interfaces de usuario de forma eficiente y con un alto grado de personalización. Con Tailwind CSS, podemos crear diseños responsivos que se ven y funcionan bien en una variedad de dispositivos y tamaños de pantalla.<br/><br/>

                La lógica de la aplicación se maneja con JavaScript, el lenguaje de programación más popular para el desarrollo web. JavaScript nos permite crear interacciones dinámicas en el lado del cliente, mejorando la experiencia del usuario.<br/><br/>

                En el lado del servidor, utilizamos Express, un marco de trabajo minimalista y flexible para Node.js. Express nos proporciona las herramientas necesarias para construir nuestro servidor web y manejar las solicitudes HTTP.<br/><br/>

                Finalmente, para el despliegue de nuestra aplicación, utilizamos Vercel, una plataforma de despliegue en la nube que nos permite implementar nuestra aplicación de manera rápida y eficiente.<br/><br/>

                Sintetix no es solo una plataforma de blogging, sino también una red social. Los usuarios pueden seguir a otros, interactuar con sus publicaciones y formar comunidades en torno a temas de interés común. Esto crea un ambiente dinámico y participativo donde los usuarios pueden compartir ideas, aprender de los demás y formar conexiones significativas.<br/><br/>

                Nuestro objetivo con Sintetix es proporcionar una plataforma donde los usuarios puedan expresarse libremente, compartir sus pensamientos e ideas, y conectarse con otros que comparten sus intereses. Creemos que al combinar los aspectos de blogging y redes sociales, podemos crear una experiencia única y valiosa para nuestros usuarios.<br/><br/>

                Esperamos que disfrutes de tu tiempo en Sintetix y estamos emocionados de ver lo que nuestra comunidad creará. ¡Bienvenido a Sintetix!
            </p>
            <div className="flex space-x-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded">Like</button>
                <button className="px-4 py-2 bg-black text-white rounded">GitHub</button>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded">Discord</button>
            </div>
        </div>
    );
};

export default ArticleBlog;