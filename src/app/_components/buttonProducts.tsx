'use client';

import { Button } from 'flowbite-react';
import { addToCart } from '../_lib/cartActions';
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
      const newItem = await addToCart(guestId, productId);

      if (newItem) console.log('Added to cart:', newItem);

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
