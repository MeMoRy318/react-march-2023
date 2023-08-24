import { createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

interface IState {
    isLoading: boolean | null
    isError: AxiosError | null
}

const initialState:IState = {
    isLoading: null,
    isError: null,
};

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: {},
});

const { reducer: carReducer, actions } = carSlice;

const carAction = {
    ...actions,
};

export { carAction, carReducer };
