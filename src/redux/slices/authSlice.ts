import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { AxiosError } from 'axios';

import { ILoginOrRegisterUser } from '../../interfaces';
import { authService } from '../../services';

interface IState {
    error: string | null
}

const initialState:IState = {
    error: null,
};


const login = createAsyncThunk<void, ILoginOrRegisterUser>(
    'authSlice/login',
    async (arg, { rejectWithValue }) => {
        try {
            await authService.login(arg);
        }catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.message);
        }
    },
);

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: {},
});

const { reducer: authReducer, actions } = authSlice;

const authAction = {
    ...actions,
    login,
};

export { authReducer, authAction };
