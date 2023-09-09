import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import { IRootState } from '../reduxCore/store';
import actionCreator from '../reduxCore/action-creator/index';

const useAppDispatch = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actionCreator, dispatch);
};
const useAppSelector:TypedUseSelectorHook<IRootState> = useSelector;

export { useAppDispatch, useAppSelector };
