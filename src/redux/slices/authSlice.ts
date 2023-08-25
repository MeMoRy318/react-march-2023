import { createAsyncThunk, createSlice, isFulfilled, isRejected } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { ILoginOrRegisterUser, IResponseUser } from '../../interfaces';
import { authService } from '../../services';

interface IState {
    error: string
    user: IResponseUser | null
}

const initialState: IState = {
    error: '',
    user: null,
};

const login = createAsyncThunk<IResponseUser, ILoginOrRegisterUser>(
    'authSlice/login',
    async (arg, { rejectWithValue }) => {
        try {
            const me = await authService.login(arg);
            return me;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.message);
        }
    },
);


const register = createAsyncThunk<void, ILoginOrRegisterUser>(
    'authSlice/register',
    async (arg, { rejectWithValue }) => {
        try {
            await authService.register(arg);
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.message);
        }
    },
);

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addMatcher(isRejected(), (state, action) => {
                state.error = action.payload as string;
            })
            .addMatcher(isFulfilled(), (state, action) => {
                state.error = '';
            }),
});

const { reducer: authReducer, actions } = authSlice;

const authAction = {
    ...actions,
    login,
    register,
};

export { authReducer, authAction };
