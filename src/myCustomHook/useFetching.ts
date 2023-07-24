import { useEffect, useState } from 'react';

import { IRes } from '../services';

type ICallback<T> = () => IRes<T>;

interface IFetching<T> {
    data: T | null
    error: string
    isLoading: boolean
}

export function useFetching<T>(callback: ICallback<T>, deps: unknown[] = []): IFetching<T> {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [data, setData] = useState<T | null>(null);

    useEffect(() => {
        setIsLoading(true);
        callback()
            .then(({ data }) => setData(data))
            .catch((e: Error) => setError(e.message))
            .finally(() => setIsLoading(false));
    }, deps);

    return { data, error, isLoading };
}
