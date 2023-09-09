import { IUserResponse, IUserWithRegister } from './user.interface';

interface IToken {
    access:string
    refresh:string
}
export enum EAuthAction {
    LOGIN='LOGIN',
    LOGIN_ERROR='LOGIN_ERROR',
    LOGIN_SUCCESS='LOGIN_SUCCESS',
    REGISTER='REGISTER',
    REGISTER_ERROR='REGISTER_ERROR',
    REGISTER_SUCCESS='REGISTER_SUCCESS',
    OUT='OUT'
}

interface ILogin {
    type:EAuthAction.LOGIN
}
interface ILoginSuccess {
    type:EAuthAction.LOGIN_SUCCESS
    payload:IUserResponse
}
interface ILoginError {
    type:EAuthAction.LOGIN_ERROR
    payload:string
}
interface IRegister {
    type:EAuthAction.REGISTER
}
interface IRegisterSuccess {
    type:EAuthAction.REGISTER_SUCCESS
    payload:IUserWithRegister
}
interface IRegisterError {
    type:EAuthAction.REGISTER_ERROR
    payload:string
}
interface IOut {
    type:EAuthAction.OUT
}
type IAuthAction = ILogin | ILoginSuccess | ILoginError | IRegister | IRegisterSuccess | IRegisterError | IOut
interface IAuthState {
    user:IUserResponse
    isLoading: boolean
    error: string
    userWithRegister:IUserWithRegister
}
export type { IToken, IAuthAction, IAuthState };
