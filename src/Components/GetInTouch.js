import React from 'react';
import Image from 'next/image';
import Linkedin from '../../public/Icons/linkedin.png';
import GitHub from '../../public/Icons/github.png';
import Email from '../../public/Icons/email.png';
import Location from '../../public/Icons/location.png';
import DownloadCV from './DownloadCV';
import Link from 'next/link';
import { CopyToClipboard } from "react-copy-to-clipboard";

const GetInTouch = ({ toast }) => {

    const handleCopy = () => {
        toast.success("Email copied to clipboard");
    };

    return (
        <main className='bg-black flex flex-col items-center lg:items-start gap-4 text-white mb-6'>
            <div>
                <h4 className='text-5xl lg:text-4xl font-semibold'>Get In Touch</h4>
            </div>
            <div>
                <CopyToClipboard text="ariel.jvaldes20@gmail.com" onCopy={handleCopy}>
                    <div className="flex items-center text-sm gap-3 mb-2 cursor-pointer">
                        <Image src={Email} height={24} width={24} alt="Email" loading='eager' />
                        <p>ariel.jvaldes20@gmail.com</p>
                    </div>
                </CopyToClipboard>
                <div className='flex items-center text-sm gap-3'>
                    <Image src={Location} height={24} width={24} alt='Location' loading='eager' />
                    <p>Buenos Aires, Argentina</p>
                </div>
            </div>
            <DownloadCV className={"px-4 py-2 text-sm rounded-md"} />
            <div className='flex justify-center gap-3'>
                <Link href={'#'} className='transform hover:scale-105'>
                    <Image src={Linkedin} width={35} height={35} alt='Linkedin' />
                </Link>
                <Link href={'https://github.com/ArielValdes00'} target="_blank" className='transform hover:scale-105'>
                    <Image src={GitHub} width={35} height={35} alt='GitHub' />
                </Link>
            </div>
        </main>
    )
}

export default GetInTouch;
