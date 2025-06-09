export interface Product {
  name: string;
  price: number;
  description: string;
  id?: string;
}

export interface CartItem {
  id: string;
  guest_id: string;
  product_id: string;
  quantity: number;
  added_at: string;
}
