import React, { FC, ReactNode } from 'react';

interface IProps {
    children?: ReactNode
}

const MyLayout: FC<IProps> = () => {
    return (
        <div>
            hello all
        </div>
    );
};

export { MyLayout };
