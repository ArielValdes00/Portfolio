import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Funko</title>
                <link rel="icon" href="/logo-title.png" />
                <meta name="description" content="Welcome to Funko Pop Store! Explore our wide selection of Funko Pop figures. From your favorite characters to limited editions, we have it all. Enjoy hassle-free shopping with our cart, secure payment methods including PayPal, and a user-friendly dashboard for easy order tracking." />
                <meta property="og:title" content="Funko Pop Store - Online Funko Pop Figure Shop" />
                <meta property="og:description" content="Welcome to Funko Pop Store! Explore our wide selection of Funko Pop figures. From your favorite characters to limited editions, we have it all. Enjoy hassle-free shopping with our cart, secure payment methods including PayPal, and a user-friendly dashboard for easy order tracking." />
                <meta property="og:image" content="https://res.cloudinary.com/dnczjmsbt/image/upload/v1691437299/bg-portfolio_f0unhu.png" />
                <meta property="og:url" content="https://my-funko-pop-store.com/" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:site_name" content="Funko Pop Store - Online Funko Pop Figure Shop" />
                <meta name="keywords" content="Funko Pop, online store, Funko Pop figures, shopping cart, limited editions, collectibles, authentication, PayPal payment, user-friendly dashboard" />
                <meta name="author" content="Ariel Valdés" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}
