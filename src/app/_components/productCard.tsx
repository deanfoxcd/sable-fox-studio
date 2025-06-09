import { Card } from 'flowbite-react';
import { Product } from '../types';
import ButtonProducts from './buttonProducts';
import QuantityPicker from './quantityPicker';
import Image from 'next/image';

interface ProductsCardProps {
  product: Product;
  role: string;
  onEdit?: () => void;
  quantity?: number;
}

const ProductCard: React.FC<ProductsCardProps> = function ({
  product,
  role,
  onEdit,
  quantity,
}) {
  return (
    <div className='text-black dark:text-white'>
      <Card className='w-100'>
        <div className='flex items-center justify-center'>
          <Image
            src='/images/dog.jpeg'
            alt='dog'
            width={200}
            height={200}
          />
        </div>
        <h5 className='text-xl font-semibold tracking-tight'>{product.name}</h5>

        <div>
          <p className='text-lg '>{product.description}</p>
        </div>

        <div className='flex items-center justify-between'>
          <span className='text-3xl font-bold text-gray-900 dark:text-white'>
            ${product.price}
          </span>

          <ButtonProducts
            role={role}
            productId={product.id}
            onEdit={onEdit}
          >
            {role === 'admin'
              ? 'Edit product'
              : role === 'shop'
                ? 'Add to cart'
                : role === 'cart'
                  ? 'Remove from cart'
                  : ''}
          </ButtonProducts>
        </div>
        {quantity && <QuantityPicker quantity={quantity} />}
      </Card>
    </div>
  );
};

export default ProductCard;
