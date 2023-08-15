import React, { FC, ReactNode } from 'react';

import { useInView } from 'react-intersection-observer';

import { IPhoto } from '../../interfaces';

interface IProps {
    children?: ReactNode
    photo: IPhoto
}

const Photo: FC<IProps> = ({ photo }) => {

    const { url, title } = photo;
    const { inView, ref } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    return (
        <div ref={ref} style={{ width: '100%', height: '50vh' }}>
            {inView ? <img src={url} alt={title} style={{ width: '100%', height: '50vh' }}/>
                :
                <div style={{ width: '100%', height: '50vh', background: 'silver' }}></div> }
        </div>
    );
};

export { Photo };
