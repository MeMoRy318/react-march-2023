import React, { FC, ReactNode } from 'react';

import { useNavigate } from 'react-router-dom';

import { IMovies } from '../../interfaces';
import { urls } from '../../configs';
import { StarsRating } from '../../UI';

import styles from './SearchInputMovie.module.css';

interface IProps {
    children?: ReactNode
    movie: IMovies
}

const SearchInputMovie: FC<IProps> = ({ movie }) => {

    const navigate = useNavigate();
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { poster_path, title, overview, release_date, vote_average, id } = movie;

    const img = poster_path ? urls.posterUrl.base + poster_path : urls.notFoundPoster.base;
    const data = release_date.split('-')[0];

    return (
        <div className={styles.searchInputMovie} onClick={() => navigate(`/movieInfo/${id}`)}>
            <div className={styles.searchInputMovie__img}>
                <img src={img} alt={title}/>
            </div>
            <div className={styles.searchInputMovie__title}>
                <div>{title}</div>
                <div className={styles.release}><span>Release</span> {data}</div>
                <div className={styles.release}> <span>Rating</span><StarsRating rating={vote_average}/></div>
                <div>{overview.slice(0, 95)}...</div>
            </div>
        </div>
    );
};

export { SearchInputMovie };
