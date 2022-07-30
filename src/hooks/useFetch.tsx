import React from 'react';
import { FetchingState } from '../types/interface';

const useFetch = (url: Promise<any>, page?: number) => {
    const [fetchedData, setFetchedData] = React.useState<FetchingState>({
        data: {},
        isLoading: true,
        error: false,
        message: '',
    });

    const fetchData = React.useCallback(async () => {
        try {
            const data = await url;
            if (data) {
                setFetchedData({
                    data: data.results || data,
                    isLoading: false,
                    error: false,
                    message: '',
                });
            }
        } catch (err: any) {
            setFetchedData({
                data: {},
                isLoading: false,
                error: true,
                message: err.message || 'An error occured from server',
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
