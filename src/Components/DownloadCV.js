import React from 'react'
import Link from 'next/link'

const DownloadCV = ({ className }) => {
    return (
        <Link href={"/pdf/cv.pdf"} target='_blank' download={"cv.pdf"} className={`${className} text-white bg-red-700 rounded-full font-semibold hover:bg-red-800`}>
            <p>Download CV</p>
        </Link>
    )
}

export default DownloadCV