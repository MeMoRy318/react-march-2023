import React, { ChangeEvent, FC, ReactNode, useRef, useState } from 'react';

import { FaSearch } from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';

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
    const refObject = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const search = async (query:string):Promise<void> => {
        const { data } = await movieService.search(query);
        setSearchMovie(data.results);
    };

    const debounce = useDebounce(search, 500);
    const change = async (e:ChangeEvent<HTMLInputElement>) => {
        if (refObject?.current?.value && refObject?.current?.value.length > 2) {
            debounce(refObject?.current?.value);
        }else {
            setSearchMovie([]);
        }
    };

    const submit = async (e:ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (refObject?.current) {
            const value = refObject?.current?.value;
            navigate(`/search/${value}`);
            refObject.current.value = '';
            setSearchMovie([]);
        }
    };

    return (
        <div className={styles.search}>
            <form onSubmit={submit}>
                <label>
                    <input ref={refObject} type="text" name="search" placeholder="Search" onInput={change}/>
                </label>
                <button  disabled={!refObject?.current?.value} className={styles.searchForm__btn}><FaSearch/></button>
            </form>

            <div className={styles.search__results}>
                {!! searchMovie?.length && searchMovie.map(value => <SearchInputMovie
                    setSearchMovie={setSearchMovie}
                    refObject={refObject}
                    key={value.id}
                    movie={value}/>)}
            </div>
        </div>
    );
};

export { SearchInput };
