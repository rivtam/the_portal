import { createSlice } from '@reduxjs/toolkit';

const initAuthState = { isLogon: false, username: '' };

const authSlice = createSlice({
  name: 'auth',
  initialState: initAuthState,
  reducers: {
    logon(state, payload) {
      // logic to validate the auth details
      const { username, password } = payload;
      state.isLogon = true;
    },
    logoff(state) {
      state.isLogon = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
