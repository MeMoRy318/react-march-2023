import React, { useEffect, useRef, MutableRefObject } from 'react';

interface PaginationResult<T extends Element> {

    lastElementRef: MutableRefObject<T | null>
}

const usePagination = <T extends Element>(
    isLoading: boolean,
    totalPage: number,
    setPage: React.Dispatch<React.SetStateAction<number>>,
    page: number,
): PaginationResult<T> => {

    const lastElementRef = useRef<T | null>(null);
    const observer = useRef<IntersectionObserver | null>(null);
    // const [page, setPage] = useState(1);

    useEffect(() => {
        if (isLoading) return;
        if (observer.current) observer.current?.disconnect();

        const callback: IntersectionObserverCallback = (
            entries: IntersectionObserverEntry[],
            observer: IntersectionObserver,
        ) => {
            if (entries[0].isIntersecting && page < Math.ceil(totalPage / 10)) {
                setPage((prevPage) => prevPage + 1);
            }

        };

        observer.current = new IntersectionObserver(callback);


        if (lastElementRef.current) {
            observer.current.observe(lastElementRef.current);
        }

    }, [isLoading]);

    return { lastElementRef };
};

export { usePagination };
