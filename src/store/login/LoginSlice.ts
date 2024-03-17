import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
  token: string | null;
  isAuthenticated: boolean;
  role: any | null;
}

const initialState: LoginState = {
  token: null,
  isAuthenticated: false,
  role: null,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginSuccess, logout } = loginSlice.actions;

export default loginSlice.reducer;
