import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import store from '../../store';
import {Action, ThunkDispatch} from '@reduxjs/toolkit';

type AppState = ReturnType<typeof store.getState>;
type AppDispatch = ThunkDispatch<any, null, Action>;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
