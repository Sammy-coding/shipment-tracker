import {IShipmentData} from '../../model/shipment.model';

export interface IShipmentState {
  data: IShipmentData | null;
  error: null | string;
  loading: boolean;
}
