import React, { useState } from 'react'

const Contact = () => {
    const [form, setForm] = useState({

    })
    const handleSubmit = (e) => {
        e.preventDeafult()
    }
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    return (
        <div className='h-screen grid items-center'>
            <div className='text-white text-center'>
                <h2 className='text-5xl font-semibold'>Contact</h2>
            </div>
            <form onSubmit={handleSubmit} className="bg-neutral-800 p-6 rounded-md lg:w-2/3 lg:mx-auto">
                <div className="mb-6">
                    <label htmlFor="email" className="text-white block mb-2">Email</label>
                    <input type="text" onChange={handleChange} className="w-full bg-neutral-700 rounded px-4 py-2 text-white focus:border-black border-2 border-transparent outline-none" />
                </div>
                <div className="mb-6">
                    <label htmlFor="subject" className="text-white block mb-2">Subject</label>
                    <input type="text" onChange={handleChange} className="w-full bg-neutral-700 rounded px-4 py-2 text-white focus:border-black border-2 border-transparent outline-none" />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="text-white block mb-2">Message</label>
                    <textarea onChange={handleChange} className="w-full bg-neutral-700 rounded px-4 py-2 text-white focus:border-black border-2 border-transparent outline-none" rows={4}></textarea>
                </div>
                <button type="submit" className="bg-red-700 w-full text-white rounded px-4 py-2">Submit</button>
            </form>
        </div>
    )
}

export default Contact