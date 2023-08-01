import React, { FC, ReactNode } from 'react';

import { ISimsonFamily } from '../../interfaces';

import style from './simpson.module.css';

interface IProps {
    charter:ISimsonFamily
    children?:ReactNode
}
const Simpson:FC<IProps> = ({ charter }) => {

    const { title, photo, name } = charter;

    return (
        <div className={style.card}>
            <h2>{title}</h2>
            <div>{name}</div>
            <img src={photo} alt={name} className={style.card__img}/>
        </div>
    );
};

export { Simpson };
