import { ECommentAction, ICommentAction, ICommentInitiationState } from '../../interfaces';

const initiationState: ICommentInitiationState = {
    isLoading: false,
    error: '',
    comments: [],
};

const commentsReducer = (state = initiationState, action: ICommentAction ) => {
    switch (action.type) {
        case ECommentAction.FETCH_COMMENT:
            return { ...state, isLoading: true };
        case ECommentAction.FETCH_COMMENT_SUCCESS:
            return { ...state, isLoading: false, comments: action.payload };
        case ECommentAction.FETCH_COMMENT_ERROR:
            return { ...state, isLoading: false, error: action.payload };
        default:
            return { ...state };
    }
};

export { commentsReducer };
