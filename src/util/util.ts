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

export const getAttr = (attrArr: any) => {
    const attrObj: any = {};
    attrArr.forEach((element: any) => {
        attrObj[element.name] = element.value;
    });
    return attrObj;
};

export const moduloSetup = (num: number, mod: number) => {
    if (num % mod === 0) return mod;
    return num % mod;
};

export const setupFirstPage = (currentPage: number, pagination: number) => {
    if (currentPage % pagination === 1) return currentPage;
    return currentPage - moduloSetup(currentPage, pagination) + 1;
};

export const generateArray = (start: number, end: number) =>
    [...new Array(end - start)]
        .map((_, index) => start + index)
        .filter((index) => index > 0);
