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

export enum EFetchUserAction {
    FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
    FETCH_USER_ERROR = 'FETCH_USER_ERROR',
    FETCH_USER = 'FETCH_USER'
}

interface IFetchUsers {
    type:EFetchUserAction.FETCH_USER
}
interface IFetchUsersError {
    type:EFetchUserAction.FETCH_USER_ERROR
    payload: string
}
interface IFetchUsersSuccess {
    type:EFetchUserAction.FETCH_USER_SUCCESS
    payload: IUser[]
}
export interface IUserInitialState {
    users: IUser[]
    isLoading: boolean
    error: string
}

export type IUserAction = IFetchUsers | IFetchUsersError | IFetchUsersSuccess
