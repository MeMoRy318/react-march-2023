import React, { FC, PropsWithChildren } from 'react';

import { ICar } from '../../interfaces';

import { useAppDispatch } from '../../hooks/reduxHooks';

import styles from './CarsItem.module.scss';

interface IProps extends PropsWithChildren{
    car:ICar
}

const CarItem: FC<IProps> = ({ car }) => {

    const { year, price, brand, id } = car;
    const { deleteCar, setCar } = useAppDispatch();

    const handleClickDelete = async () => {
        deleteCar(id, 1, 10);
    };

    const handleClickUpdate = async () => {
        setCar(car);
    };

    return (
        <div className={styles.car_card}>
            <div>
                <h2>Brand - {brand}</h2>
                <p>Price - {price}</p>
                <p>Year - {year}</p>
            </div>
            <div className={styles.animated_div}>
                <button onClick={handleClickDelete}>Delete</button>
                <button onClick={handleClickUpdate}>Update</button>
            </div>
        </div>
    );
};

export { CarItem };
