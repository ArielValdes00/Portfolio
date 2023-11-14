import React from 'react';
import Image from 'next/image';
import Linkedin from '../../public/Icons/linkedin.png';
import DownloadCV from './DownloadCV';
import Link from 'next/link';
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useTranslation } from '@/utils/useTranslation.js';
import { SiGithub } from 'react-icons/si';
import { TfiLocationPin } from 'react-icons/tfi';
import { AiOutlineMail } from 'react-icons/ai';

const GetInTouch = ({ toast }) => {
    const t = useTranslation();

    const handleCopy = () => {
        toast.success("Email copied to clipboard");
    };

    return (
        <main className='bg-black flex flex-col items-center lg:items-start gap-4 text-white mb-6'>
            <div>
                <h4 className='text-[40px] lg:text-4xl xl:text-5xl font-semibold'>{t.getInTouch}</h4>
            </div>
            <div>
                <CopyToClipboard text="ariel.jvaldes20@gmail.com" onCopy={handleCopy}>
                    <div className="flex items-center text-sm xl:text-[16px] gap-3 mb-2 cursor-pointer">
                        <AiOutlineMail size={20} />
                        <p className='hover:underline'>ariel.jvaldes20@gmail.com</p>
                    </div>
                </CopyToClipboard>
                <div className='flex items-center text-sm gap-3 xl:text-[16px]'>
                    <TfiLocationPin size={20} />
                    <p>Buenos Aires, Argentina</p>
                </div>
            </div>
            <DownloadCV className={"px-4 py-2 text-sm rounded-md font-normal"} />
            <div className='flex justify-center gap-3'>
                <Link href={'https://www.linkedin.com/in/arielvaldes/'} target="_blank" className='transform hover:scale-105'>
                    <Image src={Linkedin} width={35} height={35} alt='Linkedin' />
                </Link>
                <Link href={'https://github.com/ArielValdes00'} target="_blank" className='transform hover:scale-105'>
                    <SiGithub size={35} className='text-gray-100' />
                </Link>
            </div>
        </main>
    )
}

export default GetInTouch;
