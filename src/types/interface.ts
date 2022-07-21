import React from 'react';

export interface BaseProps {
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

export interface HomepageProps extends BaseProps {
    text: string;
}

export interface DetailpageProps extends BaseProps {
    id: string;
}

export interface SpinnerProps {
    message?: string;
}
