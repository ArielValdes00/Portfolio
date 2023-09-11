import DownloadCV from './DownloadCV';
import Logo from '../../public/logo.png';
import Image from "next/image";
import { useEffect } from "react";

const NavBar = ({ showMenu, setShowMenu, handleScrollAboutMe, handleScrollFeatures, handleScrollProjects, handleScrollContacts }) => {

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
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
            <div>
                <Image src={Logo} height={400} width={400} alt='Ariel Valdés' className='logo' loading='eager' />
            </div>
            <div className="text-white font-semibold justify-self-end col-span-3">
                <div
                    className="menu-icon lg:hidden cursor-pointer me-2 mt-2"
                    onClick={handleShowMenu}
                    tabIndex="0"
                    onKeyDown={(e) => {
                        if(e.key === "Enter") {
                            handleShowMenu();
                        }
                    }}
                >
                    <div className={`menu-line line-1 ${showMenu ? 'line-1-cross' : ''}`}></div>
                    <div className={`menu-line line-2 ${showMenu ? 'line-2-hidden' : ''}`}></div>
                    <div className={`menu-line line-3 ${showMenu ? 'line-3-cross' : ''}`}></div>
                </div>
                <ul
                    role="navigation"
                    aria-label="Menú de navegación"
                    className={`${showMenu
                        ? "block absolute bg-neutral-800 left-0 top-[63px] h-screen w-full pb-20 menu-open"
                        : "hidden"
                        } flex flex-col justify-center items-center text-white gap-16 text-4xl lg:text-lg lg:flex lg:flex-row`}
                >
                    <li
                        onClick={handleScrollAboutMe}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleScrollAboutMe();
                            }
                        }}
                        className="lg:hover:text-red-700 cursor-pointer transition duration-200"
                        tabIndex="0"
                    >
                        About Me
                    </li>
                    <li
                        onClick={handleScrollFeatures}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleScrollFeatures();
                            }
                        }}
                        className="lg:hover:text-red-700 cursor-pointer transition duration-200"
                        tabIndex="0"
                    >
                        Features
                    </li>
                    <li
                        onClick={handleScrollProjects}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleScrollProjects();
                            }
                        }}
                        className="lg:hover:text-red-700 cursor-pointer transition duration-200"
                        tabIndex="0"
                    >
                        Projects
                    </li>
                    <li
                        onClick={handleScrollContacts}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleScrollContacts();
                            }
                        }}
                        className="lg:hover:text-red-700 cursor-pointer transition duration-200"
                        tabIndex="0"
                    >
                        Contact
                    </li>
                    <DownloadCV
                        className={"px-5 py-3 lg:px-4 lg:py-2"}
                        tabIndex="0"
                    />
                </ul>
            </div>

        </header>
    )
}

export default NavBar