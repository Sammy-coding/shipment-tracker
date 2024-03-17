import {createAsyncThunk} from '@reduxjs/toolkit';
import {LOGIN} from './action';
import clientRequest from '../../../../services/api';
import {ILoginReq} from '../../dto/login.data';

export const login = createAsyncThunk(LOGIN, async (data: ILoginReq) => {
  const response = await clientRequest.auth.login(data);
  return response.data;
});
