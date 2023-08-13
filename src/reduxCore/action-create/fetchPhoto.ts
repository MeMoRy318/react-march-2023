import { Dispatch } from 'react';

import { EPhotoAction, IPhotoAction } from '../../interfaces';
import { IParams, photoService } from '../../services';

const fetchPhoto = (params:IParams) => {
    return async (dispatch:Dispatch<IPhotoAction>) => {
        try {
            dispatch({ type: EPhotoAction.FETCH_PHOTO });
            const { data } = await photoService.getAll(params);
            dispatch({ type: EPhotoAction.FETCH_PHOTO_SUCCESS, payload: data });
        }catch (e) {
            dispatch({ type: EPhotoAction.FETCH_PHOTO_ERROR, payload: 'Щось пішло не так' });
        }
    };
};

export { fetchPhoto };
