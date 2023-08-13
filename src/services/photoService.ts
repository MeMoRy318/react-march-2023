import { IPhoto } from '../interfaces';
import { urls } from '../configs';

import { axiosService, IParams, IRes } from './axiosService';


const photoService = {
    getAll: (params: IParams):IRes<IPhoto[]> => axiosService.get(urls.photos.base, { params: { ...params } }),
};

export { photoService };
