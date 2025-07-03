import Image from 'next/image';
import Link from 'next/link';
import { Card } from 'flowbite-react';

import ButtonProducts from './buttonProducts';
import QuantityPicker from './quantityPicker';
import { Product } from '../types';
import { getGuestId } from '../_lib/guestId';

interface ProductsCardProps {
  product: Product;
  role: string;
  onEdit?: () => void;
  quantity?: number;
  onCartUpdate?: () => void;
}

const ProductCard: React.FC<ProductsCardProps> = function ({
  product,
  role,
  onEdit,
  quantity,
  onCartUpdate,
}) {
  return (
    <div className='text-black dark:text-white shadow-2xl shadow-black'>
      <Card className='w-[350px] min-h-[420px] flex flex-col justify-between shadow-2xl overflow-hidden bg-[hsl(56,12%,65%)] border-none'>
        <Link
          href={`/shop/${product.id}`}
          className='block w-full'
        >
          <div className='w-full h-[240px] flex items-center justify-center bg-[hsl(56,12%,65%)] rounded-t-lg overflow-hidden'>
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
              />
            </div>
          </div>
        </Link>

        <Link href={`/shop/${product.id}`}>
          <h5 className='text-xl font-semibold tracking-tight'>
            {product.name}
          </h5>
        </Link>

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
              onCartUpdate={onCartUpdate}
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
        {quantity && product.id && (
          <QuantityPicker
            quantity={quantity}
            productId={product.id}
            guestId={getGuestId()}
          />
        )}
      </Card>
    </div>
  );
};

export default ProductCard;
