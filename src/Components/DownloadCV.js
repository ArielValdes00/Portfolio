import React from 'react';
import Link from 'next/link';
import { useTranslation } from '@/utils/useTranslation';

const DownloadCV = ({ className }) => {
    const t = useTranslation();

    return (
        <Link href={"/pdf/cv.pdf"}
            target='_blank'
            download={"cv.pdf"}
            className={`${className} text-white bg-red-700 rounded-full font-semibold hover:bg-red-800`}>
            <p>{t.download}</p>
        </Link>
    )
}

export default DownloadCV