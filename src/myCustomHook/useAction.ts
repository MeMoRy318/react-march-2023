import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import actionCreators from '../reduxCore/action-creators';
function useAction() {
    const dispatch = useDispatch();
    return bindActionCreators(actionCreators, dispatch);
}

export { useAction };
