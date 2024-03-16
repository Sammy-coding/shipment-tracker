import {configureStore} from '@reduxjs/toolkit';
import authSlice from '../modules/auth/store/reducer/index';

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export default store;
