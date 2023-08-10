import { IUser } from './user.interface';

export enum EUserAction {
    FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
    FETCH_USER_ERROR = 'FETCH_USER_ERROR',
    FETCH_USER = 'FETCH_USER'
}
export interface IState {
    users: IUser[]
    error: string
    isLoading: boolean
}
interface IFetchUserAction {
    type:EUserAction.FETCH_USER
}
interface IFetchUsersSuccessAction {
    type:EUserAction.FETCH_USER_SUCCESS
    payload:IUser[]
}
interface IFetchUsersErrorAction {
    type:EUserAction.FETCH_USER_ERROR
    payload:string
}

export type IAction  = IFetchUserAction | IFetchUsersErrorAction | IFetchUsersSuccessAction
