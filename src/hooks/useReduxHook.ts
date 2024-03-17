import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { AppDispatch } from '../store';
import { RootState } from '../store/redusers/rootRedusers';

export const useReduxDispatch = () => useDispatch<AppDispatch>();
export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;
