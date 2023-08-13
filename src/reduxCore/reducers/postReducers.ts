import { EPostAction, IPostAction, IPostInitiationState } from '../../interfaces';

const initiationState: IPostInitiationState = {
    isLoading: false,
    error: '',
    posts: [],
};

const postReducer = (state = initiationState, action: IPostAction):IPostInitiationState => {
    switch (action.type) {
        case EPostAction.FETCH_POST:
            return { ...state, isLoading: true };
        case EPostAction.FETCH_POST_SUCCESS:
            return { ...state, posts: action.payload, isLoading: false };
        case EPostAction.FETCH_POST_ERROR:
            return { ...state, error: action.payload, isLoading: false };
        default:
            return { ...state };
    }
};

export { postReducer };
