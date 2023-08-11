import React from 'react';
import NavBar from '@/Components/NavBar';
import { useRef, useState, useEffect } from 'react';
import Projects from '@/Components/Projects';
import Contact from '@/Components/Contact';
import Home from '@/Components/Home';
import Image from 'next/image';
import AboutMe from '../../public/aboutme-section.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Features from '@/Components/Features';
import Head from 'next/head';
import GetInTouch from '@/Components/GetInTouch';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Index() {
    const sectionAboutMe = useRef(null);
    const sectionFeatures = useRef(null);
    const sectionProjects = useRef(null);
    const sectionContact = useRef(null);
    const [showMenu, setShowMenu] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);

    useEffect(() => {
        AOS.init();
    }, []);

    const handleScrollAboutMe = () => {
        setShowMenu(false);
        AOS.refresh();
        sectionAboutMe.current.scrollIntoView({
            behavior: 'smooth',
        });
    };
    const handleScrollFeatures = () => {
        setShowMenu(false);
        sectionFeatures.current.scrollIntoView({
            behavior: 'smooth',
        });
    };
    const handleScrollProjects = () => {
        setShowMenu(false);
        sectionProjects.current.scrollIntoView({
            behavior: 'smooth',
        });
    };
    const handleScrollContacts = () => {
        setShowMenu(false);
        sectionContact.current.scrollIntoView({
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setShowNavbar(currentScrollPos < 595);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <main className="flex flex-col h-screen ">
                {showNavbar && (
                    <NavBar showMenu={showMenu}
                        setShowMenu={setShowMenu}
                        handleScrollAboutMe={handleScrollAboutMe}
                        handleScrollFeatures={handleScrollFeatures}
                        handleScrollProjects={handleScrollProjects}
                        handleScrollContacts={handleScrollContacts}
                    />
                )}
                <div>
                    <Home />
                </div>
            </main>
            <section className="h-screen grid place-items-center z-50 overflow-hidden" data-aos="fade-right" data-aos-duration="1000" ref={sectionAboutMe}>
                <div className="grid lg:grid-cols-2 items-center text-white mx-5 p-5" >
                    <div className="mx-auto w-2/3 lg:w-full" >
                        <Image src={AboutMe} height={430} width={430} alt="Profile" />
                    </div>
                    <div className="text-center lg:w-[500px] h-full pt-8">
                        <h2 className="text-5xl font-semibold mb-5">About Me</h2>
                        <p className="leading-loose max-w-md  text-gray-200">
                            I'm a self-taught full-stack web developer passionate about creating user-friendly and innovative
                            web applications. With a focus on continuous learning, I stay updated with the latest technologies
                            to deliver tailored solutions that drive results. By combining my front-end and back-end skills,
                            I transform ideas into visually appealing web experiences. Let's collaborate and bring your vision
                            to life with impactful digital solutions.
                        </p>
                    </div>
                </div>
            </section>
            <section className='h-screen grid place-items-center mx-auto' ref={sectionFeatures}>
                <div className='text-neutral-100 text-center px-5'>
                    <div className='mb-10 text-white' data-aos="fade-up" data-aos-delay="50">
                        <h2 className='text-5xl font-semibold'>Features</h2>
                    </div>
                    <Features />
                </div>
            </section>
            <section className='py-3 mt-5 px-5 mb-[140px]' ref={sectionProjects} >
                <Projects />
            </section>
            <section className='h-screen flex flex-col lg:gap-[130px] lg:flex-row justify-center items-center overflow-x-hidden' data-aos="fade-right" data-aos-duration="1000" ref={sectionContact} >
                <GetInTouch toast={toast} />
                <Contact toast={toast} />
            </section>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
                theme="dark"
            />
        </>
    )
}
