import {IShipmentData} from '../../model/shipment.model';
import {IShipmentStatusData} from '../../model/shipment_status.model';

export interface IShipmentState {
  data: IShipmentData | null;
  error: null | string;
  loading: boolean;
  statusLoading: boolean;
  statusData: IShipmentStatusData | null;
  statusError: null | string;
}
