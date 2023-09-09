import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { authReducer, carsReducer } from './reducers';


const rootReducers = combineReducers({
    carsReducer,
    authReducer,
});

const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25,
});

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));

export type IRootState = ReturnType<typeof rootReducers>

export { store };
