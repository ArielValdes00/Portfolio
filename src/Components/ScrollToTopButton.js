import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTopButton() {
    const [isTop, setIsTop] = useState(true);

    const scrollCheck = () => {

        if (window.scrollY >= 2300) {
            setIsTop(false);
        } else {
            setIsTop(true);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollCheck);
        return () => {
            window.removeEventListener('scroll', scrollCheck);
        };
    }, []);

    return !isTop &&
        <button
            className="fixed bottom-2 lg:bottom-5 lg:right-10 p-2 z-10 animate-bounce rounded-full bg-neutral-300 justify-center items-center"
            onClick={scrollToTop}
        >
            <FaArrowUp size={20} />
        </button>;
}
