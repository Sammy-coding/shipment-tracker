export interface IShipmentReq {
  doctype: string;
  fields: string[];
  filters?: {
    name: string[];
  };
}

// name',
//     'destination_city',
//     'destination_area',
//     'origin_city',
//     'destination_state',
//     'origin_state',
//     'sender_phone',
//     'origin_area',
//     'status',
// name: ['like', '%add_search_term_here%'];
// doctype: awb
