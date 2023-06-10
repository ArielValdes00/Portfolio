import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GitHub from '../../public/Icons/github.png';
import Demo from '../../public/Icons/demo.png';


const ProjectCards = ({ image, title, description }) => {
    return (
        <div className="bg-neutral-800 rounded-md my-5 p-2 grid lg:grid-cols-7 lg:gap-7 gap-3 text-center lg:text-start">
            <div className='col-span-4'>
                <Image src={image} width={650} height={650} alt="Ecommerce Project" className='mx-auto'/>
            </div>
            <div className="flex flex-col text-gray-200 col-span-3">
                <h3 className="text-4xl font-bold text-white mb-4">{title}</h3>
                <p className="text-gray-200 lg:pe-20 leading-loose mb-4">{description}</p>
                <div className='flex gap-5 items-center lg:mt-auto lg:m-0 font-semibold mx-auto'>
                    <Link href={'#'} className='px-10 py-3 rounded bg-red-700 flex gap-2 justify-center'>
                        <p className=''>Demo</p>
                        <Image src={Demo} width={25} height={25} alt='Demo' />
                    </Link>
                    <Link href={'#'} className='flex gap-3 bg-red-700 rounded px-10 py-3 justify-center'>
                        <p className=''>GitHub</p>
                        <Image src={GitHub} width={25} height={25} alt='GitHub' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectCards