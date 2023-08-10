import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { IRootState } from '../reduxCore';

export const useMySelector:TypedUseSelectorHook<IRootState> = useSelector;
