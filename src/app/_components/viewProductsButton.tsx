'use client';

import { Button } from 'flowbite-react';
import { redirect } from 'next/navigation';

import { customTheme } from '../styles/themes';

const ViewProductsButton: React.FC = function () {
  return (
    <div>
      <Button
        theme={customTheme.button}
        color='alternative'
        pill
        onClick={() => redirect('/admin/products')}
        className='p-6'
      >
        View Products
      </Button>
    </div>
  );
};

export default ViewProductsButton;
