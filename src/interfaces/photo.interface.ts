export interface IPhoto {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}
export enum EPhotoAction {
    FETCH_PHOTO='FETCH_PHOTO',
    FETCH_PHOTO_ERROR='FETCH_PHOTO_ERROR',
    FETCH_PHOTO_SUCCESS='FETCH_PHOTO_SUCCESS',
}
interface IFetchPhoto {
    type:EPhotoAction.FETCH_PHOTO
}
interface IFetchPhotoError {
    type:EPhotoAction.FETCH_PHOTO_ERROR
    payload: string
}
interface IFetchPhotoSuccess {
    type:EPhotoAction.FETCH_PHOTO_SUCCESS
    payload: IPhoto[]
}

export type IPhotoAction = IFetchPhoto | IFetchPhotoError | IFetchPhotoSuccess;
export interface IPhotoInitiationState {
    isLoading: boolean
    error: string
    photos: IPhoto[]
}
