import { useEffect, useRef, useState } from 'react';

import { AxiosResponse } from 'axios';

import { IRes } from '../services';

function useFetching<T>(
    callback: (page?: number, limit?: number) =>IRes<T>,
    deps:unknown = 0,
) {

    const [ response, setResponse] = useState<Promise<AxiosResponse> | unknown>(null);
    const [ data, setData] = useState<T | []>([]);
    const [ isLoading, setIsLoading] = useState<Boolean>(false);
    const [ error, setError] = useState<Error | null>(null);

    useEffect(() => {
        setIsLoading(true);
        callback()
            .then(response => {
                setResponse( response );
                if (Array.isArray(response.data) && Array.isArray(data)) {
                    // @ts-ignore
                    setData(( pre ) => [...pre, ...response.data]);
                }else {
                    setData(response.data);
                }
            })
            .catch((e:Error) => setError(e))
            .finally(() => setIsLoading(false));
    }, [deps]);

    return { data, response, isLoading, error };
}


export function useScrollPagination<T, I extends Element>(
    callback: () =>IRes<T>,
    limit: number,
) {

    const lastElementRef = useRef<I | null>(null);
    const observer = useRef<IntersectionObserver>();
    const [page, setPage] = useState<number>(1);

    const fn = callback.bind(null, page, limit);

    const { data, response, isLoading, error } = useFetching<T>(fn, page);

    useEffect(() => {
        if (isLoading) return;
        if (observer.current) observer.current?.disconnect();

        const callback: IntersectionObserverCallback = (entries, observer) => {
            if (
                entries[0].isIntersecting &&
                // @ts-ignore
                page < Math.ceil(+response?.headers['x-total-count']! / limit) &&
                limit >= 10
            ) {
                setPage((prevPage) => prevPage + 1);
            }
        };

        observer.current = new IntersectionObserver(callback);
        if (lastElementRef.current) {
            observer.current.observe(lastElementRef.current);
        }
    }, [isLoading]);

    return { lastElementRef, data, isLoading, error };
}
