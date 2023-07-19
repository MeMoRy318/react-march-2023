import { useEffect, useState } from 'react';

import { IRes } from '../services';


interface IFetchResult<T> {
    data: T | []
    error: string
    isLoading: boolean
    totalPage: number
}

const useFetching = <T>(callback: IRes<T>, deps?: unknown): IFetchResult<T> => {

    const [data, setData] = useState<T | []>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [totalPage, setTotalPage] = useState<number>(0);

    useEffect(() => {
        setIsLoading(true);
        callback
            .then(response => {
                if (response?.headers['x-total-count']) {
                    setTotalPage(+response?.headers['x-total-count']);
                }
                // @ts-ignore
                setData(prevState => [...prevState, ...response.data ]);
            })
            .catch((e: Error) => setError(e.message))
            .finally(() => setIsLoading(false));
    }, [deps]);

    return { data, error, isLoading, totalPage };
};

export { useFetching };
