import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { IAppDispatch, IRootState } from '../redux';

const useAppSelector:TypedUseSelectorHook<IRootState> = useSelector;

const useAppDispatch = () => useDispatch<IAppDispatch>();

export { useAppDispatch, useAppSelector };
