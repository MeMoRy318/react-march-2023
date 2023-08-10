import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { userReducer } from './reducers/userReducer';

const rootReducer = combineReducers({
    userReducer,
});

const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export type IRootState = ReturnType<typeof rootReducer>

export { store };
