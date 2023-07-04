import React, { FC, useEffect, useState } from 'react';

import { ICharacter } from '../../interfaces';
import { rickAndMortyService } from '../../services';
import { RickAndMortyCharter } from '../index';

const RickAndMortyCharters:FC = () => {
    const [charters, setCharters] = useState<ICharacter[]>();

    useEffect(() => {
        rickAndMortyService.getAllCharters().then(({ data }) => setCharters(data.results));
    }, []);

    return (
        <div>
            {!!charters?.length && charters.map(value => <RickAndMortyCharter charter={value} key={value.id}/>) }
        </div>
    );
};

export { RickAndMortyCharters };
