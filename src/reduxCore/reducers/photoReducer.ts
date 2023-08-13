import { EPhotoAction, IPhotoAction, IPhotoInitiationState } from '../../interfaces';

const initiationState:IPhotoInitiationState = {
    isLoading: false,
    error: '',
    photos: [],
};

const photoReducer = (state = initiationState, action: IPhotoAction):IPhotoInitiationState => {
    switch (action.type) {
        case EPhotoAction.FETCH_PHOTO:
            return { ...state, isLoading: true };
        case EPhotoAction.FETCH_PHOTO_SUCCESS:
            return { ...state, isLoading: false, photos: action.payload };
        case EPhotoAction.FETCH_PHOTO_ERROR:
            return { ...state, isLoading: false, error: action.payload };
    }
    return  state;
};

export { photoReducer };
