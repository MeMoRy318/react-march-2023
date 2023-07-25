import { IMovieListResponse } from '../interfaces';
import { urls } from '../configs';

import { axiosService, IRes } from './axiosService';

interface IData {
    media_type: string
    media_id: number
    watchlist: boolean
}

interface IFavoriteMovieService {
    getAll: ( id: number ) => IRes<IMovieListResponse>
    addFavorite: ( id: number, data: IData ) => IRes<void>
}

const favoriteMovieService:IFavoriteMovieService = {
    getAll: ( id: number ):IRes<IMovieListResponse> => axiosService.get(urls.getFavorite.base(id)),
    addFavorite: ( id: number, data: IData ): IRes<void> => axiosService.post(urls.postFavorite.base(id)),
};

export { favoriteMovieService };
