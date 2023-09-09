import { EAuthAction, IAuthAction, IAuthState } from '../../interfaces';

const initialState:IAuthState = {
    user: null,
    userWithRegister: null,
    isLoading: null,
    error: null,
};

const authReducer = (state = initialState, action:IAuthAction):IAuthState => {
    switch (action.type) {
        case EAuthAction.LOGIN:
            return { ...state, isLoading: true, error: null };
        case EAuthAction.LOGIN_SUCCESS:
            return { ...state, isLoading: false, error: null, user: action.payload };
        case EAuthAction.LOGIN_ERROR:
            return { ...state, isLoading: false, error: action.payload, user: null };
        case EAuthAction.REGISTER:
            return { ...state, isLoading: true, error: null };
        case EAuthAction.REGISTER_SUCCESS:
            return { ...state, isLoading: false, error: null, userWithRegister: action.payload };
        case EAuthAction.REGISTER_ERROR:
            return { ...state, isLoading: false, error: action.payload };
        case EAuthAction.OUT:
            return { ...state, user: null, userWithRegister: null };
        default:
            return state;
    }

};

export { authReducer };
