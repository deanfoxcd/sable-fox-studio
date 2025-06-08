'use client';

import { Button } from 'flowbite-react';
import { customTheme } from '@/app/styles/themes';
import { Product } from '@/app/types';
import { useState } from 'react';
import { addProduct } from '@/app/_lib/productActions';

const AddProduct: React.FC = function () {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const product: Product = { name, price, description };
    addProduct(product);
  };

  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='py-8 px-4 mx-auto max-w-2xl lg:py-16'>
        <h2 className='mb-4 text-xl font-bold text-gray-900 dark:text-white'>
          Add a new product
        </h2>
        <form
          action='#'
          onSubmit={handleSubmit}
        >
          <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
            <div className='sm:col-span-2'>
              <label
                htmlFor='name'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Product Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type='text'
                name='name'
                id='name'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                placeholder='Type product name'
                required={true}
              />
            </div>

            <div className='w-full'>
              <label
                htmlFor='price'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Price
              </label>
              <input
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                type='number'
                name='price'
                id='price'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                placeholder='$2999'
                required={true}
              />
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='description'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                id='description'
                rows={8}
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                placeholder='Your description here'
              ></textarea>
            </div>
          </div>
          <Button
            theme={customTheme.button}
            color='alternative'
            pill
            type='submit'
            className='!mt-4'
          >
            Add product
          </Button>
        </form>
      </div>
    </section>
  );
};

export default AddProduct;
