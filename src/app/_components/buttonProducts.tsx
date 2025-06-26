'use client';

import { Button } from 'flowbite-react';
import { useState } from 'react';
import {
  // addToCart,
  deleteCartItem,
  getCart,
  getCartItemQuantity,
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

      const data = await getCart(guestId);
      const cart = data?.cartItems;
      console.log('Data:', data);
      console.log('Cart:', cart);

      if (cart) {
        const item = cart.find((item) => item.id === productId); //finds product not cart item
        // console.log('Item:', item);
        if (item) {
          const qty = await getCartItemQuantity(guestId, productId);
          console.log(item.name, qty);
          const newQty = qty + 1;

          await updateCartItem(guestId, productId, newQty);
        } else {
          // await addToCart(guestId, productId);
          addToCart({ guestId, productId, quantity: 1 });
        }
      } else {
        // await addToCart(guestId, productId);
        addToCart({ guestId, productId, quantity: 1 });
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
