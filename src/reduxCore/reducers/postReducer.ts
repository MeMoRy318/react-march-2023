import { EPostAction, IPostAction, IPostInitiationState } from '../../interfaces';

const initiationState:IPostInitiationState = {
    isLoading: false,
    error: '',
    posts: [],
};

const postReducer = (state = initiationState, action:IPostAction):IPostInitiationState => {
    switch (action.type) {
        case EPostAction.FETCH_POST:
            return { ...state, isLoading: true };
        case EPostAction.FETCH_POST_SUCCESS:
            return { ...state, isLoading: false, posts: action.payload };
        case EPostAction.FETCH_POST_ERROR:
            return { ...state, isLoading: false, error: action.payload };
        default:
            return { ...state };
    }
};

export { postReducer };
