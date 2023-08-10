import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as UserCreator from '../redux/action-creators/fetchUsers';

export const useAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(UserCreator, dispatch);
};
