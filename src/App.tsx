import React, { useCallback, useState } from 'react';

import { TestUseCallback, TestUseMemo } from './componets';

const App = () => {
    const [count, setCount] = useState<number>(1);
    const [data, setData] = useState<number>(1);

    const result = useCallback(() => setData, []);
    const decrement = async ():Promise<void> => {
        setCount(prevState => prevState + 1);
    };

    const increment = async ():Promise<void> => {
        setCount(prevState => prevState - 1);
    };

    const callbackDecrement = async ():Promise<void> => {
        setData(prevState => prevState + 1);
    };

    return (
        <div>
            <TestUseMemo count={count} />
            <TestUseCallback setData={result} data={data}/>
            <button onClick={decrement}>decrement</button>
            <button onClick={increment}>increment</button>
            <button onClick={callbackDecrement}>Callback Decrement</button>
        </div>
    );
};

export { App };
