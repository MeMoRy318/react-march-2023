import React, { FC, ReactNode, useEffect, useRef } from 'react';

import { Photo } from '../Photo/Photo';
import { useAction } from '../../myCustomHook/useAction';
import { useMySelector, useScrollPagination } from '../../myCustomHook';

interface IProps {
    children?: ReactNode
}

const Photos: FC<IProps> = () => {

    const refObject = useRef<HTMLDivElement>(null);
    const { fetchPhoto, didUnmountPhoto } = useAction();
    const { photos, isLoading } = useMySelector(state => state.photoReducer);
    const page = useScrollPagination(1, 500, isLoading, refObject);

    useEffect(() => {
        fetchPhoto({ _limit: 10, _page: page });
    }, [page]);

    useEffect(() => {
        return () => {
            didUnmountPhoto();
        };
    }, []);

    return (
        <div>
            {!!photos.length && photos.map(value => <Photo key={value.id} photo={value}/>)}
            <div ref={refObject}></div>
        </div>
    );
};

export { Photos };
