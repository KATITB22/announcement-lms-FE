import React from 'react';
import axios from 'axios';
import { FetchingState } from '../types/interface';

const useFetch = (url: string) => {
    let abortController = new AbortController();

    const [fetchedData, setFetchedData] = React.useState<FetchingState>({
        data: {},
        isLoading: true,
        error: false,
        message: '',
    });

    const fetchData = React.useCallback(async () => {
        try {
            const response = await axios.get(url, {
                signal: abortController.signal,
            });
            const data = await response.data;
            if (data) {
                setFetchedData({
                    data: data.results || data,
                    isLoading: false,
                    error: false,
                    message: '',
                });
            }
        } catch (err: any) {
            if (axios.isCancel(err)) {
                setFetchedData({
                    data: {},
                    isLoading: false,
                    error: true,
                    message: err.message || 'Fetching cancelled',
                });
            } else {
                setFetchedData({
                    data: {},
                    isLoading: false,
                    error: true,
                    message: err.message || 'An error occured from server',
                });
            }
        }
    }, [url]);

    React.useEffect(() => {
        fetchData();
        return () => {
            abortController.abort();
            abortController = new AbortController();
        };
    }, [url, fetchData]);

    const { data, isLoading, error, message } = fetchedData;
    return { data, isLoading, error, message };
};

export default useFetch;
