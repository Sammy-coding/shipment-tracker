import {configureStore} from '@reduxjs/toolkit';
import authSlice from '../modules/auth/store/reducer/index';
import shipmentSlice from '../modules/shipments/store/reducer/shipment.slice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    shipment: shipmentSlice,
  },
});

export default store;
