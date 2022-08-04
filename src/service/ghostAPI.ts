import { MAX_POST } from '@/types/constant';
import { Posts, DetailPost, RelatedPosts } from '@/types/interface';
import { getBaseUrl, getGhostKey } from '@/util/util';
import GhostContentAPI from '@tryghost/content-api';

const GhostAPI = new GhostContentAPI({
    url: getBaseUrl(),
    key: getGhostKey(),
    version: 'v5.0',
});

export const fetchPost = async (page?: number) => {
    let errMessage;
    try {
        const listOfAllPosts: Posts = await GhostAPI.posts.browse({
            include: ['tags', 'authors'],
            limit: MAX_POST,
            page: page || 1,
        });
        return listOfAllPosts;
    } catch (err: any) {
        errMessage = err.message || 'An error occured from server';
    }
    return errMessage;
};

export const fetchAllPost = async () => {
    let errMessage;
    try {
        const listAllPosts: Posts = await GhostAPI.posts.browse({
            include: ['tags', 'authors'],
        });
        return listAllPosts;
    } catch (err: any) {
        errMessage = err.message || 'An error occured from server';
    }
    return errMessage;
};

export const fetchSinglePost = async (postId: string) => {
    let data;
    try {
        const detailPost: DetailPost = await GhostAPI.posts.read(
            { id: postId },
            { include: ['tags', 'authors'] }
        );
        let relatedPosts = null;
        if (detailPost.tags?.length === 0) {
            data = { detailPost };
        } else {
            const tags = detailPost.tags?.map((tag) => tag.name);
            const rawRelatedPosts: RelatedPosts = await GhostAPI.posts.browse({
                limit: 4,
                include: ['tags', 'authors'],
                filter: `tag:[${tags}]`,
            });
            relatedPosts = rawRelatedPosts.filter(
                (post) => post.id !== detailPost.id
            );
            data = { detailPost, relatedPosts };
        }
        return data;
    } catch (err: any) {
        return err;
    }
};

export const fetchPostsFilterByTag = async (tag: string[]) => {
    let errMessage;
    try {
        const filteredPosts: Posts = await GhostAPI.posts.browse({
            include: ['tags', 'authors'],
            filter: `tag:${tag}`,
        });
        return filteredPosts;
    } catch (err: any) {
        errMessage = err.message || 'An error occured from server';
    }
    return errMessage;
};
