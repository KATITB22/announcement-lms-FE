import React, { LazyExoticComponent } from 'react';

const Loading = React.lazy(() => import('./pages/Loading'));
const HomePage = React.lazy(() => import('./pages/Homepage/Homepage'));
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
        title: 'Loading',
        path: '/loading',
        component: Loading,
    },
    PageNotFoundRouting,
];
