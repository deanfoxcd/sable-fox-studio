'use client';

import { Button } from 'flowbite-react';
import { customTheme } from '../styles/themes';
import { redirect } from 'next/navigation';

const AddProductButton: React.FC = function () {
  return (
    <Button
      color='alternative'
      pill
      className='!m-4'
      theme={customTheme.button}
      onClick={() => redirect('/admin/add-product')}
    >
      Add Product
    </Button>
  );
};

export default AddProductButton;
