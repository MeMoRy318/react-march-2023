import { IAlbum } from '../interfaces';
import { urls } from '../configs';

import { axiosService, IRes } from './axiosService';

interface IAlbumService {
    getAll: (page?: number, limit?: number) =>IRes<IAlbum[]>
}

const albumService: IAlbumService = {
    getAll: (page: number = 1, limit: number = 10): IRes<IAlbum[]> =>
        axiosService.get(urls.albums.base, { params: { _page: page, _limit: limit } }),
};

export { albumService };
