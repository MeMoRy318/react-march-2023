import React, { FC, PropsWithChildren } from 'react';

import { ICar } from '../../interfaces';
import { useAppDispatch } from '../../hook';
import { carAction } from '../../redux/slices';

interface IProps extends PropsWithChildren {
    car:ICar
}

const CarsItem: FC<IProps> = ({ car }) => {
    const { price, year, brand, id } = car;

    const dispatch = useAppDispatch();
    const handleDeleteCar = async () => {
        dispatch(carAction.deleteCar({ id }));
    };

    const handleSetUpdateCar = async () => {
        dispatch(carAction.setCar({ car }));
    };

    return (
        <ul>
            <li>BRAND: {brand}</li>
            <li>PRICE: {price}</li>
            <li>YEAR: {year}</li>
            <button onClick={handleDeleteCar}>Delete</button>
            <button onClick={handleSetUpdateCar}>Update</button>
        </ul>
    );
};

export { CarsItem };
