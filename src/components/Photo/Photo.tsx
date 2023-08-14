import React, { FC, ReactNode } from 'react';

import { IPhoto } from '../../interfaces';

interface IProps {
    children?: ReactNode
    photo: IPhoto
}

const Photo: FC<IProps> = ({ photo }) => {

    const { url, title } = photo;

    return (
        <div>
            <img src={url} alt={title} style={{ width: '100%', height: '50vh' }}/>
        </div>
    );
};

export { Photo };
