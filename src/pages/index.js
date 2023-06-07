import React from 'react'
import NavBar from '@/Components/NavBar'

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen">
            <NavBar />
            <div className="flex flex-col justify-center items-center flex-grow z-10">
                <div className="text-white text-center font-semibold grid gap-5">
                    <h5 className="text-2xl">Hello, I'm</h5>
                    <h1 className="text-8xl mb-2">Ariel <span className="text-red-600">Valdés</span></h1>
                    <h3 className="text-4xl text-red-600">Full Stack <span className='text-white'>Developer</span></h3>
                </div>
            </div>
        </main>
    )
}
