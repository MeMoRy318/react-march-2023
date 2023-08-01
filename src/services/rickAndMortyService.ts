import { ICharacter, IRickAndMortyResponse } from '../interfaces';
import { rickAndMortyUrls } from '../configs';

import { axiosService, IRes } from './axiosService';

const rickAndMortyService = {
    getAllCharters: ():IRes<IRickAndMortyResponse<ICharacter[]>> => axiosService.get(rickAndMortyUrls.characters),
    getCharter: (id:string):IRes<IRickAndMortyResponse<ICharacter>> => axiosService.get(rickAndMortyUrls.character(id)),
};

export { rickAndMortyService };
