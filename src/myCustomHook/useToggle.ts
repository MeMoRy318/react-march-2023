import { useState } from 'react';

interface IToggle {
    isActive: boolean
    change: () => void
}
export const useToggle = ( defaultValue: boolean ): IToggle => {
    const [isActive, setIsActive] = useState<boolean>(defaultValue);

    const change = ():void => {
        setIsActive(prevState => !prevState);
    };

    return { isActive, change };
};
