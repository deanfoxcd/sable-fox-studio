'use client';

import { useEffect, useState } from 'react';
import { UUIDTypes } from 'uuid';

import { updateCartItem } from '../_lib/cartActions';

interface QuantityPickerProps {
  quantity: number;
  productId: string;
  guestId: UUIDTypes;
}

const QuantityPicker: React.FC<QuantityPickerProps> = function ({
  quantity,
  productId,
  guestId,
}) {
  const [qty, setQty] = useState<number>(quantity || 1);

  const onQuantityChange = (newValue: number) => {
    setQty(newValue);
  };

  useEffect(() => {
    updateCartItem(guestId, productId, qty);
  }, [qty, guestId, productId]);

  return (
    <form className='max-w-xs mx-auto'>
      <label
        htmlFor='quantity-input'
        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
      ></label>
      <div className='relative flex items-center max-w-[8rem]'>
        <button
          type='button'
          id='decrement-button'
          data-input-counter-decrement='quantity-input'
          className='bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg px-3 h-8 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none '
          onClick={() => onQuantityChange(qty - 1)}
        >
          -
        </button>

        <input
          type='text'
          id='quantity-input'
          data-input-counter
          data-input-counter-min='1'
          data-input-counter-max='10'
          className='border-x-0 border border-gray-300 h-8 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          value={qty}
          onChange={(e) => {
            const value = parseInt(e.target.value);
            if (!isNaN(value)) {
              onQuantityChange(value);
            }
          }}
          required
        />

        <button
          type='button'
          id='increment-button'
          data-input-counter-increment='quantity-input'
          className='bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg px-3 h-8 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
          onClick={() => onQuantityChange(qty + 1)}
        >
          +
        </button>
      </div>
    </form>
  );
};

export default QuantityPicker;
