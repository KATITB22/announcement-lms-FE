import React from 'react';
import { FetchingState } from '@/types/interface';

const useFetch = (url: Promise<any>, page?: number) => {
    const [fetchedData, setFetchedData] = React.useState<FetchingState>({
        data: {},
        isLoading: true,
        error: false,
        message: '',
    });

    const fetchData = React.useCallback(async () => {
        const data = await url;
        if (data instanceof Error) {
            setFetchedData({
                data: {},
                isLoading: false,
                error: true,
                message: data.message || 'An error occured from server',
            });
        } else {
            setFetchedData({
                data: data.results || data,
                isLoading: false,
                error: false,
                message: '',
            });
        }
    }, [url]);

    React.useEffect(() => {
        fetchData();
    }, [page]);

    const { data, isLoading, error, message } = fetchedData;
    return { data, isLoading, error, message };
};

export default useFetch;
