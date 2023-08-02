import React, { FC, ReactNode, useMemo } from 'react';

interface IProps {
    children?: ReactNode
    count: number
    data: number
}

const TestUseMemo: FC<IProps> = ({ count, data }) => {

    const result = useMemo<number>(() => {
        let number;
        for (number = 0; number <= 1000000000; number++) {}
        return number;
    }, [data]);

    return (
        <div>
            <h1>COUNT:{count}</h1>
            <h2>RESULT:{result + data}</h2>
        </div>
    );
};

export { TestUseMemo };
