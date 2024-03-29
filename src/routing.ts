import React from 'react';
import { PageRouting } from './types/interface';

const HomePage = React.lazy(() => import('./pages/Homepage/Homepage'));
const AboutPage = React.lazy(() => import('./pages/About/About'));
const PartnerPage = React.lazy(() => import('./pages/Partnerpage/PartnerPage'));
const PageNotFound = React.lazy(() => import('./pages/Error/PageNotFound'));
const SearchPage = React.lazy(() => import('./pages/Searchpage/Searchpage'));
const DetailPage = React.lazy(() => import('./pages/Detailpage/Detailpage'));
// const LoadingPage = React.lazy(() => import('./pages/Loading')); // comment in jangan diapus, biarin aja biar kalo mau ubah2 gampang
const TreasureHuntPage = React.lazy(
    () => import('./pages/TreasureHuntPage/TreasureHuntPage')
);
const TreasureHuntPageUnit = React.lazy(
    () => import('./pages/TreasureHuntPage/TreasureHuntPageUnit')
);
const CataloguePage = React.lazy(() => import('./pages/Catalogue/Catalogue'));

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
        title: 'Detail Post',
        path: '/post/:postId',
        component: DetailPage,
        props: { isForUnit: false, fromPost: true },
    },
    {
        title: 'Defile Unit',
        path: '/defile',
        component: TreasureHuntPage,
    },
    {
        title: 'Detail Unit',
        path: '/defile/:unitId/:postId',
        component: DetailPage,
        props: { isForUnit: true, fromPost: false },
    },
    {
        title: 'Treasure Hunt Unit',
        path: '/defile/:unitId',
        component: TreasureHuntPageUnit,
    },
    {
        title: 'Catalogue',
        path: '/catalogue',
        component: CataloguePage,
    },
    // {
    //     title: 'Loading',
    //     path: '/loading',
    //     component: LoadingPage,
    // },
    PageNotFoundRouting,
];
