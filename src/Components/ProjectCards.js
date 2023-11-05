import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPlay } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';
const ProjectCards = ({ image, title, description, icons, dataAos, repositoryLink, deployLink, dataAosDelay }) => {
    return (
        <div className="bg-neutral-800 rounded-lg w-[80%] sm:w-[60%] md:w-[40%] lg:w-[30%] pb-3" data-aos={dataAos} data-aos-duration={"1000"} data-aos-delay={dataAosDelay}>
            <div>
                <Image src={image} width={1280} height={768} alt="Ecommerce Project" className='rounded-t-lg' />
            </div>
            <div className="flex flex-col xl:gap-1 text-gray-100 items-center">
                <h3 className="text-2xl xl:text-3xl text-white font-semibold my-2">{title}</h3>
                <p className="text-gray-200 text-sm xl:text-md px-2 xl:px-5 max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-md text-center">{description}</p>
                <div className='p-4'>
                    {icons}
                </div>
                <div className='flex items-center justify-center gap-3'>
                    <Link href={deployLink}
                        className='flex justify-center items-center rounded-md px-4 py-2 gap-2 text-sm bg-red-700 hover:bg-red-800'
                        target="_blank"
                        rel="noopener noreferrer">
                        <p>Demo</p>
                        <FaPlay size={15} className='text-gray-100'/>
                    </Link>
                    <Link
                        href={repositoryLink}
                        className='flex justify-center items-center rounded-md px-4 py-2 gap-2 text-sm bg-red-700 hover:bg-red-800'
                        target="_blank"
                        rel="noopener noreferrer">
                        <p>GitHub</p>
                        <SiGithub size={15} className='text-gray-100' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectCards