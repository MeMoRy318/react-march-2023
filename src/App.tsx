import React, { useState } from 'react';

import { TestUseMemo } from './componets';

const App = () => {
    const [count, setCount] = useState<number>(1);
    const [data, setData] = useState<number>(1);

    const decrement = async ():Promise<void> => {
        setCount(prevState => prevState + 1);
    };

    const increment = async ():Promise<void> => {
        setCount(prevState => prevState - 1);
    };

    const decrementTriggerMemo = async ():Promise<void> => {
        setData(prevState => prevState + 1);
    };

    return (
        <div>
            <TestUseMemo count={count} data={data}/>
            <button onClick={decrement}>decrement</button>
            <button onClick={decrementTriggerMemo}>decrementTriggerMemo</button>
            <button onClick={increment}>increment</button>
        </div>
    );
};

export { App };
