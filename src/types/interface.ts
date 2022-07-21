import React from 'react';

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

export interface FetchingState<T> {
    data: T[];
    isLoading: boolean;
    error: boolean;
    message: string;
}
