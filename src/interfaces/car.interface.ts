
interface ICar {
    id: number
    brand: string
    price: number
    year: number
}

type ICarForm = Omit<ICar, 'id'>

interface ICarResponse {
    total_items: number
    total_pages: number
    prev?: string
    next?: string
    items: ICar[]
}

export enum ECarAction {
    FETCH_CAR='FETCH_CAR',
    FETCH_CAR_SUCCESS='FETCH_CAR_SUCCESS',
    FETCH_CAR_ERROR='FETCH_CAR_ERROR',
    SET_CAR='SET_CAR'
}
interface IFetchCar {
    type:ECarAction.FETCH_CAR
}

interface IFetchCarSuccess {
    type:ECarAction.FETCH_CAR_SUCCESS
    payload:ICar[]
}

interface IFetchCarError {
    type:ECarAction.FETCH_CAR_ERROR
    payload:string
}

interface ISetCar {
    type:ECarAction.SET_CAR
    payload:ICar
}
type ICarAction = IFetchCarSuccess | IFetchCarError | IFetchCar | ISetCar
interface ICarInitialState {
    isLoading: boolean
    isError: string
    cars: ICar[]
    car:ICar
}

export type { ICar, ICarForm, ICarAction, ICarInitialState, ICarResponse };
