import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Loader from '../../public/Icons/loader.gif';
import Image from 'next/image';

const Contact = ({ toast }) => {
    const [loading, setLoading] = useState(false)
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
            .then(() => {
                formRef.current.reset();
                setLoading(false)
                toast.success("Message sent successfully");
            }, (error) => {
                console.log(error);
            });
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    return (
        <div className='w-[350px] lg:ms-16'>
            <form ref={formRef} onSubmit={handleSubmit} className="bg-neutral-800 px-5 py-4 rounded-md flex flex-col gap-2">
                <div>
                    <label htmlFor="user_email" className="text-white block mb-2">Email</label>
                    <input
                        type="email"
                        onChange={handleChange}
                        className="w-full bg-neutral-700 rounded px-4 py-1 text-white focus:border-black border-2 border-transparent outline-none"
                        name="user_email"
                        id="user_email"
                    />
                </div>
                <div>
                    <label htmlFor="user_name" className="text-white block mb-2">Subject</label>
                    <input
                        type="text"
                        onChange={handleChange}
                        className="w-full bg-neutral-700 rounded px-4 py-1 text-white focus:border-black border-2 border-transparent outline-none"
                        name="user_name"
                        id="user_name"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="text-white block mb-2">Message</label>
                    <textarea onChange={handleChange}
                        className="w-full bg-neutral-700 rounded ps-2 py-1 text-white focus:border-black border-2 border-transparent outline-none"
                        rows={4}
                        name="message"
                        id="message"
                    >
                    </textarea>
                </div>
                <button type="submit" className="flex items-center gap-1 justify-center bg-red-700 hover:bg-red-800 w-full text-white rounded px-4 py-2">
                    {loading ? (
                        <>
                            <Image src={Loader} height={20} width={20} alt='Loading' loading="eager" />
                            <span>Loading...</span>
                        </>
                    ) : (
                        <span>Submit</span>
                    )}
                </button>
            </form>
        </div>
    )
}

export default Contact