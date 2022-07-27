import { getBaseUrl, getGhostKey } from '@/util/util';
import GhostContentAPI from '@tryghost/content-api';

const GhostAPI = new GhostContentAPI({
    url: getBaseUrl(),
    key: getGhostKey(),
    version: 'v5.0',
});

export const fetchPost = async () => {
    let errMessage;
    try {
        const listOfAllPosts = await GhostAPI.posts.browse();
        return [...listOfAllPosts];
    } catch (err: any) {
        errMessage = err.message || 'An error occured from server';
    }
    return errMessage;
};
