import React, { FC, memo, ReactNode } from 'react';

interface IProps {
    children?: ReactNode
    count: number
}

const TestUseMemo: FC<IProps> = memo( ({ count }) =>
    (
        <div>
            <h1>COUNT:{count}</h1>
        </div>
    ));

export { TestUseMemo };
