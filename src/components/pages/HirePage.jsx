// HirePage.jsx
import React from 'react';
import HireSection from '../Hero/HireSection.jsx';
import CardHire from '../Card/CardHire.jsx';

const HirePage = () => {
    return (
        <>
    <HireSection />
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ml-6 mt-6'>
        <CardHire title="Título 1" description="Texto 1" />
        <CardHire title="Título 2" description="Texto 2" />
        <CardHire title="Título 3" description="Texto 3" />
    </div>
</>
    );
};

export default HirePage; 