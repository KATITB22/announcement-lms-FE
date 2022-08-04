import React from 'react';
import { Pagination, PostOrPage, PostsOrPages } from '@tryghost/content-api';

export interface BaseProps {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
}

export interface HomepageProps extends BaseProps {
    text: string;
}

export interface AboutProps {
    toggle(): void;
}

export interface DetailpageProps extends BaseProps {
    id: string;
}

export interface SpinnerProps {
    message?: string;
}

export interface NavBarProps {
    children: React.ReactNode;
    to: string;
}

export interface FilterCategoryProps extends BaseProps {
    item: PostOrPage[];
    originalItem: PostOrPage[];
    setItem: React.Dispatch<React.SetStateAction<PostOrPage[]>>;
}

export interface ListPostProps {
    page: number;
}

export interface PaginationProps extends Omit<BaseProps, 'children'> {
    pagination: Pagination;
    currentPage: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

export interface FetchingState {
    data: any;
    isLoading: boolean;
    error: boolean;
    message: string;
}

export interface Posts extends PostsOrPages {}

export interface RelatedPosts extends Omit<PostsOrPages, 'meta'> {}

export interface DetailPost extends PostOrPage {}

export interface NodeExtended extends ChildNode {
    attrs: Record<string, string>;
    rawAttrs: string;
    tagName: string;
    rawTagName: string;
    text: string;
    childNodes: NodeListOf<NodeExtended>;
    outerHTML: string;
}

export interface BlogPost extends PostOrPage {
    size?: string;
}
