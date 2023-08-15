import { RefObject, useEffect, useRef, useState } from 'react';

const useScrollPagination = ( currentPage: number, totalPage: number, isLoading: boolean, lestElement: RefObject<HTMLElement> ): number => {

    const [page, setPage] = useState<number>(currentPage);
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {

        if (isLoading) return;
        if (observer.current) observer.current?.disconnect();

        const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
            if (entries[0].isIntersecting && page < totalPage) {
                setPage(prevState => prevState + 1);
            }
        };

        if (lestElement.current) {
            observer.current = new IntersectionObserver(callback);
            observer.current?.observe(lestElement.current);
        }

        return () => {
            if (observer.current) observer.current.disconnect();
        };

    }, [isLoading]);

    return page;
};

export { useScrollPagination };
