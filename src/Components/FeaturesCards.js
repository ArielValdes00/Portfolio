import React from 'react';
import Image from 'next/image';

const FeaturesCards = ({ name, description, image }) => {
    return (
        <div className="bg-neutral-800 py-5 rounded-lg grid grid-cols-2">
            <div className='px-3 flex flex-col items-center justify-center'>
                <h3 className="text-xl font-semibold mb-2">{name}</h3>
                <p className='text-sm'>{description}</p>
            </div>
            <div className='my-auto'>
                <Image src={image} alt={name} height={110} width={110} className="mx-auto" />
            </div>
        </div>
    )
}

export default FeaturesCards