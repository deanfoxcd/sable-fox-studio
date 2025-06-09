'use client';

import { useEffect, useState } from 'react';
import { getCart } from '../_lib/cartActions';
import { getGuestId } from '../_lib/guestId';
import { CartItem } from '../types';

const Cart: React.FC = () => {
  const [guestId, setGuestId] = useState<string | null>(null);
  const [cart, setCart] = useState<CartItem[] | null>(null);

  useEffect(() => {
    const id = getGuestId();
    setGuestId(id);

    getCart(id).then((cartData) => {
      setCart(cartData);
      console.log('Cart:', cartData);
    });

    console.log('Guest id:', id);
  }, []);

  return (
    <div>
      <h1 className='min-h-screen'>CART</h1>
      {/* Render cart details here */}
    </div>
  );
};

export default Cart;
