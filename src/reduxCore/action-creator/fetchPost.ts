import { Dispatch } from 'react';

import { EPostAction, IPostAction } from '../../interfaces';
import { postService } from '../../services';

const fetchPost = () => {
    return async (dispatch:Dispatch<IPostAction>):Promise<void> => {
        try {
            dispatch({ type: EPostAction.FETCH_POST });
            const { data } = await postService.getAll();
            dispatch({ type: EPostAction.FETCH_POST_SUCCESS, payload: data });
        }catch (e) {
            dispatch({ type: EPostAction.FETCH_POST_ERROR, payload: 'Error' });
        }
    };
};

export { fetchPost };
