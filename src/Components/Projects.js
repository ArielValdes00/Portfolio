import React, { useEffect } from 'react';
import Ecomm from '../../public/Icons/ecommerce.png';
import Ecommerce from '../../public/project-ecommerce.png'
import ProjectCards from './ProjectCards';
import { iconsProject } from '@/icons-data';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="grid place-items-center justify-center overflow-hidden">
            <div className='mb-10 text-white text-center'>
                <h2 className='text-5xl font-semibold'>Projects</h2>
            </div>
            <div className='px-3'>
                <ProjectCards
                    dataAos="fade-right"
                    title={'E-commerce'}
                    description={`I have created an e-commerce platform with shopping cart functionality, PayPal 
                    integration for secure payments, and a NextAuth-based authentication system. Users can access a 
                    dashboard with role-based permissions for managing products, users, and viewing purchase history. 
                    This project showcases my ability to develop a fully functional online store with essential features 
                    for seamless product management, user authentication, and transaction tracking.`}
                    image={Ecommerce}
                    map={
                        iconsProject.map((icon, index) => (
                            <div key={index} className='flex gap-5 py-6 justify-center lg:justify-start'>
                                <span className='rounded-full p-2 bg-gray-200'>
                                    <img src={icon.next} width={32} height={32} alt='Next'></img>
                                </span>
                                <span className='rounded-full p-2 bg-gray-200'>
                                    <img src={icon.tailwind} width={32} height={32} alt='Tailwind'></img>
                                </span>
                                <span className='rounded-full p-2 bg-gray-200'>
                                    <img src={icon.node} width={32} height={32} alt='Node.js'></img>
                                </span>
                                <span className='rounded-full p-2 bg-gray-200'>
                                    <img src={icon.express} width={32} height={32} alt='Express'></img>
                                </span>
                                <span className='rounded-full p-2 bg-gray-200'>
                                    <img src={icon.mysql} width={32} height={32} alt='MySQL'></img>
                                </span>
                            </div>
                        ))}
                />
                <ProjectCards
                    dataAos="fade-right"
                    title={'Chat App'}
                    description={`Built with a robust authentication system, my chat application provides 
                    users with a secure platform to connect and communicate. Upon login, users gain access 
                    to a contact section where they can interact with other connected users in real-time.
                    Leveraging the power of Socket.io, this application enables seamless and dynamic conversations, 
                    offering an engaging chat experience that fosters effective communication and collaboration.`}
                    image={Ecomm}
                    map={
                        iconsProject.map((icon, index) => (
                            <div key={index} className='flex gap-5 py-6 justify-center lg:justify-start'>
                                <span className='rounded-full p-2 bg-gray-200'>
                                    <img src={icon.next} width={32} height={32} alt='Next'></img>
                                </span>
                                <span className='rounded-full p-2 bg-gray-200'>
                                    <img src={icon.tailwind} width={32} height={32} alt='Tailwind'></img>
                                </span>
                                <span className='rounded-full p-2 bg-gray-200'>
                                    <img src={icon.node} width={32} height={32} alt='Node.js'></img>
                                </span>
                                <span className='rounded-full p-2 bg-gray-200'>
                                    <img src={icon.express} width={32} height={32} alt='Express'></img>
                                </span>
                                <span className='rounded-full p-2 bg-gray-200'>
                                    <img src={icon.mongo} width={32} height={32} alt='MongoDB'></img>
                                </span>
                            </div>
                        ))}
                />
            </div>
        </div>
    );
};

export default Projects;
