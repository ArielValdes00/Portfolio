import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Loader from '../../public/Icons/loader.gif';
import Image from 'next/image';
import Check from '../../public/Icons/tick.png';
import { motion } from 'framer-motion';

const Contact = () => {
    const [loading, setLoading] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [form, setForm] = useState({
        user_email: "",
        user_name: "",
        message: ""
    })
    const formRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, formRef.current, process.env.NEXT_PUBLIC_PUBLIC_KEY)
            .then((result) => {
                formRef.current.reset();
                setLoading(false)
                setShowModal(true)
                setTimeout(() => {
                    setShowModal(false);
                }, 3000);
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    return (
        <div className='h-screen grid mx-5 items-center'>
            <form ref={formRef} onSubmit={handleSubmit} className="bg-neutral-800 p-6 rounded-md lg:w-2/3 lg:mx-auto">
                <div className='text-white text-center mb-10'>
                    <h2 className='text-5xl font-semibold'>Contact Me</h2>
                </div>
                <div className="mb-4 md:mb-6">
                    <label htmlFor="email" className="text-white block mb-2">Email</label>
                    <input
                        type="email"
                        onChange={handleChange}
                        className="w-full bg-neutral-700 rounded px-4 py-2 text-white focus:border-black border-2 border-transparent outline-none"
                        name="user_email"
                    />
                </div>
                <div className="mb-4 md:mb-6">
                    <label htmlFor="subject" className="text-white block mb-2">Subject</label>
                    <input
                        type="text"
                        onChange={handleChange}
                        className="w-full bg-neutral-700 rounded px-4 py-2 text-white focus:border-black border-2 border-transparent outline-none"
                        name="user_name"
                    />
                </div>
                <div className="mb-4 md:mb-6">
                    <label htmlFor="message" className="text-white block mb-2">Message</label>
                    <textarea onChange={handleChange}
                        className="w-full bg-neutral-700 rounded px-4 py-2 text-white focus:border-black border-2 border-transparent outline-none"
                        rows={5}
                        name="message"
                    >
                    </textarea>
                </div>
                <button type="submit" className="flex items-center gap-1 justify-center bg-red-700 w-full text-white rounded px-4 py-2">
                    {loading ? (
                        <>
                            <Image src={Loader} height={20} width={20} alt='Loading' loading="eager"/>
                            <span>Loading...</span>
                        </>
                    ) : (
                        <span>Submit</span>
                    )}
                </button>
            </form>
            {showModal && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed top-1/2 left-1/2 rounded-lg transform -translate-x-1/2 -translate-y-1/2 bg-black shadow-lg"
                >
                    <div className="p-5 text-center flex flex-col items-center gap-3">
                        <Image src={Check} height={50} width={50} alt='Check' loading="eager"/>
                        <h2 className='text-white text-lg'>¡Message sent successfully!</h2>
                    </div>
                </motion.div>
            )}
        </div>
    )
}

export default Contact