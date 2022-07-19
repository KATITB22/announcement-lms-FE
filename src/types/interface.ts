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

export interface SpinnerProps {
    message?: string;
}
