import React, { FC, ReactNode, useEffect } from 'react';

import { Photo } from '../Photo/Photo';
import { useAction } from '../../myCustomHook/useAction';
import { useMySelector } from '../../myCustomHook';

interface IProps {
    children?: ReactNode
}

const Photos: FC<IProps> = () => {

    const { fetchPhoto } = useAction();
    const { photos } = useMySelector(state => state.photoReducer);

    useEffect(() => {
        fetchPhoto({ _limit: 10, _page: 1 });
    }, []);

    return (
        <div>
            {!!photos.length && photos.map(value => <Photo key={value.id} photo={value}/>)}
        </div>
    );
};

export { Photos };
