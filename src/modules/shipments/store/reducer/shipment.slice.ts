import {createSlice} from '@reduxjs/toolkit';
import {ShipmentState} from '../state/state';
import {shipment, shipmentStatus} from '../actions/action.creator';

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
      state.error = action.payload
        ? (action.payload as string)
        : 'Something went wrong';
      state.loading = false;
    });
    builder.addCase(shipmentStatus.fulfilled, (state, action) => {
      state.statusData = action.payload;
      state.statusLoading = false;
    });
    builder.addCase(shipmentStatus.rejected, (state, action) => {
      state.statusLoading = false;
      state.statusError = action.payload
        ? (action.payload as string)
        : 'someting went wrong';
    });
    builder.addCase(shipmentStatus.pending, state => {
      state.statusLoading = true;
    });
  },
});

export default shipmentSlice.reducer;
