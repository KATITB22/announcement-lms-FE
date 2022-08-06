import env from '@/env';
import Logo from '@/assets/images/oskm-logo.svg';

const BASE_URL = `${env.VITE_GHOST_API_URL}/ghost/api/content`;

export const formatDate = (date: string | undefined) =>
    new Date(Date.parse(date!)).toLocaleString();

export const formatUrl = (url: string | null) => {
    if (!url) return Logo;
    return url;
};

export const getBaseUrl = () => env.VITE_GHOST_API_URL;
export const getGhostKey = () => env.VITE_GHOST_API_CONTENT_API_KEY;

export const getFetchAllPostUrl = () =>
    `${BASE_URL}/posts?key=${env.VITE_GHOST_API_CONTENT_API_KEY}&include=tags,authors`;

export const getFetchSinglePostUrl = (postId: string | undefined) =>
    `${BASE_URL}/posts/${postId}?key=${env.VITE_GHOST_API_CONTENT_API_KEY}&include=tags`;

export const getFetchAllTags = () =>
    `${BASE_URL}/posts?key=${env.VITE_GHOST_API_CONTENT_API_KEY}&include=tags,authors`;

export const trimString = (desc: string | undefined, maxLength: number) => {
    if (!desc) return '';
    return desc.length > maxLength
        ? `${desc.substring(0, maxLength)}...`
        : desc;
};
