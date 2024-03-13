import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import NikeIcon from '../../assets/icon/nike.png';
import CartItemCard from '../../components/cart-item-card/CartItemCard';
import ProductCard from '../../components/product-card/ProductCard';
import useShoppingCart from '../../hooks/useShoppingCart';
import { Product } from '../../models/Product';
import productService from '../../services/product-service';
import style from './Home.module.scss';

const css = classNames.bind(style);

function Home(): JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);
  const { dispatchShoppingCart, items, subtotal } = useShoppingCart();
  useEffect(() => {
    async function getProducts() {
      const productsPage = await productService.getProducts();
      setProducts(productsPage.items);
    }
    getProducts();
  }, [dispatchShoppingCart]);

  return (
    <article className={css('home-wrapper')}>
      <div className={css('home-container')}>
        <div className={css('home-content')}>
          <div className={css('home-elememt')}>
            <div className={css('bg')}>
              <div className={css('top')}>
                <img className={css('icon')} src={NikeIcon} alt="" />
              </div>
              <div className={css('head')}>
                <h4 className={`heading-4 ${css('label')}`}>Our Products</h4>
              </div>
              <div className={css('body')}>
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
          <div className={css('home-elememt')}>
            <div className={css('bg')}>
              <div className={css('top')}>
                <img className={css('icon')} src={NikeIcon} alt="" />
              </div>
              <div className={css('head')}>
                <h4 className={`heading-4 ${css('label')}`}>Your cart</h4>
                <p className={css('subtotal')}>
                  ${Math.abs(subtotal).toFixed(2)}
                </p>
              </div>
              <div className={css('body')}>
                {items.length > 0 ? (
                  items.map((item, index) => {
                    return (
                      <CartItemCard
                        key={item.productId}
                        cartItem={item}
                      />
                    );
                  })
                ) : (
                  <p className={css('empty-cart')}>Your cart is empty.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
export default Home;
