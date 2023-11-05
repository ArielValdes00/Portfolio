import React, { useEffect } from 'react';
import ChatApp from '../../public/bg-chat-app.png';
import Ecommerce from '../../public/bg-ecommerce.png';
import QuizApp from '../../public/quiz-app-bg.png';
import ProjectCards from './ProjectCards';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from '@/utils/useTranslation';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiExpress, SiMongodb, SiTailwindcss } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { DiMysql } from 'react-icons/di';

const Projects = () => {
    const t = useTranslation();

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <div className='text-white text-center'>
                <h2 className='text-4xl md:text-5xl mb-10 font-semibold'>{t.projects}</h2>
            </div>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-4 xl:gap-7 xl:px-5'>
                <ProjectCards
                    dataAosDelay={"100"}
                    dataAos={'fade-right'}
                    title={'E-commerce'}
                    description={t.ecommerceDescription}
                    image={Ecommerce}
                    repositoryLink={'https://github.com/ArielValdes00/ecommerce-funkos'}
                    deployLink={'https://ecommerce-funkos-client.vercel.app/'}
                    icons={
                        <div className='flex justify-center items-center gap-2 sm:gap-3'>
                            <TbBrandNextjs size={30} className='text-neutral-500' title='Next.js' />
                            <SiTailwindcss size={30} className='text-sky-500' title='Tailwind CSS' />
                            <FaNodeJs size={30} className='text-node' title='Node.js' />
                            <SiExpress size={30} className='text-neutral-500' title='Express.js' />
                            <DiMysql size={30} className='text-mysql' title='MySQL' />
                        </div>
                    }
                />
                <ProjectCards
                    dataAosDelay={"200"}
                    dataAos={'fade-right'}
                    title={'Chat App'}
                    description={t.chatDescription}
                    image={ChatApp}
                    repositoryLink={'https://github.com/ArielValdes00/Chat-App'}
                    deployLink={'https://chat-app-ten-topaz.vercel.app'}
                    icons={
                        <div className='flex justify-center items-center gap-2 sm:gap-3'>
                            <TbBrandNextjs size={30} className='text-neutral-500' title='Next.js' />
                            <SiTailwindcss size={30} className='text-sky-500' title='Tailwind' />
                            <FaNodeJs size={30} className='text-node' title='Node.js' />
                            <SiExpress size={30} className='text-neutral-500' title='Express' />
                            <SiMongodb size={30} className='text-mongo' title='MongoDB' />
                        </div>
                    }
                />
                <ProjectCards
                    dataAosDelay={"300"}
                    dataAos={'fade-right'}
                    title={'Flag Quiz App'}
                    description={t.flagQuizDescription}
                    image={QuizApp}
                    repositoryLink={'https://github.com/ArielValdes00/FlagQuizApp'}
                    deployLink={'https://flag-quiz-app-pi.vercel.app'}
                    icons={
                        <div className='flex justify-center items-center gap-2 sm:gap-3'>
                            <TbBrandNextjs size={30} className='text-neutral-500' title='Next.js'/>
                            <SiTailwindcss size={30} className='text-sky-500' title='Tailwind'/>
                        </div>
                    }
                />
            </div>
        </div>
    );
};

export default Projects;
