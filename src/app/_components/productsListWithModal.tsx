'use client';

import { useState } from 'react';
import { Product } from '../types';
import ProductCard from './productCard';
import EditProductModal from './EditProductModal';
import { getProductById } from '../_lib/productActions';

interface ProductsListWithModalProps {
  products: Product[] | null;
}

const ProductsListWithModal: React.FC<ProductsListWithModalProps> = function ({
  products,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleEdit = async (productId: string | undefined) => {
    if (!productId) return;
    const product = await getProductById(Number(productId));
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <>
      {isModalOpen && selectedProduct && (
        <EditProductModal
          product={selectedProduct}
          onClose={() => setIsModalOpen(false)}
          isOpen={isModalOpen}
        />
      )}

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
                onEdit={() => handleEdit(product.id)}
              />
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default ProductsListWithModal;
