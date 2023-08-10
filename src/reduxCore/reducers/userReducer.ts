import { EFetchUserAction, IUserAction, IUserInitialState } from '../../interfaces';


const initialState:IUserInitialState = {
    users: [],
    isLoading: false,
    error: '',
};

const userReducer = (state = initialState, action:IUserAction):IUserInitialState => {
    switch (action.type) {
        case EFetchUserAction.FETCH_USER:
            return { ...state, isLoading: true };
        case EFetchUserAction.FETCH_USER_SUCCESS:
            return { ...state, users: action.payload, isLoading: false };
        case EFetchUserAction.FETCH_USER_ERROR:
            return { ...state, isLoading: false, error: action.payload };
        default:
            return { ...state };
    }
};

export { userReducer };
