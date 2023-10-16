import { useRouter } from 'next/router';
import es from '../../public/locales/es';
import en from '../../public/locales/en';

export const useTranslation = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'es' ? es : en;

    return t;
};
