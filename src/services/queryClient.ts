import axios from 'axios';
import {shippmentBackend} from './config';

const queryClient = axios.create({
  baseURL: shippmentBackend,
});

export default function clientRequest(
  method: string,
  path: string = '',
  payload: any = {},
) {
  const options = {
    method,
    url: path,
    data: payload,
    // json: true,
  };

  return queryClient(options);
}
