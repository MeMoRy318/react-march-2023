import React, { FC, ReactNode } from 'react';

import { ICharacter } from '../../interfaces';

interface IProps {
    charter:ICharacter
    children?:ReactNode
}
const RickAndMortyCharter:FC<IProps> = ({ charter }) => {

    const { gender, name, image, status } = charter;

    return (
        <div>
            <h2>{name}</h2>
            <div>{gender}</div>
            <div>{status}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export { RickAndMortyCharter };
