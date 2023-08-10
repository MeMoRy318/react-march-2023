import { Dispatch } from 'react';

import { EFetchUserAction, IUserAction } from '../../interfaces';
import { userService } from '../../services';

const fetchUser = () => {
    return async (dispatch:Dispatch<IUserAction>):Promise<void> => {
        try {
            dispatch({ type: EFetchUserAction.FETCH_USER });
            const { data } = await userService.getAll();
            dispatch({ type: EFetchUserAction.FETCH_USER_SUCCESS, payload: data });
        }catch (e) {
            dispatch({ type: EFetchUserAction.FETCH_USER_ERROR, payload: 'error' });
        }
    };
};

export { fetchUser };
