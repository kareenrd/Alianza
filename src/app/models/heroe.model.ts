export interface Client {
  id: string;
  sharedKey: string;
  businessId: string;
  email: string;
  phone: number;
  startDate: string;
  endDate: string;
  create: string;
  update: string;
}

export interface Logs{
  id: number;
  log: string;
  create: string;
}
