import React from 'react';
import NavBar from '@/Components/NavBar';
import { useRef, useState, useEffect } from 'react';
import FeaturesCards from '@/Components/FeaturesCards';
import Html from '../../public/Icons/html-5.png';
import Css from '../../public/Icons/css-3.png';
import Js from '../../public/Icons/js.png';
import ReactLogo from '../../public/Icons/react.png';
import Node from '../../public/Icons/nodejs.png';
import Bootstrap from '../../public/Icons/bootstrap.png';
import MySql from '../../public/Icons/mysql.png';
import Git from '../../public/Icons/git.png';
import Next from '../../public/Icons/next.png';
import Express from '../../public/Icons/express.png';
import Mongo from '../../public/Icons/mongo.png';
import Tailwind from '../../public/Icons/tailwind.png';

export default function Home() {
    const sectionAboutMe = useRef(null);
    const sectionFeatures = useRef(null);

    const [showNavbar, setShowNavbar] = useState(true);


    const handleScrollAboutMe = () => {
        sectionAboutMe.current.scrollIntoView({
            behavior: 'smooth',
        });
    };
    const handleScrollFeatures = () => {
        sectionFeatures.current.scrollIntoView({
            behavior: 'smooth',
        });
    };
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setShowNavbar(currentScrollPos < 595);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <main className="flex flex-col min-h-screen">
                {showNavbar && (
                    <NavBar handleScrollAboutMe={handleScrollAboutMe} handleScrollFeatures={handleScrollFeatures} />
                )}
                <div className="flex flex-col justify-center items-center flex-grow z-10">
                    <div className="text-white text-center font-semibold grid gap-5">
                        <h5 className="text-2xl text-red-600">Hello, <span className='text-white'>I'm</span></h5>
                        <h1 className="text-8xl mb-2">Ariel <span className="text-red-600">Valdés</span></h1>
                        <h3 className="text-4xl text-red-600">Full Stack <span className='text-white'>Developer</span></h3>
                    </div>
                </div>

            </main>
            <section className='h-screen grid place-items-center' ref={sectionAboutMe} >
                <div className='flex flex-col gap-10 items-center text-center text-white px-5 md:w-1/2'>
                    <h2 className='text-5xl font-semibold'>About Me</h2>
                    <p className='text-lg leading-loose'>Welcome to my portfolio! I'm Ariel, a self-taught web developer with a
                        strong passion for creating innovative and user-friendly web applications.
                        As a dedicated learner, I have acquired a diverse range of skills in full-stack web development
                        through my self-study journey.
                        I embarked on this path  to pursue my passion for coding and to continuously challenge myself
                        with new projects and technologies. I believe that being self-taught has allowed me to develop a
                        unique set of qualities, including discipline, perseverance, and a proactive problem-solving mindset.
                    </p>
                </div>
            </section>
            <section className='h-screen grid place-items-center p-5' ref={sectionFeatures}>
                <div className='text-neutral-100 text-center'>
                    <div className='mb-10 text-white'>
                        <h2 className='text-5xl font-semibold'>Features</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
                        <FeaturesCards
                            image={Html}
                            name={'HTML'}
                            description={'Semantic markup language for web development.'}
                        />
                        <FeaturesCards
                            image={Css}
                            name={'CSS'}
                            description={'Styling language for web development.'}
                        />
                        <FeaturesCards
                            image={Js}
                            name={'JavaScript'}
                            description={'Programming language for web development.'}
                        />
                        <FeaturesCards
                            image={ReactLogo}
                            name={'React'}
                            description={'JavaScript library for building interactive user interfaces.'}
                        />
                        <FeaturesCards
                            image={Node}
                            name={'Node.js'}
                            description={'Server-side JavaScript runtime environment.'}
                        />
                        <FeaturesCards
                            image={Express}
                            name={'Express'}
                            description={'Node framework for building web applications and APIs.'}
                        />
                        <FeaturesCards
                            image={Bootstrap}
                            name={'Bootstrap'}
                            description={'Responsive CSS framework.'}
                        />
                        <FeaturesCards
                            image={Tailwind}
                            name={'Tailwind'}
                            description={'Utility-first CSS framework.'}
                        />
                        <FeaturesCards
                            image={MySql}
                            name={'MySQL'}
                            description={'Relational database management system.'}
                        />
                        <FeaturesCards
                            image={Mongo}
                            name={'MongoDB'}
                            description={'Document-oriented NoSQL database.'}
                        />
                        <FeaturesCards
                            image={Git}
                            name={'Git'}
                            description={'Code collaboration and version control.'}
                        />
                        <FeaturesCards
                            image={Next}
                            name={'Next.js'}
                            description={'React framework for server-side rendering web applications.'}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
