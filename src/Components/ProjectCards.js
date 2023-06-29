import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GitHub from '../../public/Icons/github.png';
import Demo from '../../public/Icons/demo.png';

const ProjectCards = ({ image, title, description, map, dataAos }) => {
    return (
        <div className="bg-neutral-800 rounded-md my-5 p-2 py-4 grid lg:grid-cols-7 lg:gap-7 gap-3 text-center lg:text-start" data-aos={dataAos} data-aos-duration="1000">
            <div className='col-span-4'>
                <Image src={image} width={720} height={720} alt="Ecommerce Project" className='mx-auto' />
            </div>
            <div className="flex flex-col text-gray-100 col-span-3">
                <h3 className="text-4xl font-bold text-white mb-4">{title}</h3>
                <p className="text-gray-200 mx-auto lg:m-0 xl:pe-20 leading-loose md:w-4/5 lg:w-full">{description}</p>
                <div>
                    {map}
                </div>
                <div className='flex gap-5 items-center lg:mt-auto lg:m-0 font-semibold mx-auto'>
                    <Link href={'#'} className='px-10 py-3 rounded bg-red-700 flex gap-2 justify-center'>
                        <p>Demo</p>
                        <Image src={Demo} width={25} height={25} alt='Demo' />
                    </Link>
                    <Link href={'https://github.com/ArielValdes00/ecommerce-funkos'} className='flex gap-3 bg-red-700 rounded px-10 py-3 justify-center' target="_blank" rel="noopener noreferrer">
                        <p>GitHub</p>
                        <Image src={GitHub} width={25} height={25} alt='GitHub' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectCards