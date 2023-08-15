import React, { useEffect } from 'react';
import ChatApp from '../../public/bg-chat-app.png';
import Ecommerce from '../../public/bg-ecommerce.png';
import QuizApp from '../../public/quiz-app-bg.png';
import ProjectCards from './ProjectCards';
import { iconsProject } from '@/icons-data';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <div className='text-white text-center'>
                <h2 className='text-5xl mb-10 font-semibold'>Projects</h2>
            </div>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-4 xl:gap-7 xl:px-5'>
                <ProjectCards
                    dataAosDelay={"100"}
                    dataAos={'fade-right'}
                    title={'E-commerce'}
                    description={`Created e-commerce platform with cart, PayPal, and role-based dashboard. 
                    Demonstrates seamless product management, user authentication, and tracking.`}
                    image={Ecommerce}
                    repositoryLink={'https://github.com/ArielValdes00/ecommerce-funkos'}
                    deployLink={'#'}
                    map={
                        iconsProject.map((icon, index) => (
                            <div key={index} className='flex gap-4 justify-center lg:justify-start'>
                                <span className='rounded-full p-2 bg-gray-200'>
                                    <img src={icon.next} width={20} height={20} alt='Next'></img>
                                </span>
                                <span className='rounded-full p-2 bg-gray-200'>
                                    <img src={icon.tailwind} width={20} height={20} alt='Tailwind'></img>
                                </span>
                                <span className='rounded-full p-2 bg-gray-200'>
                                    <img src={icon.node} width={20} height={20} alt='Node.js'></img>
                                </span>
                                <span className='rounded-full p-2 bg-gray-200'>
                                    <img src={icon.express} width={20} height={20} alt='Express'></img>
                                </span>
                                <span className='rounded-full p-2 bg-gray-200'>
                                    <img src={icon.mysql} width={20} height={20} alt='MySQL'></img>
                                </span>
                            </div>
                        ))}
                />
                <ProjectCards
                    dataAosDelay={"200"}
                    dataAos={'fade-right'}
                    title={'Chat App'}
                    description={`My chat app provides a secure platform for real-time communication. It offers seamless,
                     dynamic conversations using Socket.io for an engaging user experience.`}
                    image={ChatApp}
                    repositoryLink={'https://github.com/ArielValdes00/Chat-App'}
                    deployLink={'https://chat-app-ten-topaz.vercel.app'}
                    map={
                        iconsProject.map((icon, index) => (
                            <div key={index} className='flex gap-4 justify-center lg:justify-start'>
                                <span className='rounded-full p-2 bg-gray-200'>
                                    <img src={icon.next} width={20} height={20} alt='Next'></img>
                                </span>
                                <span className='rounded-full p-2 bg-gray-200'>
                                    <img src={icon.tailwind} width={20} height={20} alt='Tailwind'></img>
                                </span>
                                <span className='rounded-full p-2 bg-gray-200'>
                                    <img src={icon.node} width={20} height={20} alt='Node.js'></img>
                                </span>
                                <span className='rounded-full p-2 bg-gray-200'>
                                    <img src={icon.express} width={20} height={20} alt='Express'></img>
                                </span>
                                <span className='rounded-full p-2 bg-gray-200'>
                                    <img src={icon.mongo} width={20} height={20} alt='MongoDB'></img>
                                </span>
                            </div>
                        ))}
                />
                <ProjectCards
                    dataAosDelay={"300"}
                    dataAos={'fade-right'}
                    title={'Flag Quiz App'}
                    description={`Discover the World Flags Quiz: Test your knowledge, guess flags, earn points! 10-second timer,
                     explore flags from all continents in this engaging and educational quiz.`}
                    image={QuizApp}
                    repositoryLink={'https://github.com/ArielValdes00/FlagQuizApp'}
                    deployLink={'https://flag-quiz-app-pi.vercel.app'}
                    map={
                        iconsProject.map((icon, index) => (
                            <div key={index} className='flex gap-4 justify-center lg:justify-start'>
                                <span className='rounded-full p-2 bg-gray-200'>
                                    <img src={icon.next} width={20} height={20} alt='Next'></img>
                                </span>
                                <span className='rounded-full p-2 bg-gray-200'>
                                    <img src={icon.tailwind} width={20} height={20} alt='Tailwind'></img>
                                </span>
                            </div>
                        ))}
                />
            </div>
        </div>
    );
};

export default Projects;
