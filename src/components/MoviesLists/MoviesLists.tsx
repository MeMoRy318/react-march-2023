import React, { FC, ReactNode } from 'react';

import {  movieService } from '../../services';
import { IMovieListResponse } from '../../interfaces';
import { MoviesList } from '../index';
import { ErrorComponent, LoadingSpinner } from '../../UI';

import { useScrollPagination } from '../../myCostumeHook';

import styles from './MoviesLists.module.css';

interface IProps {
    children?: ReactNode
}

const MoviesLists: FC<IProps> = () => {

    const { lastElementRef, error, isLoading, data } =
        useScrollPagination<IMovieListResponse, HTMLDivElement>(movieService.getAll);

    if (isLoading) return (<LoadingSpinner/>);
    if (error) return (<ErrorComponent message={error}/>);

    const results = data?.results;

    return (
        <div className={styles.content}>
            {!!results?.length && results.map(movie => <MoviesList key={movie.id} movie={ movie }/>) }
            <div ref={lastElementRef}></div>
        </div>
    );
};

export { MoviesLists };
