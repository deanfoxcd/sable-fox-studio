'use client';

import { Button } from 'flowbite-react';
import { customTheme } from '../styles/themes';
import { redirect } from 'next/navigation';

const AddProductButton: React.FC = function () {
  return (
    <Button
      color='alternative'
      pill
      theme={customTheme.button}
      onClick={() => redirect('/admin/products/add-product')}
    >
      Add Product
    </Button>
  );
};

export default AddProductButton;
