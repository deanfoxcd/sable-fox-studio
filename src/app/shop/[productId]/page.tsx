import ButtonProducts from '@/app/_components/buttonProducts';
import { getProductById } from '@/app/_lib/productActions';
import Image from 'next/image';

const ProductPage = async function ({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = await params;
  const product = await getProductById(Number(productId));

  return (
    <div className='container mx-auto px-4 py-12'>
      <div className='flex flex-col md:flex-row gap-8 max-w-6xl mx-auto'>
        {/* Left side - Product Image */}
        <div className='w-full'>
          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden'>
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

        {/* Right side - Product Details */}
        <div className='w-full space-y-6'>
          <div>
            <h1 className='text-3xl font-bold text-gray-900 dark:text-white mb-2'>
              {product.name}
            </h1>
            {product.description && (
              <p className='text-gray-600 dark:text-gray-300 text-lg mb-8'>
                {product.description}
              </p>
            )}
            <div className='text-4xl font-bold text-gray-900 dark:text-white mb-6'>
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
