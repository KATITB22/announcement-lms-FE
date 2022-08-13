import { MAX_POST } from '@/types/constant';
import { Posts, DetailPost, RelatedPosts } from '@/types/interface';
import { getBaseUrl, getGhostKey } from '@/util/util';
import GhostContentAPI, { Tags } from '@tryghost/content-api';

const GhostAPI = new GhostContentAPI({
    url: getBaseUrl(),
    key: getGhostKey(),
    version: 'v5.0',
});

export const fetchAllTag = async (): Promise<Tags> => {
    try {
        const listOfAllTags: Tags = await GhostAPI.tags.browse();
        return listOfAllTags;
    } catch (err: any) {
        return err;
    }
};

export const fetchPost = async (page?: number): Promise<Posts> => {
    try {
        const listOfAllPosts: Posts = await GhostAPI.posts.browse({
            include: ['tags', 'authors'],
            filter: 'tag:-defile-unit+tag:-sponsor',
            limit: MAX_POST,
            page: page || 1,
        });
        return listOfAllPosts;
    } catch (err: any) {
        return err;
    }
};

export const fetchAllPost = async (): Promise<Posts> => {
    try {
        const listAllPosts: Posts = await GhostAPI.posts.browse({
            limit: 'all',
            include: ['tags', 'authors'],
        });
        return listAllPosts;
    } catch (err: any) {
        return err;
    }
};

export const fetchAllUnit = async (tag?: string) => {
    let definedTag = 'tag:defile-unit';
    if (tag) {
        definedTag = `${definedTag}+tag:${tag}`;
    }
    try {
        const listAllUnit: Posts = await GhostAPI.posts.browse({
            limit: 'all',
            include: ['tags', 'authors'],
            filter: definedTag,
        });
        return listAllUnit;
    } catch (err: any) {
        return err;
    }
};

export const fetchAllSponsor = async () => {
    try {
        const listAllSponsor: Posts = await GhostAPI.posts.browse({
            limit: 'all',
            include: ['tags', 'authors'],
            filter: 'tag:sponsor',
        });
        return listAllSponsor;
    } catch (err: any) {
        return err;
    }
};

export const fetchSinglePost = async (slug: string) => {
    let data;
    try {
        const detailPost: DetailPost = await GhostAPI.posts.read(
            { slug },
            { include: ['tags', 'authors'] }
        );
        let relatedPosts = null;
        if (detailPost.tags?.length === 0) {
            data = { detailPost };
        } else {
            const tags = detailPost.tags?.map((tag) =>
                tag.name?.replace(' ', '-')
            );
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
    try {
        const filteredPosts: Posts = await GhostAPI.posts.browse({
            include: ['tags', 'authors'],
            filter: `tag:${tag}`,
        });
        return filteredPosts;
    } catch (err: any) {
        return err;
    }
};
