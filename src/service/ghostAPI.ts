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

export const fetchSinglePost = async (postId: string) => {
    let errMessage;
    try {
        const detailPost: DetailPost = await GhostAPI.posts.read(
            { id: postId },
            { include: ['tags', 'authors'] }
        );
        let relatedPosts = null;
        const tags = detailPost.tags?.map((tag) => tag.name);
        console.log('tags', tags);
        let rawRelatedPosts: RelatedPosts = await GhostAPI.posts.browse({
            include: ['tags', 'authors'],
            filter: `tag:[${tags}]`,
        });
        relatedPosts = rawRelatedPosts.filter(
            (post) => post.id !== detailPost.id
        );

        // TODO: RELATED POST WHEN PROMISE IS FAILED

        // console.log('final', { detailPost, relatedPosts});
        return { detailPost, relatedPosts };
    } catch (err: any) {
        errMessage = err.message || 'An error occured from server';
    }
    return errMessage;
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
