import { ECommentAction, ICommentAction, ICommentInitiationState } from '../../interfaces';


const initiationState:ICommentInitiationState = {
    isLoading: false,
    error: '',
    comments: [],
};

const commentReducer = (state = initiationState, action:ICommentAction):ICommentInitiationState => {
    switch (action.type) {
        case ECommentAction.FETCH_COMMENT:
            return { ...state, isLoading: true };
        case ECommentAction.FETCH_COMMENT_SUCCESS:
            return { ...state, isLoading: false, comments: action.payload };
        case ECommentAction.FETCH_COMMENT_ERROR:
            return { ...state, isLoading: false };
    }
    return { ...state };
};

export { commentReducer };
