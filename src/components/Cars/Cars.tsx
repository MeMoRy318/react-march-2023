import React, { useContext } from 'react';

import { CarContext } from '../../hok';
import { Car } from '../index';
import { IExtendsContext } from '../../interfaces';

const Cars = () => {

    const { cars, deleteCarById, setCar } = useContext<IExtendsContext>(CarContext);

    return (
        <div>
            {!!cars?.length && cars.map(value =>
                <Car
                    car={value}
                    key={value.id}
                    deleteCarById={deleteCarById}
                    setCar = { setCar }
                />)}
        </div>
    );
};

export { Cars };
