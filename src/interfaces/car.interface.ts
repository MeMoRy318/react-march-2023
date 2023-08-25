interface ICarResponse {
    id: number
    brand: string
    price: number
    year: number
    photo?: string
}

type ICarRequest = Omit<ICarResponse, 'id'>

interface IPaginationResult<T> {
    total_items: number
    total_pages: number
    prev?: string
    next?: string
    items: T[]
}

interface IPagination {
    page:number
    page_size: number
}

export type { ICarResponse, ICarRequest, IPaginationResult, IPagination };
