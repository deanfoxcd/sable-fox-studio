'use client';

import { BsCart3 } from 'react-icons/bs';
import { getCart } from '../_lib/cartActions';
import { getGuestId } from '../_lib/guestId';
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';

const FloatingCart: React.FC = function () {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [guestId, setGuestId] = useState<string | null>(null);

  useEffect(() => {
    const guestId = getGuestId();
    setGuestId(guestId);
  }, []);

  useEffect(() => {
    async function fetchData() {
      if (!guestId) return;
      const cart = await getCart(guestId);
      console.log(cart);
      setCartQuantity(cart?.length || 0);
    }
    fetchData();
  }, [guestId]);

  return (
    <div
      className='fixed bottom-10 right-10 z-50 text-black border rounded-full p-3 bg-white hover:cursor-pointer'
      onClick={() => {
        redirect('/cart');
      }}
    >
      <BsCart3 className='w-8 h-8' />
      <p className='absolute top-0 right-0 text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center'>
        {cartQuantity}
      </p>
    </div>
  );
};

export default FloatingCart;
