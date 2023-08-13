interface IGeoLocation {
    lat: string
    lng: string
}

interface IAddress {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: IGeoLocation
}

interface ICompany {
    name: string
    catchPhrase: string
    bs: string
}

export interface IUser {
    id: number
    name: string
    username: string
    email: string
    address: IAddress
    phone: string
    website: string
    company: ICompany
}

export enum EUserAction {
    FETCH_USER = 'FETCH_USER',
    FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
    FETCH_USER_ERROR = 'FETCH_USER_ERROR',
}
interface IFetchUser {
    type:EUserAction.FETCH_USER
}
interface IFetchUserSuccess {
    type: EUserAction.FETCH_USER_SUCCESS
    payload: IUser[]
}
interface IFetchUserError {
    type: EUserAction.FETCH_USER_ERROR
    payload: string
}

export type IUserAction = IFetchUser | IFetchUserSuccess | IFetchUserError
export interface IUserInitiationState {
    isLoading: boolean
    users: IUser[]
    error: string
}
