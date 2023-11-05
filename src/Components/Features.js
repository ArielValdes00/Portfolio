import React, { useEffect } from 'react';
import { icons } from '@/utils/icons-data';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="flex justify-center gap-6 md:gap-5 flex-wrap w-[90%] md:w-2/3 mx-auto">
            {icons.map((icon, index) => (
                <div key={index} className='flex flex-col items-center justify-center gap-2 p-1' data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                    <span className='rounded-full flex items-center justify-center p-2 bg-gray-200 icons-img'>
                        {icon.icon}
                    </span>
                    <p className='text-sm'>{icon.name}</p>
                </div>
            ))}
        </div>
    )
}

export default Features