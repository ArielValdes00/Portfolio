import React, { useEffect } from 'react';
import { icons } from '@/icons-data';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="flex justify-center gap-4 md:gap-5 flex-wrap md:w-2/3 mx-auto px-1">
            {icons.map((icon, index) => (
                <div key={index} className='flex flex-col gap-2 p-1' data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                    <span className='rounded-full p-2 bg-gray-200'>
                        <img src={icon.image} width={55} height={30} alt={icon.name} className='p-1' />
                    </span>
                    <p>{icon.name}</p>
                </div>
            ))}
        </div>
    )
}

export default Features