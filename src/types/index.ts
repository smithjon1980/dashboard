export interface Shipment {
  id: string;
  status: 'delivered' | 'tracking_on_time' | 'at_risk' | 'past_due_not_shipped' | 'past_due_not_delivered';
  carrier: string;
  timestamp: string;
}

export interface Location {
  id: string;
  name: string;
  type: 'Shipper' | 'Receiver';
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  status: 'Active' | 'Inactive';
  openHours: string;
  contactName: string;
  contactPhone: string;
  endDate: string;
}

export interface RoutingLane {
  id: string;
  rateMethod: string;
  origin: string;
  destination: string;
  mode: string;
  compliance: string;
  equipment: string;
}

export interface FinancialStatus {
  status: string;
  count: number;
  amount: number;
  minAmount: number;
  maxAmount: number;
}