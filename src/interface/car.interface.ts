export interface ICar {
    id?:number
    brand:string
    price:number
    year:number
}
export enum ECarAction {
    FETCH_CAR = 'FETCH_CAR',
    FETCH_CAR_ERROR = 'FETCH_CAR_ERROR',
    FETCH_CAR_DELETE = 'FETCH_CAR_DELETE',
    FETCH_CAR_UPDATE = 'FETCH_CAR_UPDATE',
    FETCH_CAR_SUCCESS = 'FETCH_CAR_SUCCESS',
    SET_CAR = 'SET_CAR'
}
interface IFetchCar {
    type:ECarAction.FETCH_CAR
}
interface IFetchCarError {
    type:ECarAction.FETCH_CAR_ERROR
    payload:string
}
interface IFetchCarDelete {
    type:ECarAction.FETCH_CAR_DELETE
    payload:ICar[]
}
interface IFetchCarUpdate {
    type:ECarAction.FETCH_CAR_UPDATE
    payload:ICar[]
}
interface IFetchCarSuccess {
    type:ECarAction.FETCH_CAR_SUCCESS
    payload:ICar[]
}
interface ISetCar {
    type:ECarAction.SET_CAR
    payload: ICar
}
export type ICarAction = IFetchCar | IFetchCarDelete | IFetchCarError | IFetchCarUpdate | IFetchCarSuccess | ISetCar;
export interface ICarInitiationState {
    isLoading: boolean
    error: string
    cars: ICar[]
    car: ICar | null
}
