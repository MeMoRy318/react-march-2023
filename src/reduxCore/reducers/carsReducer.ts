import { ECarAction, ICarAction, ICarInitialState } from '../../interfaces';

const initialState:ICarInitialState = {
    isLoading: null,
    isError: null,
    cars: [],
    car: null,
};
const carsReducer = (state = initialState, action:ICarAction):ICarInitialState => {
    switch (action.type) {
        case ECarAction.FETCH_CAR:
            return { ...state, isLoading: true };
        case ECarAction.FETCH_CAR_SUCCESS:
            return { ...state, isLoading: false, cars: action.payload, car: null };
        case ECarAction.FETCH_CAR_ERROR:
            return { ...state, isLoading: false, isError: action.payload };
        case ECarAction.SET_CAR:
            return { ...state, car: action.payload };
        default:
            return state;
    }
};

export { carsReducer };
