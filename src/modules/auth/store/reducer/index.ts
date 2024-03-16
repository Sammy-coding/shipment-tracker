import {createSlice} from '@reduxjs/toolkit';
import {AuthState} from '../state/state';
import {login} from '../actions/action.creator';

const authSlice = createSlice({
  name: 'auth',
  initialState: AuthState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action) => {
      console.log(action);
      state.data = action.payload;
      state.isAuthSuccess = true;
      state.loading = false;
    });
    builder.addCase(login.pending, state => {
      console.log('pending');
      state.loading = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = action.payload as string;
      state.isAuthFailure = true;
    });
  },
});

export default authSlice.reducer;
