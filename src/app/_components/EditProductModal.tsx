'use client';

import { useState } from 'react';
import { Product } from '../types';
import { updateProduct } from '../_lib/actions';
import { Button } from 'flowbite-react';
import { customTheme } from '../styles/themes';

interface EditproductModalProps {
  product: Product;
  onClose: () => void;
  isOpen: boolean;
}

const EditProductModal: React.FC<EditproductModalProps> = function ({
  product,
  onClose,
  isOpen,
}) {
  const [updatedName, setUpdatedName] = useState(product.name);
  const [updatedPrice, setUpdatedPrice] = useState(product.price);
  const [updatedDescription, setUpdatedDescription] = useState(
    product.description
  );

  const updatedProduct: Product = {
    name: updatedName,
    price: updatedPrice,
    description: updatedDescription,
  };

  const handleSubmit = () => {
    updateProduct(Number(product.id), updatedProduct);
    onClose();
  };

  return (
    <div
      id='updateProductModal'
      tabIndex={-1}
      aria-hidden='true'
      className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full ${isOpen ? 'block' : 'hidden'}`}
    >
      <div className='relative p-4 w-full max-w-2xl h-full md:h-auto'>
        {/* <!-- Modal content --> */}
        <div className='relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5'>
          {/* <!-- Modal header --> */}
          <div className='flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
              Update Product
            </h3>
            <Button
              color='alternative'
              pill
              theme={customTheme.button}
              type='button'
              data-modal-toggle='updateProductModal'
              onClick={onClose}
            >
              X
            </Button>
          </div>
          {/* <!-- Modal body --> */}
          <form
            action='#'
            onSubmit={handleSubmit}
          >
            <div className='grid gap-4 mb-4 sm:grid-cols-2'>
              <div>
                <label
                  htmlFor='name'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Name
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  value={updatedName}
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  onChange={(e) => setUpdatedName(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor='price'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Price
                </label>
                <input
                  type='number'
                  value={updatedPrice}
                  name='price'
                  id='price'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  onChange={(e) => setUpdatedPrice(Number(e.target.value))}
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
                  id='description'
                  rows={5}
                  className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  value={updatedDescription}
                  onChange={(e) => setUpdatedDescription(e.target.value)}
                />
              </div>
            </div>
            <div className='flex items-center space-x-4'>
              <Button
                type='submit'
                className='text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
              >
                Update product
              </Button>
              <Button
                type='button'
                className='text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900'
              >
                Delete
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProductModal;
