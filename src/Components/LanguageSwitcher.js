import { useRouter } from 'next/router';

export default function LanguageSwitcher() {
    const router = useRouter();
    const { locale } = router;

    const switchLanguage = () => {
        const nextLocale = locale === 'en' ? 'es' : 'en';
        router.push(router.pathname, router.asPath, { locale: nextLocale });
    };

    return (
        <button onClick={switchLanguage} className='text-xl font-normal mb-1'>
            {locale === 'es' ? '🇪🇸' : '🇬🇧'}
        </button>
    );
}
