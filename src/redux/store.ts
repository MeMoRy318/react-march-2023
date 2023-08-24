import { configureStore } from '@reduxjs/toolkit';

import { carReducer } from './slices';
import { authReducer } from './slices/authSlice';

export const store = configureStore({
    reducer: {
        carReducer,
        authReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
