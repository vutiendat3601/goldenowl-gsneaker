import { CartItem } from '../contexts/ShoppingCartContext';
import { Product } from '../models/Product';
import { saveObject } from '../utils/local-storage';

interface ShoppingCartPayload {
  items?: CartItem[];
  subtotal?: number;
  productId?: number;
  product?: Product;
}

interface ShoppingCartAction {
  type: 'add' | 'increase' | 'decrease' | 'remove' | 'init' | 'save';
  payload: ShoppingCartPayload;
}

interface ShoppingCartProps {
  items: CartItem[];
  subtotal: number;
}

function shoppingCartReducer(
  states: ShoppingCartProps,
  action: ShoppingCartAction
) {
  let items = [...states.items];
  const { type, payload } = action;
  switch (type) {
    case 'save':
      saveObject('cart', { ...states });
      break;
    case 'init':
      if (payload.items !== undefined && payload.subtotal !== undefined) {
        return { items: payload.items, subtotal: payload.subtotal };
      }
      break;
    case 'add':
      if (payload.product) {
        const item = items.find((item) => item.productId === payload.productId);
        if (!item) {
          items.push({
            product: payload.product,
            productId: payload.product.id,
            quantity: 1,
          });
          states.subtotal += payload.product.price;
          return { ...states, items };
        }
      }
      break;
    case 'remove':
      if (payload.productId) {
        const item = items.find((item) => item.productId === payload.productId);
        if (item) {
          items = items.filter((item) => item.productId !== payload.productId);
          states.subtotal -= item.product.price * item.quantity;
          return { ...states, items };
        }
      }
      break;
    case 'increase':
      if (payload.productId) {
        const item = items.find((item) => item.productId === payload.productId);
        if (item) {
          item.quantity++;
          states.subtotal += item.product.price;
          return { ...states, items };
        }
      }
      break;
    case 'decrease':
      if (payload.productId) {
        const item = items.find((item) => item.productId === payload.productId);
        if (item) {
          item.quantity--;
          states.subtotal -= item.product.price;

          console.log(item.quantity);
          if (item.quantity <= 0) {
            console.log('year');
            items = items.filter(
              (item) => item.productId !== payload.productId
            );
          }
          return { ...states, items };
        }
      }
      break;
  }
  return states;
}

function changeItemQuantity(
  dispatchShoppingCart: React.Dispatch<ShoppingCartAction>,
  productId: number,
  isIncrease: boolean = false
) {
  dispatchShoppingCart({
    type: isIncrease ? 'increase' : 'decrease',
    payload: { productId },
  });
  saveCart(dispatchShoppingCart);
}

function addItem(
  dispatchShoppingCart: React.Dispatch<ShoppingCartAction>,
  product: Product
) {
  dispatchShoppingCart({ type: 'add', payload: { product } });
  saveCart(dispatchShoppingCart);
}

function removeItem(
  dispatchShoppingCart: React.Dispatch<ShoppingCartAction>,
  productId: number
) {
  dispatchShoppingCart({ type: 'remove', payload: { productId } });
  saveCart(dispatchShoppingCart);
}

function initCart(
  dispatchShoppingCart: React.Dispatch<ShoppingCartAction>,
  cart: { items: CartItem[]; subtotal: number }
) {
  dispatchShoppingCart({ type: 'init', payload: cart });
}

function saveCart(dispatchShoppingCart: React.Dispatch<ShoppingCartAction>) {
  dispatchShoppingCart({ type: 'save', payload: {} });
}

export type { ShoppingCartAction, ShoppingCartProps };

export { changeItemQuantity, addItem, removeItem, saveCart, initCart };

export default shoppingCartReducer;
