'use client';

import { Button } from 'flowbite-react';
import {
  addToCart,
  deleteCartItem,
  getCart,
  updateCartItem,
} from '../_lib/cartActions';
import { customTheme } from '../styles/themes';
import { useState } from 'react';
import { getGuestId } from '../_lib/guestId';

interface ButtonProps {
  children: string;
  role: string;
  productId: string | undefined;
  onEdit?: () => void;
}

const ButtonProducts: React.FC<ButtonProps> = function ({
  children,
  role,
  productId,
  onEdit,
}) {
  const [isWorking, setIsWorking] = useState(false);

  const handleClick = async () => {
    const guestId = getGuestId();
    if (role === 'admin') {
      if (productId) onEdit?.();
    } else if (role === 'shop' && productId) {
      setIsWorking(true);

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

      setIsWorking(false);
    } else if (role === 'cart') {
      if (productId) await deleteCartItem(productId, guestId);
    }
  };

  return (
    <Button
      color='alternative'
      pill
      theme={customTheme.button}
      onClick={handleClick}
      disabled={isWorking}
    >
      {children}
    </Button>
  );
};

export default ButtonProducts;
