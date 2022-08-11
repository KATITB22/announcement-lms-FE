import React, { LazyExoticComponent } from 'react';
import { Pagination, PostOrPage, PostsOrPages } from '@tryghost/content-api';
import { Element } from 'parse5/dist/tree-adapters/default';
import { URLSearchParamsInit } from 'react-router-dom';
import { ErrorTypes } from './enum';

interface setUseSearchParams {
    // eslint-disable-next-line no-unused-vars
    (
        nextInit: URLSearchParamsInit,
        navigateOptions?:
            | {
                  replace?: boolean | undefined;
                  state?: any;
              }
            | undefined
    ): void;
}
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

export interface DetailpageProps extends BaseProps {}

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
    initParams: URLSearchParams;
    setParams: setUseSearchParams;
}

export interface ListPostProps {
    page: number;
}

export interface PaginationProps extends Omit<BaseProps, 'children'> {
    pagination: Pagination;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

export interface FetchingState {
    data: any;
    isLoading: boolean;
    error: boolean;
    message: string;
}

export interface RumpunProps {
    id: number;
    name: string;
}

export interface Posts extends PostsOrPages {}

export interface RelatedPosts extends Omit<PostsOrPages, 'meta'> {}

export interface DetailPost extends PostOrPage {}

export interface ElementExtended extends Element {
    childNodes: ElementExtended[];
    value?: string;
}

export interface CarouselProps extends BaseProps {
    items: string[];
}

export interface BlogPost extends PostOrPage {
    size?: string;
}

export interface PageRouting {
    title: string;
    path: string;
    component: LazyExoticComponent<any>;
}

export interface ErrorProps {
    message?: string;
    type: ErrorTypes;
}

export interface figureAttr {
    alt?: string;
    class?: string;
    height?: string;
    loading?: string;
    sizes?: string;
    src?: string | undefined;
    srcset?: string;
    width?: string;
    playsinline?: string;
    poster?: string;
    preload?: string;
    style?: string;
    allow?: string;
    allowFullScreen?: string;
    frameBorder?: string;
    title?: string;
}
