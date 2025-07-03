'use client';

import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BsCart3 } from 'react-icons/bs';

import { getGuestId } from '../_lib/guestId';
import { useCart } from '../hooks/useCart';

const FloatingCart: React.FC = function () {
  const [guestId, setGuestId] = useState<string | null>(null);

  const { data: cart, refetch } = useCart(guestId ?? '');

  let cartQuantity = 0;
  cart?.map((item) => {
    cartQuantity += item.quantity;
  });

  useEffect(() => {
    setGuestId(getGuestId());
  }, []);

  useEffect(() => {
    if (guestId) {
      refetch();
    }
  }, [guestId, refetch]);

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
