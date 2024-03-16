import {createAsyncThunk} from '@reduxjs/toolkit';
import {GET_ALL_SHIPPMENTS, GET_SHIPMENTS_STATUS} from './actions';
import clientRequest from '../../../../services/api';
import {IShipmentReq} from '../../dto';

export const shipment = createAsyncThunk(
  GET_ALL_SHIPPMENTS,
  async (data: IShipmentReq, thunkApi) => {
    const response = await clientRequest.shipment.retrieve(data);
    return response?.data?.message;
  },
);

export const shipmentStatus = createAsyncThunk(
  GET_SHIPMENTS_STATUS,
  async (data: IShipmentReq, thunkApi) => {
    const response = await clientRequest.shipment.retrieve(data);
    return response.data;
  },
);
