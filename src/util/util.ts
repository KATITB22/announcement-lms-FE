import env from '@/env';
import Logo from '../assets/oskm-logo.svg';

export const formatDate = (date: string | undefined) =>
    new Date(Date.parse(date!)).toLocaleString();

export const formatUrl = (url: string | null) => {
    if (!url) return Logo;
    const newUrl = url?.replace('localhost', env.VITE_IP_ADDRESS);
    return newUrl;
};
