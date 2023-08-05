import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GitHub from '../../public/Icons/github.png';
import Demo from '../../public/Icons/demo.png';

const ProjectCards = ({ image, title, description, map, dataAos, repositoryLink, deployLink, dataAosDelay }) => {
    return (
        <div className="bg-neutral-800 rounded-lg pb-3 w-[395px] md:w-[430px] lg:w-[395]" data-aos={dataAos} data-aos-duration={"1000"} data-aos-delay={dataAosDelay}>
            <div>
                <Image src={image} width={800} height={800} alt="Ecommerce Project" className='w-full image-bg' />
            </div>
            <div className="flex flex-col text-gray-100 items-center">
                <h3 className="text-2xl text-white font-semibold my-2">{title}</h3>
                <p className="text-gray-200 text-sm px-4 max-w-sm lg:max-w-xs text-center">{description}</p>
                <div className='py-4'>
                    {map}
                </div>
                <div className='flex items-center justify-center gap-3'>
                    <Link href={deployLink}
                        className='flex justify-center items-center rounded-md px-4 py-2 gap-2 text-sm bg-red-700 hover:bg-red-800'
                        target="_blank"
                        rel="noopener noreferrer">
                        <p>Demo</p>
                        <Image src={Demo} width={19} height={19} alt='Demo' />
                    </Link>
                    <Link
                        href={repositoryLink}
                        className='flex justify-center items-center rounded-md px-4 py-2 gap-2 text-sm bg-red-700 hover:bg-red-800'
                        target="_blank"
                        rel="noopener noreferrer">
                        <p>GitHub</p>
                        <Image src={GitHub} width={19} height={19} alt='GitHub' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectCards