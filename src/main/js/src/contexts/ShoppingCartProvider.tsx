import { useEffect, useReducer } from 'react';
import shoppingCartReducer, {
  initCart,
} from '../reducers/shoping-cart-reducer';
import ShoppingCartContext, { CartItem } from './ShoppingCartContext';
import { getObject } from '../utils/local-storage';

interface ShopingCartProviderProps {
  children: any;
}

function ShoppingCartProvider({
  children,
}: ShopingCartProviderProps): JSX.Element {
  const [shopingCartContext, dispatchShoppingCart] = useReducer(
    shoppingCartReducer,
    { items: [], subtotal: 0 }
  );
  const { items, subtotal } = shopingCartContext;

  useEffect(() => {
    const cart = getObject<{ items: CartItem[]; subtotal: number }>('cart');
    if (cart) {
      initCart(dispatchShoppingCart, cart);
    }
  }, []);

  return (
    <ShoppingCartContext.Provider
      value={{ items, subtotal, dispatchShoppingCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;
