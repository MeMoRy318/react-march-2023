import React, { useEffect, useState } from 'react';

import { ICar } from '../interfaces';
import { carService } from '../services';
import { deleteCar } from '../utility';

export interface IUseFetchingCar {
    cars: ICar[]
    setCars: React.Dispatch<React.SetStateAction<ICar[]>>
    isLoading: boolean
    error: string
    deleteCarById: ( id: number ) => void
}

export const useFetchingCar = (deps?:unknown): IUseFetchingCar => {

    const [cars, setCars] = useState<ICar[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        setIsLoading(true);
        carService.getAllCars()
            .then(({ data }) => setCars(data))
            .catch((error: Error) => setError(error.message))
            .finally(() => setIsLoading(false));
    }, [deps]);

    const deleteCarById = deleteCar.bind(null, setCars, setError);

    return { cars, setCars, isLoading, error, deleteCarById  };
};
