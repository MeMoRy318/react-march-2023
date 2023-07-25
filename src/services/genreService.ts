import { IGenre } from '../interfaces';
import { urls } from '../configs';

import { axiosService, IRes } from './axiosService';

interface IGenreService {
    getAll: () => IRes<IGenre[]>
}
const genreService: IGenreService = {
    getAll: ():IRes<IGenre[]> => axiosService.get(urls.genre.base),
};

export { genreService };
