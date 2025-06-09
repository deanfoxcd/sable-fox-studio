'use client';

import { Button } from 'flowbite-react';
import { addToCart, getCart, updateCartItem } from '../_lib/cartActions';
import { customTheme } from '../styles/themes';
import { useState } from 'react';
import { getGuestId } from '../_lib/guestId';

interface ButtonProps {
  children: string;
  admin: boolean;
  productId: string | undefined;
  onEdit?: () => void;
}

const ButtonProducts: React.FC<ButtonProps> = function ({
  children,
  admin,
  productId,
  onEdit,
}) {
  const [isAdding, setIsAdding] = useState(false);

  const handleClick = async () => {
    if (admin) {
      if (productId) onEdit?.();
    } else if (productId) {
      setIsAdding(true);

      const guestId = getGuestId();
      console.log(guestId);
      const cart = await getCart(guestId);

      if (cart) {
        const item = cart.find((item) => item.product_id === productId);
        if (item) {
          const updatedItem = await updateCartItem(
            guestId,
            productId,
            item.quantity + 1
          );
          console.log('Updated cart item:', updatedItem);
        } else {
          const newItem = await addToCart(guestId, productId);
          console.log('Added to cart:', newItem);
        }
      } else {
        const newItem = await addToCart(guestId, productId);
        console.log('Added to cart:', newItem);
      }

      setIsAdding(false);
    }
  };

  return (
    <Button
      color='alternative'
      pill
      theme={customTheme.button}
      onClick={handleClick}
      disabled={isAdding}
    >
      {children}
    </Button>
  );
};

export default ButtonProducts;
