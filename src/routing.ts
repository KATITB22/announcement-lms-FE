import React, { LazyExoticComponent } from 'react';

const Page1 = React.lazy(() =>
    import('./pages/Example').then((module) => ({ default: module.Page1 }))
);

const Page2 = React.lazy(() =>
    import('./pages/Example').then((module) => ({ default: module.Page2 }))
);

const Page3 = React.lazy(() =>
    import('./pages/Example').then((module) => ({ default: module.Page3 }))
);

const DefPage = React.lazy(() =>
    import('./pages/Example').then((module) => ({
        default: module.DefaultPage,
    }))
);

const PageNotFound = React.lazy(() =>
    import('./pages/Example').then((module) => ({
        default: module.PageNotFound,
    }))
);

const Loading = React.lazy(() => import('./pages/Loading'));
const HomePage = React.lazy(() => import('./pages/Homepage/Homepage'));

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
        title: 'Default Page',
        path: '/',
        component: DefPage,
    },
    {
        title: 'Homepage',
        path: '/home',
        component: HomePage,
    },
    {
        title: 'Loading',
        path: '/loading',
        component: Loading,
    },
    {
        title: 'Page 1',
        path: '/page1',
        component: Page1,
    },
    {
        title: 'Page 2',
        path: '/page2',
        component: Page2,
    },
    {
        title: 'Page 3',
        path: '/page3',
        component: Page3,
    },
    PageNotFoundRouting,
];
