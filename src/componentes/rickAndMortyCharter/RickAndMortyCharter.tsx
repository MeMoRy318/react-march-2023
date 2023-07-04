import React, { FC, ReactNode } from 'react';

import { ICharacter } from '../../interfaces';

import style from './rickMortyCharter.module.css';

interface IProps {
    charter:ICharacter
    children?:ReactNode
}
const RickAndMortyCharter:FC<IProps> = ({ charter }) => {

    const { gender, name, image, status } = charter;

    return (
        <div className={style.card}>
            <h2>{name}</h2>
            <div>{gender}</div>
            <div>{status}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export { RickAndMortyCharter };
