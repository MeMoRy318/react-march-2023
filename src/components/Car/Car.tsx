import React, { FC, ReactNode } from 'react';

import { ICar } from '../../interface';
import { useAction } from '../../myCustomHook/useAction';

interface IProps {
    children?: ReactNode
    car: ICar
}

const Car: FC<IProps> = ({ car }) => {
    const { deleteCar, setCar } = useAction();
    const { id, year, brand, price } = car;


    const carDelete = async (): Promise<void> => {
        if (id) deleteCar(id);
    };

    const carUpdate = async ():Promise<void> => {
        setCar(car);
    };

    return (
        <div>
            <ul>
                <li><strong>ID:</strong> {id} </li>
                <li><strong>BRAND:</strong> {brand} </li>
                <li><strong>PRICE:</strong> {price} </li>
                <li><strong>YEAR:</strong> {year} </li>
            </ul>
            <button onClick={carDelete}>Delete</button>
            <button onClick={carUpdate}>Update</button>
        </div>
    );
};

export { Car };
