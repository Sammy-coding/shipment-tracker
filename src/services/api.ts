import clientRequest from './queryClient';
import {ILoginReq} from '../modules/auth/dto/login.data';

export default {
  auth: {
    login(data: ILoginReq) {
      const path: string = '/login';
      return clientRequest('POST', path, data);
    },
  },
};
