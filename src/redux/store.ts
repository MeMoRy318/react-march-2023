import { configureStore } from '@reduxjs/toolkit';

import { carReducer } from './slices';

const store = configureStore({
    reducer: {
        carReducer,
    },
});

type IRootState = ReturnType<typeof store.getState>;
type IAppDispatch = typeof store.dispatch;

export type { IRootState, IAppDispatch };

export { store };
