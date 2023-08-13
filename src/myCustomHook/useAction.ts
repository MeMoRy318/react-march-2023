import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import actionCreate from '../reduxCore/action-create';

function useAction() {
    const dispatch = useDispatch();
    return bindActionCreators(actionCreate, dispatch);
}

export { useAction };
