import {createSlice} from '@reduxjs/toolkit';
import {ShipmentState} from '../state/state';
import {shipment} from '../actions/action.creator';

const shipmentSlice = createSlice({
  name: 'shipment',
  initialState: ShipmentState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(shipment.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(shipment.pending, state => {
      state.loading = true;
    });
    builder.addCase(shipment.rejected, (state, action) => {
      state.error = action.payload as string;
      state.loading = false;
    });
  },
});

export default shipmentSlice.reducer;
