import React, { FC, ReactNode } from 'react';

interface IProps {
    children?: ReactNode
}

const Post: FC<IProps> = () => {
    return (
        <div>
            post
        </div>
    );
};

export { Post };
