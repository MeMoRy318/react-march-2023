import { Dispatch } from 'react';

import { ECommentAction, ICommentAction } from '../../interfaces';
import { commentService } from '../../services';

const fetchComment = () => {
    return async (dispatch:Dispatch<ICommentAction>):Promise<void> => {
        try {
            dispatch({ type: ECommentAction.FETCH_COMMENT });
            const { data } = await commentService.getAll();
            dispatch({ type: ECommentAction.FETCH_COMMENT_SUCCESS, payload: data });
        }catch (e) {
            dispatch({ type: ECommentAction.FETCH_COMMENT_ERROR, payload: 'Error' });
        }
    };
};

export { fetchComment };
