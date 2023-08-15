import { Dispatch } from 'react';

import { IParams, photoService } from '../../services';
import { EPhotoAction, IPhotoAction } from '../../interfaces';

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

const didUnmountPhoto = () => {
    return (dispatch:Dispatch<IPhotoAction>) => {
        dispatch({ type: EPhotoAction.DID_UNMOUNT_PHOTO });
    };
};

export { fetchPhoto, didUnmountPhoto };
