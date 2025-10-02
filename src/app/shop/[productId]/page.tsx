import Image from 'next/image';

import ButtonProducts from '@/app/_components/buttonProducts';
import { getProductById } from '@/app/_lib/productActions';

const ProductPage = async function (props: unknown) {
  const { productId } = (props as { params: { productId: string } }).params;
  const product = await getProductById(Number(productId));

  return (
    <div className='container mx-auto px-4 py-12'>
      <div className='flex flex-col md:flex-row gap-8 max-w-6xl mx-auto'>
        <div className='w-full'>
          <div className='bg-white bg-gray-800 rounded-lg shadow-md overflow-hidden'>
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={800}
              height={800}
              className='w-full h-auto object-cover'
              priority
            />
          </div>
        </div>

        <div className='w-full space-y-6'>
          <div>
            <h1 className='text-3xl font-bold text-gray-900 text-white mb-2'>
              {product.name}
            </h1>
            {product.description && (
              <p className='text-gray-600 text-gray-300 text-lg mb-8'>
                {product.description}
              </p>
            )}
            <div className='text-4xl font-bold text-gray-900 text-white mb-6'>
              ${product.price}
            </div>
          </div>

          <div className='flex items-center space-x-4'>
            <ButtonProducts
              role='shop'
              productId={product.id}
            >
              Add to Cart
            </ButtonProducts>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
