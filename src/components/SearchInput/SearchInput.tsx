import React, { ChangeEvent, FC, ReactNode, useState } from 'react';

import { useDebounce } from '../../myCostumeHook';
import { movieService } from '../../services';

import { IMovies } from '../../interfaces';

import { SearchInputMovie } from '../index';

import styles from './SearchInput.module.css';

interface IProps {
    children?: ReactNode
}

const SearchInput: FC<IProps> = () => {

    const [searchMovie, setSearchMovie] = useState<IMovies[]>([]);
    const search = async (query:string):Promise<void> => {
        const { data } = await movieService.search(query);
        setSearchMovie(data.results);
    };

    const debounce = useDebounce(search, 500);
    function change(e:ChangeEvent<HTMLInputElement>) {
        if (e.target.value) {
            debounce(e.target.value);
        }else {
            setSearchMovie([]);
        }
    }

    return (
        <div className={styles.search}>
            <form >
                <label>
                    <input type="text" name="search" placeholder="Search" onChange={change}/>
                </label>
            </form>
            <div className={styles.search__results}>
                {!! searchMovie?.length && searchMovie.map(value => <SearchInputMovie key={value.id} movie={value}/>)}
            </div>
        </div>
    );
};

export { SearchInput };
