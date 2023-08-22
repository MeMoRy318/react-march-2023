import React, { FC, PropsWithChildren, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hook';
import { carAction } from '../../redux/slices';
import { CarsItem } from '../CarsItem/CarsItem';

type IProps = PropsWithChildren

const CarsList: FC<IProps> = () => {
    const dispatch = useAppDispatch();
    const { cars } = useAppSelector(state => state.carReducer);

    useEffect(() => {
        dispatch(carAction.getAllCars());
    }, [dispatch]);

    return (
        <div>
            {!!cars?.length && cars.map(value =>  <CarsItem key={value.id} car={value}/>)}
        </div>
    );
};

export { CarsList };
