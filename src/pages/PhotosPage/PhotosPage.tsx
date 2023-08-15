import React, { FC, ReactNode } from 'react';

import { Photos } from '../../components';


interface IProps {
    children?: ReactNode
}

const PhotosPage: FC<IProps> = () => {
    return (
        <div>
            <Photos/>
        </div>
    );
};

export default PhotosPage;
