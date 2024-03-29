import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import Linkedin from '../../public/Icons/linkedin.png';
import Stain from '../../public/stain.png';
import Link from 'next/link';
import { useTranslation } from '@/utils/useTranslation';
import { SiGithub } from 'react-icons/si';

const Home = () => {
    const t = useTranslation();
    const controls = useAnimation();

    useEffect(() => {
        controls.start({ opacity: 1 });
    }, []);

    return (
        <div className="h-screen flex flex-col justify-center items-center pt-10">
            <motion.main
                className="flex flex-col items-center justify-center text-white relative"
                initial={{ opacity: 0 }}
                animate={controls}
                transition={{ duration: 1.0 }}
            >
                <h1 className="text-5xl lg:text-6xl font-bold mb-5 text-center px-5 z-30">{t.title}</h1>
                <p className="text-lg mb-5 text-center z-30">{t.description}</p>
                <Image src={Stain}
                    height={600}
                    width={600}
                    alt='Stain'
                    loading="lazy"
                    className='absolute z-0 w-3/4 bottom-[26px] sm:bottom-[-40px] md:bottom-[-120px] md:left-[120px] md:w-[600px]'
                />
                <div className="flex justify-center gap-4 z-30">
                    <Link href={"https://github.com/ArielValdes00"} target='_blank' className='transform hover:scale-105'>
                        <SiGithub size={36} className='text-gray-100' />
                    </Link>
                    <Link href={"https://www.linkedin.com/in/arielvaldes/"} target="_blank" className='transform hover:scale-105'>
                        <Image src={Linkedin} height={36} width={36} alt="Linkedin" />
                    </Link>
                </div>
            </motion.main >
        </div >

    )
}

export default Home