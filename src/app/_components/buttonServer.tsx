'use client';

import { Button } from 'flowbite-react';
import { useRouter } from 'next/navigation';

interface ButtonProps {
  children: string;
  admin: boolean;
  productId: string | undefined;
}

const ButtonServer: React.FC<ButtonProps> = function ({
  children,
  admin,
  productId,
}) {
  const router = useRouter();

  const handleClick = () => {
    if (admin) router.push(`/admin/edit-product/${productId}`);
    else return;
  };

  return (
    <Button
      color='alternative'
      pill
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default ButtonServer;
