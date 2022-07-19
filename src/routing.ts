import React, { LazyExoticComponent } from 'react';

const Loading = React.lazy(() => import('./pages/Loading'));
const HomePage = React.lazy(() => import('./pages/Homepage/Homepage'));
const AboutPage = React.lazy(() => import('./pages/About/About'));
const PageNotFound = React.lazy(() => import('./pages/PageNotFound'));
interface PageRouting {
    title: string;
    path: string;
    component: LazyExoticComponent<any>;
}

const PageNotFoundRouting: PageRouting = {
    title: 'Page Not Found',
    path: '*',
    component: PageNotFound,
};

export const Routing: PageRouting[] = [
    {
        title: 'Homepage',
        path: '/',
        component: HomePage,
    },
    {
        title: 'About',
        path: '/about',
        component: AboutPage,
    },
    {
        title: 'Loading',
        path: '/loading',
        component: Loading,
    },
    PageNotFoundRouting,
];
