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
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const guestId = getGuestId();

  const fetchCartData = useCallback(async () => {
    const cartData = await getCart(guestId);
    // const cartData = data?.cartItems;

    if (cartData) {
      const newQuantities: Record<string, number> = {};
      cartData.forEach((product) => {
        if (product.id) {
          newQuantities[product.id] = (newQuantities[product.id] || 0) + 1;
        }
      });
      setQuantities(newQuantities);

      const uniqueProducts = cartData.filter(
        (prod, i, self) => i === self.findIndex((p) => p.id === prod.id)
      );
      setCart(uniqueProducts);
    }
  }, [guestId]);

  useEffect(() => {
    fetchCartData();
  }, [fetchCartData]);

  const handleEmptyCart = async () => {
    await emptyCart(guestId);

    setCart([]);
    setQuantities({});

    await fetchCartData();
  };

  const getProduct = async (productId: string) => {
    const product = await getProductById(Number(productId));
    return product;
  };

  return (
    <div className='text-white min-h-screen'>
      {cart.length === 0 && (
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
      )}

      <ul className='flex flex-wrap  justify-center mt-6'>
        {cart?.map(async (item) => {
          const product = await getProduct(item.product_id);
          return (
            <li
              key={product.id}
              className='p-6'
            >
              <ProductCard
                product={product}
                role='cart'
                quantity={quantities[product.id as string] || 0}
                onCartUpdate={fetchCartData}
              />
            </li>
          );
        })}
      </ul>
      <div className='flex justify-center items-center mt-6'>
        {cart.length > 0 && (
          <Button
            color='alternative'
            pill
            theme={customTheme.button}
            onClick={handleEmptyCart}
          >
            Empty cart
          </Button>
        )}
      </div>
    </div>
  );
};

export default Cart;
