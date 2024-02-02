// ServicesPage.jsx
import React from 'react';
import PriceSection from '../Service/PriceSection'; // Asegúrate de que la ruta de importación sea correcta

export default function ServicePrice() {
    return (
        <div className='flex'>
            <PriceSection
                title="Frontend Development"
                description="This package is focused on the development of prototypes, design, and UX for your web. If you already have all the backend or service ready and you just need to style your web or redesign and adapt your interface, this service is ideal for you."
                price="$429"
                features={["Clean code", "Fast Development", "AI for better performance", "One-Payment", "Responsive Design", "SEO"]}
                buttonText="Hire"
                note="The price is for 15 days of development"
                description2={""}
            />
            <PriceSection
                title={"Hybrid Development"}
                price="$839"
                features={["All from Frontend Package", "Database", "API", "Micro-services", "Cloud"]}
                buttonText="Hire"
                note="The price is for 15 days of development"
                description={"This is for someona looking for a full-stack development, this package includes the development of the frontend and backend of your web. If you need a complete solution, this service is ideal for you."}
            />
            <PriceSection
                title={"Personalized Development"}
                price="$undefined"
                features={["Basic Web", "SPA", "Micro-services", "Prototype"]}
                buttonText="Hire"
                note="We need to talk about your project."
                noteLink={"/hire"}
                description={"This is a personalized service, if you need a custom solution, this service is ideal for you. I will work with you to create a custom solution for your web. This service is ideal for you."}
            />
        </div>
    );
}