import { DetailPost, Posts } from '@/types/types';
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
        const listOfAllPosts: Posts = await GhostAPI.posts.browse({
            include: 'tags',
        });
        return [...listOfAllPosts];
    } catch (err: any) {
        errMessage = err.message || 'An error occured from server';
    }
    return errMessage;
};

export const fetchSinglePost = async (postId: string) => {
    let errMessage;
    try {
        const detailPost: DetailPost = await GhostAPI.posts.read(
            { id: postId },
            { include: 'tags' }
        );
        return detailPost;
    } catch (err: any) {
        errMessage = err.message || 'An error occured from server';
    }
    return errMessage;
};
