import env from '@/env';
import Logo from '../assets/oskm-logo.svg';

const BASE_URL = `${env.VITE_GHOST_API_URL}/ghost/api/content`;

export const formatDate = (date: string | undefined) =>
    new Date(Date.parse(date!)).toLocaleString();

export const formatUrl = (url: string | null) => {
    if (!url) return Logo;
    const newUrl = env.PROD
        ? url.replace('localhost', env.VITE_IP_ADDRESS)
        : url;
    return newUrl;
};

export const getBaseUrl = () => env.VITE_GHOST_API_URL;
export const getGhostKey = () => env.VITE_GHOST_API_CONTENT_API_KEY;

export const getFetchAllPostUrl = () =>
    `${BASE_URL}/posts?key=${env.VITE_GHOST_API_CONTENT_API_KEY}&include=tags,authors`;

export const getFetchSinglePostUrl = (postId: string | undefined) =>
    `${BASE_URL}/posts/${postId}?key=${env.VITE_GHOST_API_CONTENT_API_KEY}&include=tags`;

export const getFetchAllTags = () =>
    `${BASE_URL}/posts?key=${env.VITE_GHOST_API_CONTENT_API_KEY}&include=tags,authors`;
