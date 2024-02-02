import React from 'react';

const PricingSection = ({ title, description, price, features, buttonText, note, noteLink, description2 }) => {
    return (
        <div className="flex flex-col bg-black shadow-lg rounded-lg max-w-md m-4">
            <div className="flex-1 p-6">
                <h2 className="text-2xl font-bold text-gray-300">{title}</h2>
                <p className="mt-2 text-gray-200">{description}</p>
                <p className="mt-2 text-gray-200">{description2}</p>
                <ul className="mt-4 space-y-2">
                    {features && features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                            <svg className="h-4 w-4 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="ml-2 text-gray-300">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="p-6 border-t bg-gradient-to-r from-gray-200 via-red-200 to-purple-200 border-gray-200">
                <div className="flex items-center justify-between">
                    <span className="text-gray-900 text-2xl">{price}</span>
                    <button className="px-4 py-2 text-black bg-transparent border-black rounded hover:bg-green-300">{buttonText}</button>
                </div>
                <p className="mt-2 text-sm text-gray-700">{note}</p>
                <a href={noteLink} className="text-sm text-gray-700 hover:underline">{noteLink}</a>
            </div>
        </div>
    );
};

export default PricingSection;