import React from 'react';
import Ecommerce from '../../public/Icons/ecommerce.png';
import Ecom from '../../public/Icons/ecom.png'
import ProjectCards from './ProjectCards';

const Projects = () => {
    return (
        <div className="grid place-items-center justify-center">
            <div className='mb-10 text-white text-center'>
                <h2 className='text-5xl font-semibold'>Projects</h2>
            </div>
            <div className='px-3'>
                <ProjectCards
                    title={'Ecommerce'}
                    description={`I created an ecommerce platform with shopping cart functionality, 
                    PayPal integration for secure payments, and a NextAuth-based authentication system. 
                    Users can access a dashboard with role-based permissions for managing products, users,
                    and viewing purchase history. This project highlights my ability to develop a fully 
                    functional online store with essential features for seamless product management, user 
                    authentication, and transaction tracking.`}
                    image={Ecom}
                />

                <ProjectCards
                    title={'Chat App'}
                    description={`Built with a robust authentication system, my chat application provides 
                    users with a secure platform to connect and communicate. Upon login, users gain access 
                    to a contact section where they can interact with other connected users in real-time.
                    Leveraging the power of Socket.io, this application enables seamless and dynamic conversations, 
                    offering an engaging chat experience that fosters effective communication and collaboration.`}
                    image={Ecommerce}
                />
            </div>
        </div>
    );
};

export default Projects;
