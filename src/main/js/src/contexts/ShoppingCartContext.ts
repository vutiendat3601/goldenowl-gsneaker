import { createContext } from 'react';
import { Product } from '../models/Product';
import { ShoppingCartAction } from '../reducers/shoping-cart-reducer';

interface CartItem {
  productId: number;
  product: Product;
  quantity: number;
}

interface ShoppingCart {
  items: CartItem[];
  subtotal: number;
  dispatchShoppingCart: React.Dispatch<ShoppingCartAction>;
}

const ShoppingCartContext = createContext<ShoppingCart>({
  items: [],
  subtotal: 0,
  dispatchShoppingCart: () => {},
});

export type { ShoppingCart, CartItem };
export default ShoppingCartContext;
