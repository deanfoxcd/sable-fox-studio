'use client';

import { useEffect, useState } from 'react';
import ProductCard from '../_components/productCard';
import { getCart } from '../_lib/cartActions';
import { getGuestId } from '../_lib/guestId';
import { Product } from '../types';

const Cart: React.FC = () => {
  const [guestId, setGuestId] = useState<string | null>(null);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const id = getGuestId();
    setGuestId(id);

    getCart(id).then((cartData) => {
      if (cartData) {
        const uniqueProducts = cartData.filter(
          (prod, i, self) => i === self.findIndex((p) => p.id === prod.id)
        );
        setCart(uniqueProducts);
      }
      console.log('Cart:', cartData);
    });

    console.log('Guest id:', id);
  }, []);

  console.log('CartItems:', cart);

  return (
    <div className='text-white min-h-screen'>
      <ul className='flex flex-wrap items-center justify-center mt-6'>
        {cart?.map((product) => (
          <li
            key={product.id}
            className='p-6'
          >
            <ProductCard
              product={product}
              role='cart'
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
