import DownloadCV from './DownloadCV';
import Menu from '../../public/Icons/menu.png'
import Close from '../../public/Icons/close.png'
import Image from "next/image";
import { useEffect } from "react";

const NavBar = ({ showMenu, setShowMenu, handleScrollAboutMe, handleScrollFeatures, handleScrollProjects, handleScrollContacts }) => {

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }

    useEffect(() => {
        if (showMenu) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
    }, [showMenu]);

    const closeMenuOnResize = () => {
        if (window.innerWidth > 1024) {
            setShowMenu(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', closeMenuOnResize);

        return () => {
            window.removeEventListener('resize', closeMenuOnResize);
        };
    }, []);

    return (
        <header className="grid grid-cols-4 fixed w-full items-center lg:px-5 p-3 z-40 bg-black">
            <div className="font-extrabold">
                <p className="text-white text-4xl mx-4">
                    A<span className="text-red-700">V</span>
                </p>
            </div>
            <div className="text-white font-semibold justify-self-end col-span-3">
                <div className="lg:hidden cursor-pointer me-2">
                    <Image
                        src={showMenu ? Close : Menu}
                        height={30}
                        width={30}
                        alt="menu"
                        onClick={handleShowMenu}
                    />
                </div>
                <ul
                    className={`${showMenu
                            ? "block absolute bg-neutral-800 left-0 top-[63px] h-screen w-full pb-20 menu-open"
                            : "hidden"
                        } flex flex-col justify-center items-center text-white gap-10 text-4xl lg:text-lg lg:flex lg:flex-row`}
                >
                    <li
                        onClick={handleScrollAboutMe}
                        className="lg:hover:text-red-700 cursor-pointer transition duration-200"
                    >
                        About Me
                    </li>
                    <li
                        onClick={handleScrollFeatures}
                        className="lg:hover:text-red-700 cursor-pointer transition duration-200"
                    >
                        Features
                    </li>
                    <li
                        onClick={handleScrollProjects}
                        className="lg:hover:text-red-700 cursor-pointer transition duration-200"
                    >
                        Projects
                    </li>
                    <li
                        onClick={handleScrollContacts}
                        className="lg:hover:text-red-700 cursor-pointer transition duration-200"
                    >
                        Contact
                    </li>
                    <DownloadCV />
                </ul>
            </div>
        </header>
    )
}

export default NavBar