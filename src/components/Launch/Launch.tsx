import React, { FC, ReactNode } from 'react';

import { ILaunch } from '../../interfaces';

interface IProps {
    launch: ILaunch
    children?: ReactNode
}
const Launch:FC<IProps> = ({ launch }) => {
    const { mission, year, patch } = launch;

    return (
        <div>
            <h2>Mission: {mission} Year: {year}</h2>
            <img src={patch} alt={mission}/>
        </div>
    );
};

export { Launch };
