import Link from "next/link";

const NavBar = ({ handleScrollAboutMe, handleScrollFeatures }) => {

    return (
        <header className="grid grid-cols-3 fixed w-full items-center px-5 p-3 z-20 bg-black">
            <div className="font-extrabold">
                <p className="text-white text-4xl mx-4">A<span className="text-red-600">V</span></p>
            </div>
            <div className="text-white font-semibold">
                <ul className="flex justify-around">
                    <li onClick={handleScrollAboutMe} className="mx-4 hover:text-red-600 cursor-pointer transition duration-200">About Me</li>
                    <li onClick={handleScrollFeatures} className="mx-4 hover:text-red-600 cursor-pointer transition duration-200">Features</li>
                    <li className="mx-4 hover:text-red-600 cursor-pointer transition duration-200">Projects</li>
                    <li className="mx-4 hover:text-red-600 cursor-pointer transition duration-200">Contact</li>
                </ul>
            </div>
            <Link href={"/pdf/cv.pdf"} download={"cv.pdf"} className="flex justify-end">
                <button className="px-4 py-2 text-white bg-red-600 rounded-full font-semibold">Download CV</button>
            </Link>
        </header>
    )
}

export default NavBar