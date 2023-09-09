import React, { FC, PropsWithChildren, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { CarItem } from '../CarItem/CarItem';

import { carService } from '../../services';

import styles from './CarsList.module.scss';

type IProps = PropsWithChildren

const CarsList: FC<IProps> = () => {
    const { fetchingCar } = useAppDispatch();
    const [query] = useSearchParams({ page: '1', page_size: '10' });
    const { cars, isLoading, isError } = useAppSelector(state => state.carsReducer);

    useEffect(() => {
        fetchingCar(+query.get('page'), +query.get('page_size'));
    }, [query.get('page'), query.get('page_size')]);


    useEffect(() => {
        carService.getAll({ page: 1, page_size: 1 })
            .then(value => console.log(value))
            .catch(reason => console.log(reason));
    }, []);

    return (
        <section className={styles.cars_section}>
            {!!cars.length && cars.map(value => <CarItem key={value.id} car={value}/>)}
        </section>
    );
};

export { CarsList };
