import React from 'react';
import { ErrorProps } from '@/types/interface';
import { ErrorTypes } from '@/types/enum';
import ServerError from './Error/ServerError';
import EmptyPost from './Error/EmptyPost';
import PageNotFound from './Error/PageNotFound';
import PostNotFound from './Error/PostNotFound';
import SearchNotFound from './Error/SearchNotFound';

const ErrorPage: React.FC<ErrorProps> = ({ type }) => {
    if (type === ErrorTypes.EmptyPost) {
        return <EmptyPost />;
    }

    if (type === ErrorTypes.PageNotFound) {
        return <PageNotFound />;
    }

    if (type === ErrorTypes.PostNotFound) {
        return <PostNotFound />;
    }

    if (type === ErrorTypes.SearchNotFound) {
        return <SearchNotFound />;
    }

    return <ServerError />;
};

export default ErrorPage;
