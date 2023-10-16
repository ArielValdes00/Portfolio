import '@/styles/globals.css';
import Head from 'next/head';
import { useTranslation } from '@/utils/useTranslation';

export default function App({ Component, pageProps }) {
    const t = useTranslation();

    return (
        <>
            <Head>
                <title>{t.portfolio}</title>
                <link rel="icon" href="/logo-title.png" />
                <meta name="description" content="Welcome to my online portfolio. Explore my web development projects and skills, including JavaScript, React, Next.js, HTML, CSS, Node.js, Express, MySQL, and MongoDB." />
                <meta property="og:title" content="Ariel Valdés' Portfolio - Web Development" />
                <meta property="og:description" content="Welcome to my online portfolio. Explore my web development projects and skills, including JavaScript, React, Next.js, HTML, CSS, Node.js, Express, MySQL, and MongoDB." />
                <meta property="og:image" content="https://res.cloudinary.com/dnczjmsbt/image/upload/v1691437299/bg-portfolio_f0unhu.png" />
                <meta property="og:url" content="https://portfolio-ochre-six-55.vercel.app/" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:site_name" content="Ariel Valdés' Portfolio - Web Development" />
                <meta name="keywords" content="Web development, JavaScript, React, Next.js, HTML, CSS, Node.js, Express, MySQL, MongoDB, projects, skills" />
                <meta name="author" content="Ariel Valdés" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}
