import {createSlice} from '@reduxjs/toolkit';
import {AuthState} from '../state/state';
import {login} from '../actions/action.creator';

const authSlice = createSlice({
  name: 'auth',
  initialState: AuthState,
  reducers: {
    clearError: state => {
      state.error = null;
      state.isAuthFailure = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isAuthSuccess = true;
      state.loading = false;
    });
    builder.addCase(login.pending, state => {
      state.loading = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message as string;
      state.isAuthFailure = true;
    });
  },
});

export const {clearError} = authSlice.actions;
export default authSlice.reducer;
