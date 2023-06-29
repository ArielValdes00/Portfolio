import React from 'react'
import Image from 'next/image'
import Linkedin from '../../public/Icons/linkedin.png'
import GitHub from '../../public/Icons/github.png'
import DownloadCV from './DownloadCV'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='bg-black pb-2 mt-7'>
            <div className='flex justify-center gap-5 pt-2'>
                <Link href={'#'}>
                    <Image src={Linkedin} width={30} height={30} alt='Linkedin' />
                </Link>
                <Link href={'https://github.com/ArielValdes00'} target="_blank">
                    <Image src={GitHub} width={30} height={30} alt='GitHub' />
                </Link>
            </div>
            <div className='flex justify-center py-3'>
                <DownloadCV />
            </div>
        </footer>
    )
}

export default Footer