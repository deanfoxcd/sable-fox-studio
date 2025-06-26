'use client';

import { Button } from 'flowbite-react';
import { useState } from 'react';
import {
  // addToCart,
  deleteCartItem,
  getCart,
  updateCartItem,
} from '../_lib/cartActions';
import { getGuestId } from '../_lib/guestId';
import { customTheme } from '../styles/themes';
import { useAddToCart } from '../hooks/useCart';

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
  const [isWorking, setIsWorking] = useState(false);

  const { mutate: addToCart, isPending } = useAddToCart();

  const handleClick = async () => {
    const guestId = getGuestId();
    if (role === 'admin') {
      if (productId) onEdit?.();
    } else if (role === 'shop' && productId) {
      setIsWorking(true);

      const cart = await getCart(guestId);

      if (cart) {
        const item = cart.find((item) => item.product_id === productId);
        if (item) {
          await updateCartItem(guestId, productId, item.quantity + 1);
        } else {
          // await addToCart(guestId, productId);
          addToCart({ guestId, productId });
        }
      } else {
        // await addToCart(guestId, productId);
        addToCart({ guestId, productId });
      }

      setIsWorking(false);
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
      disabled={isWorking}
    >
      {children}
    </Button>
  );
};

export default ButtonProducts;
