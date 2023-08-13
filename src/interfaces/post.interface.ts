export interface IPost {
    userId: number
    id: number
    title: string
    body: string
}
export enum EPostAction {
    FETCH_POST='FETCH_POST',
    FETCH_POST_ERROR='FETCH_POST_ERROR',
    FETCH_POST_SUCCESS='FETCH_POST_SUCCESS',
}
interface IFetchPost {
    type: EPostAction.FETCH_POST
}
interface IFetchPostError {
    type: EPostAction.FETCH_POST_ERROR
    payload: string
}
interface IFetchPostSuccess {
    type: EPostAction.FETCH_POST_SUCCESS
    payload: IPost[]
}
export type IPostAction = IFetchPost | IFetchPostError | IFetchPostSuccess;
export interface IPostInitiationState{
    isLoading: boolean
    error: string
    posts: IPost[]
}
