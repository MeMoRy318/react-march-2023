import { createAsyncThunk, createSlice, isFulfilled, isPending, isRejected, PayloadAction } from '@reduxjs/toolkit';

import { AxiosError } from 'axios';

import { ICar, ICarForm } from '../../interfaces';
import { carService } from '../../services';

interface IState {
    isLoading:boolean
    error:string
    cars: ICar[]
    car: ICar
}
const initialState:IState = {
    isLoading: false,
    error: '',
    car: null,
    cars: [],
};

const getAllCars = createAsyncThunk<ICar[], void>(
    'carsSlice/getAllCars',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await carService.getAll();
            return data;
        }catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.message);
        }
    },
);

const updateCar = createAsyncThunk<void, { id:number; data:ICarForm }>(
    'carsSlice/updateCar',
    async ({ id, data }, { rejectWithValue, dispatch }) => {
        try {
            await carService.update(id, data);
            dispatch(getAllCars());
        }catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.message);
        }
    },
);

const deleteCar = createAsyncThunk<void, {id:number}>(
    'carsSlice/deleteCar',
    async ({ id }, { rejectWithValue, dispatch }) => {
        try {
            await carService.delete(id);
            dispatch(getAllCars());
        }catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.message);
        }
    },
);

const createCar = createAsyncThunk<void, { car: ICarForm }>(
    'carsSlice/createCar',
    async ({ car }, { rejectWithValue, dispatch }) => {
        try {
            await carService.create(car);
            dispatch(getAllCars());
        }catch (e) {

        }
    },
);

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,

    reducers: {
        setCar: (state, action:PayloadAction<{car:ICar}>) => {
            state.car = action.payload.car;
        },
    },

    extraReducers: builder => builder
        .addCase(getAllCars.fulfilled, (state, action) => {
            state.cars = action.payload;
        })
        .addCase(updateCar.fulfilled, (state, action) => {
            state.car = null;
        })
        .addMatcher(isFulfilled(), (state) => {
            state.isLoading = false;
        })
        .addMatcher(isPending(), (state) => {
            state.isLoading = true;
        })
        .addMatcher(isRejected(), (state, action) => {
            state.isLoading = false;
            state.error = action.payload.toString();
        }),
});

const { reducer: carReducer, actions } = carsSlice;

const carAction = { ...actions, updateCar, deleteCar, getAllCars, createCar };

export { carReducer, carAction };
