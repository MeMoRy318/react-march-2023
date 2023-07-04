import React, { FC } from 'react';

import { simpsonFamilyArray } from '../../utility';
import { Simpson } from '../index';

import style from './simpsons.module.css';

const Simpsons:FC = () => {

    return (
        <div className={style.charters}>
            {!!simpsonFamilyArray?.length &&
                simpsonFamilyArray.map((value, index) =>
                    <Simpson charter={value} key={index}/>)}
        </div>
    );
};

export { Simpsons };
