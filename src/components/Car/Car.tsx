import React, { FC, ReactNode } from 'react';

import { ICar } from '../../interfaces';

interface IProps {
    car:ICar
    children?: ReactNode
    deleteCarById: ( id: number ) => void
    setCar: ( car: ICar ) => void
}
const Car:FC<IProps> = ({ car, deleteCarById, setCar }) => {

    const { id, year, price, brand } = car;

    return (
        <ul>
            <li>ID: {id}</li>
            <li>BRAND: {brand}</li>
            <li>YEAR: {year}</li>
            <li>PRICE: {price}</li>
            <button onClick={() => deleteCarById( id )}>Delete</button>
            <span> </span>
            <button onClick={() => setCar( car )}>Update</button>
        </ul>
    );
};

export { Car };
