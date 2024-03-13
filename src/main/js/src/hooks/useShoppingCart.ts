import { useContext } from 'react';
import ShoppingCartContext from '../contexts/ShoppingCartContext';

function useShoppingCart() {
  const shoppingCartContext = useContext(ShoppingCartContext);
  return shoppingCartContext;
}

export default useShoppingCart;
