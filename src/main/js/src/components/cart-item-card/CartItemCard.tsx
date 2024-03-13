import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import RemoveIcon from '../../assets/icon/trash.png';
import { CartItem } from '../../contexts/ShoppingCartContext';
import useShoppingCart from '../../hooks/useShoppingCart';
import {
  changeItemQuantity,
  removeItem,
} from '../../reducers/shoping-cart-reducer';
import style from './CartItemCard.module.scss';

const css = classNames.bind(style);

interface CartItemCardProps {
  cartItem: CartItem;
}

function CartItemCard({
  cartItem: { product, productId, quantity },
}: CartItemCardProps): JSX.Element {
  const { dispatchShoppingCart } = useShoppingCart();
  const [hidden, setHidden] = useState<boolean>(true);
  const [infoHidden, setInfoHidden] = useState<boolean>(true);

  useEffect(() => {
    setHidden(false);
    setTimeout(() => {
      setInfoHidden(false);
    }, 400);
  }, []);

  function handleRemoveItem(productId: number) {
    setHidden(true);
    setTimeout(() => {
      removeItem(dispatchShoppingCart, productId);
    }, 300);
  }

  function handleDecreaseItem(productId: number, currentQuantity: number) {
    if (currentQuantity === 1) {
      setHidden(true);
      setTimeout(() => {
        changeItemQuantity(dispatchShoppingCart, productId);
      }, 300);
    } else {
      changeItemQuantity(dispatchShoppingCart, productId);
    }
  }

  return (
    <section className={css('cart-item-card', { hidden })}>
      <div
        className={css('thumb-bg')}
        style={{ background: `${product.color}` }}
      >
        <img className={css('thumb')} src={product.image} alt="" />
      </div>
      <div className={css('info', { hidden: infoHidden })}>
        <h2 className={css('name')}>{product.name}</h2>
        <p className={css('price')}>${product.price}</p>
        <div className={css('action')}>
          <button
            className={css('action-btn')}
            onClick={() => handleDecreaseItem(productId, quantity)}
          >
            -
          </button>
          <span className={css('quantity')}>{quantity}</span>
          <button
            className={css('action-btn')}
            onClick={() =>
              changeItemQuantity(dispatchShoppingCart, productId, true)
            }
          >
            +
          </button>
          <button
            className={css('action-btn', 'remove-btn')}
            onClick={() => handleRemoveItem(productId)}
          >
            <img src={RemoveIcon} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default CartItemCard;
