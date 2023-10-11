import React, { useEffect } from 'react';
import ChatApp from '../../public/bg-chat-app.png';
import Ecommerce from '../../public/bg-ecommerce.png';
import QuizApp from '../../public/quiz-app-bg.png';
import ProjectCards from './ProjectCards';
import { iconsProject } from '@/icons-data';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from '@/utils/useTranslation';

const Projects = () => {
    const t = useTranslation();

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <div className='text-white text-center'>
                <h2 className='text-5xl mb-10 font-semibold'>{t.projects}</h2>
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
                    map={
                        iconsProject.map((icon, index) => (
                            <div key={index} className='flex gap-4 justify-center lg:justify-start'>
                                <abbr title='Next.js' className='flex'>
                                    <span className='rounded-full p-2 bg-gray-200'>
                                        <img src={icon.next} width={20} height={20} alt='Next'></img>
                                    </span>
                                </abbr>
                                <abbr title='Tailwind CSS' className='flex'>
                                    <span className='rounded-full p-2 bg-gray-200'>
                                        <img src={icon.tailwind} width={20} height={20} alt='Tailwind'></img>
                                    </span>
                                </abbr>
                                <abbr title='Node.js' className='flex'>
                                    <span className='rounded-full p-2 bg-gray-200'>
                                        <img src={icon.node} width={20} height={20} alt='Node.js'></img>
                                    </span>
                                </abbr>
                                <abbr title='Express' className='flex'>
                                    <span className='rounded-full p-2 bg-gray-200'>
                                        <img src={icon.express} width={20} height={20} alt='Express'></img>
                                    </span>
                                </abbr>
                                <abbr title='MySQL' className='flex'>
                                    <span className='rounded-full p-2 bg-gray-200'>
                                        <img src={icon.mysql} width={20} height={20} alt='MySQL'></img>
                                    </span>
                                </abbr>
                            </div>
                        ))}
                />
                <ProjectCards
                    dataAosDelay={"200"}
                    dataAos={'fade-right'}
                    title={'Chat App'}
                    description={t.chatDescription}
                    image={ChatApp}
                    repositoryLink={'https://github.com/ArielValdes00/Chat-App'}
                    deployLink={'https://chat-app-ten-topaz.vercel.app'}
                    map={
                        iconsProject.map((icon, index) => (
                            <div key={index} className='flex gap-4 justify-center lg:justify-start'>
                                <abbr title='Next.js' className='flex'>
                                    <span className='rounded-full p-2 bg-gray-200'>
                                        <img src={icon.next} width={20} height={20} alt='Next'></img>
                                    </span>
                                </abbr>
                                <abbr title='Tailwind CSS' className='flex'>
                                    <span className='rounded-full p-2 bg-gray-200'>
                                        <img src={icon.tailwind} width={20} height={20} alt='Tailwind'></img>
                                    </span>
                                </abbr>
                                <abbr title='Node.js' className='flex'>
                                    <span className='rounded-full p-2 bg-gray-200'>
                                        <img src={icon.node} width={20} height={20} alt='Node.js'></img>
                                    </span>
                                </abbr>
                                <abbr title='Express' className='flex'>
                                    <span className='rounded-full p-2 bg-gray-200'>
                                        <img src={icon.express} width={20} height={20} alt='Express'></img>
                                    </span>
                                </abbr>
                                <abbr title='Mongo DB' className='flex'>
                                    <span className='rounded-full p-2 bg-gray-200'>
                                        <img src={icon.mongo} width={20} height={20} alt='Mongo DB'></img>
                                    </span>
                                </abbr>
                            </div>
                        ))}
                />
                <ProjectCards
                    dataAosDelay={"300"}
                    dataAos={'fade-right'}
                    title={'Flag Quiz App'}
                    description={t.flagQuizDescription}
                    image={QuizApp}
                    repositoryLink={'https://github.com/ArielValdes00/FlagQuizApp'}
                    deployLink={'https://flag-quiz-app-pi.vercel.app'}
                    map={
                        iconsProject.map((icon, index) => (
                            <div key={index} className='flex gap-4 justify-center lg:justify-start'>
                                <abbr title='Next.js' className='flex'>
                                    <span className='rounded-full p-2 bg-gray-200'>
                                        <img src={icon.next} width={20} height={20} alt='Next'></img>
                                    </span>
                                </abbr>
                                <abbr title='Tailwind CSS' className='flex'>
                                    <span className='rounded-full p-2 bg-gray-200'>
                                        <img src={icon.tailwind} width={20} height={20} alt='Tailwind'></img>
                                    </span>
                                </abbr>
                            </div>
                        ))}
                />
            </div>
        </div>
    );
};

export default Projects;
