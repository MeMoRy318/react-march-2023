import React, { FC } from 'react';

import styles from './AppComponent.module.css';

import { RickAndMortyCharters, Simpsons } from './componentes';


const App:FC = () => {


    return (
        <div className={styles.app}>
            <RickAndMortyCharters/>
            <hr/>
            <Simpsons/>
        </div>
    );
};

export { App };
