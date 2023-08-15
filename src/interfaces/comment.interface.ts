export interface IComment {
    postId: number
    id: number
    name: string
    email: string
    body: string
}
export enum ECommentAction {
    FETCH_COMMENT='FETCH_COMMENT',
    FETCH_COMMENT_ERROR='FETCH_COMMENT_ERROR',
    FETCH_COMMENT_SUCCESS='FETCH_COMMENT_SUCCESS',
    COMMENT_DID_UNMOUNT='COMMENT_DID_UNMOUNT',
}
interface ICommentDidUnmount {
    type:ECommentAction.COMMENT_DID_UNMOUNT
}
interface IFetchComment {
    type:ECommentAction.FETCH_COMMENT
}
interface IFetchCommentError {
    type: ECommentAction.FETCH_COMMENT_ERROR
    payload: string
}
interface IFetchCommentSuccess{
    type: ECommentAction.FETCH_COMMENT_SUCCESS
    payload: IComment[]
}
export type ICommentAction = IFetchComment | IFetchCommentError | IFetchCommentSuccess | ICommentDidUnmount;

export interface ICommentInitiationState {
    isLoading: boolean
    error: string
    comments: IComment[]
}
