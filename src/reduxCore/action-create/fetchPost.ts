import { Dispatch } from 'react';

import { EPostAction, IPostAction } from '../../interfaces';
import { IParams, postsService } from '../../services';

const fetchPost = ( params: IParams ) => {
    return async ( dispatch: Dispatch<IPostAction> ) => {
        try {
            dispatch({ type: EPostAction.FETCH_POST });
            const { data } = await postsService.getAll( params );
            dispatch({ type: EPostAction.FETCH_POST_SUCCESS, payload: data });
        }catch (e) {
            dispatch({ type: EPostAction.FETCH_POST_ERROR, payload: 'Щось пішло не так' });
        }
    };
};

export { fetchPost };
