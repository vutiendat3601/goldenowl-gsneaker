import classNames from 'classnames/bind';
import useShoppingCart from '../../hooks/useShoppingCart';
import { Product } from '../../models/Product';
import style from './ProductCard.module.scss';

import CheckIcon from '../../assets/icon/check.png';
import { addItem } from '../../reducers/shoping-cart-reducer';

const css = classNames.bind(style);

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps): JSX.Element {
  const { dispatchShoppingCart, items } = useShoppingCart();

  return (
    <section className={css('product-card')}>
      <div
        className={css('thumb-bg')}
        style={{ background: `${product.color}` }}
      >
        <img className={css('thumb')} src={product.image} alt="" />
      </div>
      <h2 className={css('name')}>{product.name}</h2>
      <p className={css('description')}>{product.description}</p>
      <footer className={css('footer')}>
        <p className={css('price')}>${product.price}</p>
        {items.find((cartItem) => cartItem.productId === product.id) ? (
          <div className={css('in-cart')}>
            <img className={css('check-icon')} src={CheckIcon} alt="" />
          </div>
        ) : (
          <button
            className={css('cta')}
            onClick={() => addItem(dispatchShoppingCart, product)}
          >
            ADD TO CART
          </button>
        )}
      </footer>
    </section>
  );
}

export default ProductCard;
