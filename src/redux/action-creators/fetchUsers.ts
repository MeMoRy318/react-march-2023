import { Dispatch } from 'react';

import { EUserAction, IAction } from '../../interfaces';
import { userService } from '../../services';

const fetchUsers = () => {
    return async (dispatch:Dispatch<IAction>) => {
        try {
            dispatch({ type: EUserAction.FETCH_USER });
            const { data } = await userService.getAll();
            dispatch({ type: EUserAction.FETCH_USER_SUCCESS, payload: data });
            // @ts-ignore
        }catch (e) {
            dispatch({ type: EUserAction.FETCH_USER_ERROR, payload: '' });
        }
    };
};

export { fetchUsers };
