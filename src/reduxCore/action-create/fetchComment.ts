import { Dispatch } from 'react';

import { ECommentAction, ICommentAction } from '../../interfaces';
import { commentService, IParams } from '../../services';

const fetchComment = ( params: IParams ) => {
    return async (dispatch:Dispatch<ICommentAction>) => {
        try {
            dispatch({ type: ECommentAction.FETCH_COMMENT });
            const { data } = await commentService.getAll( params );
            dispatch({ type: ECommentAction.FETCH_COMMENT_SUCCESS, payload: data });
        }catch (e) {
            dispatch({ type: ECommentAction.FETCH_COMMENT_ERROR, payload: 'Щось пішло не так' });
        }
    };
};

export { fetchComment };
