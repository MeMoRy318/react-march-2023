import React from 'react';

import { carService } from '../services';
import { ICar } from '../interfaces';

const deleteCar = (
    setCar: React.Dispatch<React.SetStateAction<ICar[]>>,
    setError: React.Dispatch<React.SetStateAction<string>>,
    id: number,
):void => {
    carService.deleteCar(id).then(() => {
        setCar(pre => pre.filter(value => value.id !== id));
    })
        .catch((error: Error) => setError(error.message));
};

export { deleteCar };
