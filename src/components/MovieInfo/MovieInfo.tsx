import React, { FC, ReactNode } from 'react';

import { IMovie } from '../../interfaces';

import { urls } from '../../configs';

import { GenreBadge, StarsRating } from '../../UI';

import styles from './MovieInfo.module.css';

interface IProps {
    children?: ReactNode
    movie: IMovie
}

const MovieInfo: FC<IProps> = ({ movie }) => {

    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { title, vote_average, original_language, genres, budget, runtime, release_date, overview } = movie;

    const logoPatch = urls.posterUrl.base + movie.production_companies[0].logo_path || urls.notFoundPoster.base;
    const backdropPath = urls.posterUrl.base + movie.poster_path || urls.notFoundPoster.base;
    const releaseDate = +release_date.split('-')[0];

    return (
        <div className={styles.movieInfo}>
            <div style={{ backgroundImage: `url(${backdropPath})` }} className={styles.backdropPath}>

            </div>
            <div className={styles.content}>
                <div style={{ backgroundImage: `url(${logoPatch})` }} className={styles.logoPatch}></div>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.btn}>
                    <button>play</button>
                    <button>favorite</button>
                </div>
                <div className={styles.description}>
                    <h2 className={styles.subTitle}>About the film</h2>
                    <div><span>Retying</span> <StarsRating rating={vote_average}/> </div>
                    <div><span>Countries</span> <span>{original_language}</span> </div>
                    <div><span>Genre</span> {genres.map(value => <GenreBadge key={value.id} genre={value}/>)} </div>
                    <div><span>Budget</span> <span>{budget}</span> </div>
                    <div><span>Runtime</span> <span>{runtime} min</span> </div>
                    <div><span>Release date</span> <span>{releaseDate}</span> </div>
                </div>
                <div className={styles.overview}>
                    <p>
                        <strong>Description</strong> {overview}
                    </p>
                </div>
            </div>
        </div>
    );
};

export { MovieInfo };
