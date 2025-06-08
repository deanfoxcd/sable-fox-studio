'use client';

import { Button } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import { customTheme } from '../styles/themes';

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
  const router = useRouter();

  const handleClick = () => {
    if (admin) {
      if (productId) onEdit?.();
    }
    // if (admin) router.push(`/admin/edit-product/${productId}`);
    else return;
  };

  return (
    <Button
      color='alternative'
      pill
      theme={customTheme.button}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default ButtonProducts;
