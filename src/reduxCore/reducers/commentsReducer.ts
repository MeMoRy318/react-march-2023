import { ECommentAction, ICommentAction, ICommentInitiationState } from '../../interfaces';

const initiationState: ICommentInitiationState = {
    isLoading: false,
    error: '',
    comments: [],
};

const commentsReducer = (state = initiationState, action: ICommentAction ):ICommentInitiationState => {
    switch (action.type) {
        case ECommentAction.FETCH_COMMENT:
            return { ...state, isLoading: true };
        case ECommentAction.FETCH_COMMENT_SUCCESS:
            return { ...state, isLoading: false, comments: [...state.comments, ...action.payload] };
        case ECommentAction.FETCH_COMMENT_ERROR:
            return { ...state, isLoading: false, error: action.payload };
        case ECommentAction.COMMENT_DID_UNMOUNT:
            return { ...state, comments: [] };
        default:
            return { ...state };
    }
};

export { commentsReducer };
