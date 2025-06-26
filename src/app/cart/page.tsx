'use client';

import { useCallback, useEffect, useState } from 'react';
import ProductCard from '../_components/productCard';
import { getCart } from '../_lib/cartActions';
import { getGuestId } from '../_lib/guestId';
import { Product } from '../types';
import { Button } from 'flowbite-react';
import { customTheme } from '../styles/themes';

const Cart: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const fetchCartData = useCallback(async () => {
    const cartData = await getCart(getGuestId());

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
  }, []);

  useEffect(() => {
    fetchCartData();
  }, [fetchCartData]);

  return (
    <div className='text-white min-h-screen'>
      <ul className='flex flex-wrap  justify-center mt-6'>
        {cart?.map((product) => (
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
        ))}
      </ul>
      <div className='flex justify-center items-center mt-6'>
        <Button
          color='alternative'
          pill
          theme={customTheme.button}
        >
          Empty cart
        </Button>
      </div>
    </div>
  );
};

export default Cart;
