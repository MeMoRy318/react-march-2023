import React, { createContext, FC, ReactNode, useState } from 'react';

import { useFetchingCar } from '../myCustomHook';
import { ICar, IExtendsContext } from '../interfaces';
import { carContextDefaultValue } from '../utility';

const CarContext = createContext<IExtendsContext>(carContextDefaultValue);

interface IPops {
    children: ReactNode
}

const CarContextTSX: FC<IPops> = ({ children }) => {
    const iUseFetchingCar = useFetchingCar();
    const [car, setCar] = useState<ICar | null>(null);

    return (
        <CarContext.Provider value={{ ...iUseFetchingCar, car, setCar }}>
            {children}
        </CarContext.Provider>
    );
};

export { CarContextTSX };


export { CarContext };
