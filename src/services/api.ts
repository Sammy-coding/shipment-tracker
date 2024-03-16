import clientRequest from './queryClient';
import {ILoginReq} from '../modules/auth/dto/login.data';
import {IShipmentReq} from '../modules/shipments/dto';

export default {
  auth: {
    login(data: ILoginReq) {
      const path: string = '/login';
      return clientRequest('POST', path, data);
    },
  },
  shipment: {
    retrieve(data: IShipmentReq) {
      const path: string = '/frappe.client.get_list';
      return clientRequest('POST', path, data);
    },
  },
};
