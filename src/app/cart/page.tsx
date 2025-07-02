'use client';

import { useCallback, useEffect, useState } from 'react';
import ProductCard from '../_components/productCard';
import { emptyCart, getCart } from '../_lib/cartActions';
import { getGuestId } from '../_lib/guestId';
import { CartItem, Product } from '../types';
import { Button } from 'flowbite-react';
import { customTheme } from '../styles/themes';
import Link from 'next/link';
import { getProductById } from '../_lib/productActions';

const Cart: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [guestId, setGuestId] = useState<string | null>(null);
  const [loadingCart, setLoadingCart] = useState(true);
  const [loadingProducts, setLoadingProducts] = useState(true);

  useEffect(() => {
    setGuestId(getGuestId());
  }, []);

  const fetchCartData = useCallback(async () => {
    if (!guestId) return;
    setLoadingCart(true);
    const cartData = await getCart(guestId);
    setCart(cartData || []);
    console.log(cartData);
    setLoadingCart(false);
  }, [guestId]);

  useEffect(() => {
    if (!guestId) return;
    setLoadingCart(true);
    getCart(guestId).then((cartData) => {
      setCart(cartData || []);
      setLoadingCart(false);
    });
  }, [guestId]);

  useEffect(() => {
    setLoadingProducts(true);
    if (cart.length === 0) {
      setCartProducts([]);
      setLoadingProducts(false);
      return;
    }
    Promise.all(
      cart.map((item) => getProductById(Number(item.product_id)))
    ).then((products) => {
      setCartProducts(products);
      setLoadingProducts(false);
    });
  }, [cart]);

  const handleEmptyCart = async () => {
    if (!guestId) return;
    await emptyCart(guestId);
    setCart([]);
    await fetchCartData();
  };

  const loading = loadingCart || loadingProducts;
  if (loading) {
    return (
      <div className='flex justify-center items-center min-h-screen text-2xl text-white'>
        Loading your cart...
      </div>
    );
  }

  return (
    <div className='text-white min-h-screen'>
      {cart.length === 0 ? (
        <div className='flex justify-center items-center h-full mt-20 text-2xl'>
          <span>
            Your cart is empty. Head to our{' '}
            <Link
              href='/shop'
              className='underline text-blue-400'
            >
              shop
            </Link>{' '}
            to start adding goodies
          </span>
        </div>
      ) : (
        <>
          <ul className='flex flex-wrap justify-center mt-6'>
            {cartProducts.map((product, index) => (
              <li
                key={product.id}
                className='p-6'
              >
                <ProductCard
                  product={product}
                  role='cart'
                  quantity={cart[index]?.quantity}
                  onCartUpdate={fetchCartData}
                />
              </li>
            ))}
          </ul>
          <div className='flex justify-center items-center mt-6'>
            <Button
              color='alternative'
              pill
              theme={customTheme.button}
              onClick={handleEmptyCart}
            >
              Empty cart
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
