import { ECarAction, ICarAction, ICarInitiationState } from '../../interface';


const initiationState: ICarInitiationState = {
    isLoading: false,
    error: '',
    cars: [],
    car: null,
};
const carReducer = ( state = initiationState, action: ICarAction ):ICarInitiationState => {
    switch (action.type) {
        case ECarAction.FETCH_CAR:
            return { ...state, isLoading: true };
        case ECarAction.FETCH_CAR_DELETE:
            return { ...state, isLoading: true, cars: action.payload };
        case ECarAction.FETCH_CAR_UPDATE:
            return { ...state, isLoading: true, cars: action.payload };
        case ECarAction.FETCH_CAR_ERROR:
            return { ...state, isLoading: false, error: action.payload };
        case ECarAction.FETCH_CAR_SUCCESS:
            return { ...state, isLoading: false, cars: action.payload, car: null };
        case ECarAction.SET_CAR:
            return { ...state, car: action.payload };
        default:
            return { ...state };
    }
};

export { carReducer };
