import React, { FC, ReactNode, useEffect } from 'react';

import { useMySelector } from '../../myCustomHook';
import { useAction } from '../../myCustomHook/useAction';
import { Car } from '../Car/Car';

interface IProps {
    children?: ReactNode
}

const CarsLists: FC<IProps> = () => {
    const { cars  } = useMySelector(state => state.carReducer);
    const { fetchCar } = useAction();

    useEffect(() => {
        fetchCar();
    }, []);

    return (
        <div>
            {!!cars?.length && cars.map(value => <Car key={value.id} car={value}/>)}
        </div>
    );
};

export { CarsLists };
