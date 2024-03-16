import {createAsyncThunk} from '@reduxjs/toolkit';
import {LOGIN} from './action';
import clientRequest from '../../../../services/api';
import {ILoginReq} from '../../dto/login.data';

export const login = createAsyncThunk(
  LOGIN,
  async (data: ILoginReq, thunkApi) => {
    console.log(data, 'data from login');
    const response = await clientRequest.auth.login(data);
    console.log(response);
    return response.data;
  },
);
