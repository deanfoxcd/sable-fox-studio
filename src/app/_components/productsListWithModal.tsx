'use client';

import { useState } from 'react';
import { Product } from '../types';
import ProductCard from './productCard';

interface ProductsListWithModalProps {
  products: Product[] | null;
}

const ProductsListWithModal: React.FC<ProductsListWithModalProps> = function ({
  products,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <ul className='flex flex-wrap'>
      {products?.map((product: Product) => {
        return (
          <div
            key={product.id}
            className='p-2'
          >
            <ProductCard
              product={product}
              admin={true}
            />
          </div>
        );
      })}
    </ul>
  );
};

export default ProductsListWithModal;
