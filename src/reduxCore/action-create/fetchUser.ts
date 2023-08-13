import { Dispatch } from 'react';

import { EUserAction, IUserAction } from '../../interfaces';
import { userService } from '../../services';

const fetchUser = () => {
    return async (dispatch:Dispatch<IUserAction>) => {
        try {
            dispatch({ type: EUserAction.FETCH_USER });
            const { data } = await userService.getAll();
            dispatch({ type: EUserAction.FETCH_USER_SUCCESS, payload: data });
        }catch (e) {
            dispatch({ type: EUserAction.FETCH_USER_ERROR, payload: 'Щось пішло не так' });
        }
    };
};

export { fetchUser };
