'use client';

import { Button } from 'flowbite-react';
import { useState } from 'react';
import {
  addToCart,
  deleteCartItem,
  getCart,
  updateCartItem,
} from '../_lib/cartActions';
import { getGuestId } from '../_lib/guestId';
import { customTheme } from '../styles/themes';

interface ButtonProps {
  children: string;
  role: string;
  productId: string | undefined;
  onEdit?: () => void;
  onCartUpdate: (() => void) | undefined;
}

const ButtonProducts: React.FC<ButtonProps> = function ({
  children,
  role,
  productId,
  onEdit,
  onCartUpdate,
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
    } else if (role === 'cart' && productId) {
      try {
        await deleteCartItem(productId, guestId);
        console.log('After delete, calling cartUpdate');
        onCartUpdate?.();
      } catch (error) {
        console.log('Error in delete operation:', error);
      }
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
