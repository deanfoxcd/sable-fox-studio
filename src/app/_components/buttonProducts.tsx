'use client';

import { Button } from 'flowbite-react';
import { useState } from 'react';
import { deleteCartItem } from '../_lib/cartActions';
import { getGuestId } from '../_lib/guestId';
import { useAddToCart } from '../hooks/useCart';
import { customTheme } from '../styles/themes';

interface ButtonProps {
  children: string;
  role: string;
  productId: string | undefined;
  onEdit?: () => void;
  onCartUpdate?: (() => void) | undefined;
}

const ButtonProducts: React.FC<ButtonProps> = function ({
  children,
  role,
  productId,
  onEdit,
  onCartUpdate,
}) {
  const { mutate: addToCart, isPending } = useAddToCart();

  const handleClick = async () => {
    const guestId = getGuestId();

    if (role === 'admin') {
      if (productId) onEdit?.();
    } else if (role === 'shop' && productId) {
      addToCart({ guestId, productId });
    } else if (role === 'cart' && productId) {
      try {
        await deleteCartItem(productId, guestId);
        onCartUpdate?.();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <Button
      color='alternative'
      pill
      theme={customTheme.button}
      onClick={handleClick}
      disabled={isPending}
    >
      {children}
    </Button>
  );
};

export default ButtonProducts;
