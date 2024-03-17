import { combineReducers } from '@reduxjs/toolkit';
import { ApiSlice } from '../../api/ApiSlice';
import { loginSlice } from '../login/LoginSlice';

export const reducers = combineReducers({
  [ApiSlice.reducerPath]: ApiSlice.reducer,
  login: loginSlice.reducer,
});

export type RootState = ReturnType<typeof reducers>;
