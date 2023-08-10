import { EUserAction, IAction, IState } from '../../interfaces';


const initiationState:IState = {
    users: [],
    error: '',
    isLoading: false,
};

const userReducer = ( state = initiationState, action: IAction ): IState  => {
    switch (action.type) {
        case EUserAction.FETCH_USER:
            return { ...state, isLoading: true };
        case EUserAction.FETCH_USER_ERROR:
            return { ...state, isLoading: false, error: action.payload };
        case EUserAction.FETCH_USER_SUCCESS:
            return { ...state, isLoading: false, users: action.payload };
        default :
            return { ...state };
    }
};

export { userReducer };
