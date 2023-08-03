import { useEffect, useState } from 'react';

interface IArray<T> {
    remove: ( id: number ) => void
    add: ( value: T ) => void
    value: T[]
}
export const useArray = <T extends { id?: number }>(defaultValue: T[]):IArray<T> => {

    const [value, setValue] = useState<T[]>(defaultValue);

    useEffect(() => setValue(defaultValue), [defaultValue.length]);
    const remove = (id: number): void => {
        setValue(prevState => prevState.filter(value1 => value1.id !== id));
    };

    const add = ( value: T ): void => {
        setValue(prevState => [...prevState, { ...value, id: new Date().getTime() }]);
    };

    return { value, add, remove };
};
