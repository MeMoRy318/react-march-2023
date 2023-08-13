import { EUserAction, IUserAction, IUserInitiationState } from '../../interfaces';


const initiationState:IUserInitiationState = {
    isLoading: false,
    users: [],
    error: '',
};
const userReducer = (state = initiationState, action: IUserAction):IUserInitiationState => {
    switch (action.type) {
        case EUserAction.FETCH_USER:
            return { ...state, isLoading: true };
        case EUserAction.FETCH_USER_SUCCESS:
            return { ...state, isLoading: false, users: action.payload };
        case EUserAction.FETCH_USER_ERROR:
            return { ...state, isLoading: false, error: action.payload };
        default:
            return { ...state };
    }
};

export { userReducer };
