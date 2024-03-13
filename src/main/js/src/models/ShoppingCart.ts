import { Product } from './Product';

interface CartItem {
  product: Product;
  quantity: number;
}

interface ShoppingCart {
  items: CartItem[];
  subtotal: number;
}

export type { ShoppingCart };
