import React, { FC, memo, ReactNode, SetStateAction, useCallback } from 'react';

interface IProps {
    children?: ReactNode
    setData: React.Dispatch<SetStateAction<number>>
    data: number
}

const TestUseCallback: FC<IProps> = memo(({ data, setData }) => {
    let i;
    for ( i = 0; i < 1000000000; i++ ) {}

    return (
        <div>
            <h2>Callback Decrement {data}</h2>
        </div>
    );
});

export { TestUseCallback };
