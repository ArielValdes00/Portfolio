import { SiTypescript, SiLaravel, SiBootstrap, SiGit, SiGithub, SiTailwindcss, SiExpress, SiMongodb } from 'react-icons/si';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { DiMysql } from 'react-icons/di';

export const icons = [
    {
        name: 'Git',
        icon: <SiGit size={32} className='text-git' />
    },
    {
        name: 'GitHub',
        icon: <SiGithub size={32} className='text-black' />
    },
    {
        name: 'React',
        icon: <FaReact size={32} className='text-react' />
    },
    {
        name: 'Next.js',
        icon: <TbBrandNextjs size={32} className='text-black' />
    },
    {
        name: 'Typescript',
        icon: <SiTypescript size={32} className='text-typescript' />
    },
    {
        name: 'Bootstrap',
        icon: <SiBootstrap size={32} className='text-violet-600' />
    },
    {
        name: 'Tailwind',
        icon: <SiTailwindcss size={32} className='text-sky-500' />
    },
    {
        name: 'Node.js',
        icon: <FaNodeJs size={32} className='text-node' />
    },
    {
        name: 'Express',
        icon: <SiExpress size={32} className='text-black' />
    },
    {
        name: 'Laravel',
        icon: <SiLaravel size={32} className='text-laravel' />
    },
    {
        name: 'MySQL',
        icon: <DiMysql size={32} className='text-mysql' />
    },
    {
        name: 'MongoDB',
        icon: <SiMongodb size={32} className='text-mongo' />
    },
];
