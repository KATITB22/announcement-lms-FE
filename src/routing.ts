import React, { LazyExoticComponent } from 'react';

const HomePage = React.lazy(() => import('./pages/Homepage/Homepage'));
const AboutPage = React.lazy(() => import('./pages/About/About'));
const PartnerPage = React.lazy(() => import('./pages/Partnerpage/PartnerPage'));
const PageNotFound = React.lazy(() => import('./pages/PageNotFound'));
const SearchPage = React.lazy(() => import('./pages/Searchpage/Searchpage'));
const Loading = React.lazy(() => import('./pages/Loading'));
const Test = React.lazy(() => import('./pages/Test'));

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
    {
        title: 'Partner',
        path: '/partner',
        component: PartnerPage,
    },
    {
        title: 'Search',
        path: '/search',
        component: SearchPage,
    },
    {
        title: 'test',
        path: '/test',
        component: Test,
    },
    PageNotFoundRouting,
];
