import { UUIDTypes } from 'uuid';

export interface Product {
  name: string;
  price: number;
  description: string;
  id?: string;
}
