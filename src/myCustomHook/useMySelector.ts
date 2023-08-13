import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { IRootReducers } from '../reduxCore';

export const useMySelector: TypedUseSelectorHook<IRootReducers> = useSelector;
