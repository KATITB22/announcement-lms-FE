import React from 'react';
import { PostOrPage, PostsOrPages } from '@tryghost/content-api';

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
export interface FetchingState {
    data: any;
    isLoading: boolean;
    error: boolean;
    message: string;
}

export interface Posts extends PostsOrPages {}

export interface DetailPost extends PostOrPage {}

export interface NodeExtended extends ChildNode {
    attrs: Record<string, string>;
    rawAttrs: string;
    tagName: string;
    text: string;
    childNodes: NodeListOf<NodeExtended>;
    outerHTML: string;
}
