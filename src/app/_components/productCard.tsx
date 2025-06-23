import { Card } from 'flowbite-react';
import { Product } from '../types';
import ButtonProducts from './buttonProducts';
import QuantityPicker from './quantityPicker';
import Image from 'next/image';
import { redirect } from 'next/navigation';

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
      <Card className='w-[350px] min-h-[420px] flex flex-col justify-between shadow-md overflow-hidden'>
        <div className='w-full h-[240px] flex items-center justify-center bg-white dark:bg-gray-800 rounded-t-lg overflow-hidden'>
          <div className='relative w-full h-full'>
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              style={{
                objectFit: 'contain',
                objectPosition: 'center',
              }}
              priority={true}
              sizes='(max-width: 350px) 100vw, 350px'
              onClick={() => redirect(`/shop/${product.id}`)}
            />
          </div>
        </div>
        <h5 className='text-xl font-semibold tracking-tight'>{product.name}</h5>

        <div>
          <p className='text-lg '>{product.description}</p>
        </div>

        <div className='flex flex-col items-center'>
          <span className='text-3xl font-bold text-gray-900 dark:text-white'>
            ${product.price}
          </span>

          <div className='flex w-full justify-center mt-4'>
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
        </div>
        {quantity && <QuantityPicker quantity={quantity} />}
      </Card>
    </div>
  );
};

export default ProductCard;
