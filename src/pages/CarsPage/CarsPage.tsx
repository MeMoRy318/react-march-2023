import React, { FC, PropsWithChildren } from 'react';

import { useAppDispatch, useAppSelector } from '../../Hooks';
import { carAction } from '../../redux/slices';

type IProps = PropsWithChildren

const CarsPage: FC<IProps> = () => {

    const { cars, isError } = useAppSelector(state => state.carReducer);
    const dispatch = useAppDispatch();
    //
    // useEffect(() => {
    //     dispatch(carAction.getAllCar({ page: 1, page_size: 10 }));
    // }, []);

    return (
        <div>

        </div>
    );
};

export { CarsPage };
