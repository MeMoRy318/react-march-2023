import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { commentsReducer, photoReducer, postReducer, userReducer } from './reducers';

const rootReducer = combineReducers({
    userReducer,
    postReducer,
    commentsReducer,
    photoReducer,
});

const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export type IRootReducers = ReturnType<typeof rootReducer>

export { store };
