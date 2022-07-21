import React, { LazyExoticComponent } from 'react';

const HomePage = React.lazy(() => import('./pages/Homepage/Homepage'));
const AboutPage = React.lazy(() => import('./pages/About/About'));
const PageNotFound = React.lazy(() => import('./pages/PageNotFound'));
const SearchPage = React.lazy(() => import('./pages/Searchpage/Searchpage'));
const Test = React.lazy(() => import('./pages/Test'));
const DetailPage = React.lazy(()=> import('./pages/Detailpage/Detailpage'));

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
        title: 'Search',
        path: '/search',
        component: SearchPage,
    },
    {
        title: 'Detail Post',
        path: '/post',
        component: DetailPage
    },
    {
        title: 'test',
        path: '/test',
        component: Test,
    },
    PageNotFoundRouting,
];
