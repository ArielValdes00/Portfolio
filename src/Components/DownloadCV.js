import React from 'react'
import Link from 'next/link'

const DownloadCV = ({ className }) => {
    return (
        <Link href={"/pdf/cv.pdf"} download={"cv.pdf"} className="lg:flex justify-end">
            <button className={`${className} text-white bg-red-700 rounded-full font-semibold hover:bg-red-800`}>Download CV</button>
        </Link>
    )
}

export default DownloadCV