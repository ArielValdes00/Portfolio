import React from 'react'
import Link from 'next/link'

const DownloadCV = () => {
    return (
        <Link href={"/pdf/cv.pdf"} download={"cv.pdf"} className="lg:flex justify-end">
            <button className="px-4 py-2 lg:text-white text-gray-200 lg:bg-red-700 rounded-full font-semibold">Download CV</button>
        </Link>
    )
}

export default DownloadCV