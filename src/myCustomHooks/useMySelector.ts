import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { IRootState } from '../redux';

export const useMySelector:TypedUseSelectorHook<IRootState> = useSelector;
