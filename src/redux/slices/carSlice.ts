import { createAsyncThunk, createSlice, isRejected } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { ICarResponse, IPagination, IPaginationResult } from '../../interfaces';
import { carService } from '../../services';


const getAllCar = createAsyncThunk<IPaginationResult<ICarResponse>, IPagination>(
    'carSlice/getAllCar',
    async (arg, { rejectWithValue }) => {
        try {
            const { data } = await carService.getAll(arg);
            return data;
        }catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error);
        }
    },
);

interface IState {
    isLoading: boolean | null
    isError: AxiosError | null
    cars: ICarResponse[]
    total_items:number
    total_pages:number
}

const initialState:IState = {
    isLoading: null,
    isError: null,
    cars: [],
    total_items: 1,
    total_pages: 1,
};

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAllCar.fulfilled, (state, action) => {
                state.cars = action.payload.items;
                state.total_items = action.payload.total_items;
                state.total_pages = action.payload.total_pages;
            })
            .addMatcher(isRejected(), (state, action) => {
                state.isError = action.payload as AxiosError;
            }),
});

const { reducer: carReducer, actions } = carSlice;

const carAction = {
    ...actions,
    getAllCar,
};

export { carAction, carReducer };
