import React, { FC, useEffect, useState } from 'react';

import { ICharacter } from '../../interfaces';
import { rickAndMortyService } from '../../services';
import { RickAndMortyCharter } from '../index';

import styles from './rickMortyCharters.module.css';
const RickAndMortyCharters:FC = () => {
    const [charters, setCharters] = useState<ICharacter[]>();

    useEffect(() => {
        rickAndMortyService.getAllCharters().then(({ data }) => setCharters(data.results));
    }, []);

    return (
        <div className={styles.charters}>
            {!!charters?.length && charters.map(value => <RickAndMortyCharter charter={value} key={value.id}/>) }
        </div>
    );
};

export { RickAndMortyCharters };
