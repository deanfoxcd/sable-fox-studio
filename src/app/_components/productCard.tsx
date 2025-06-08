import { Card } from 'flowbite-react';
import { Product } from '../types';
import ButtonProducts from './buttonProducts';

interface ProductsCardProps {
  product: Product;
  admin: boolean;
  onEdit?: () => void;
}

const ProductCard: React.FC<ProductsCardProps> = function ({
  product,
  admin,
  onEdit,
}) {
  return (
    <Card
      className='w-100'
      imgAlt={product.name}
      imgSrc='/images/products/apple-watch.png'
    >
      <a href='#'>
        <h5 className='text-xl font-semibold tracking-tight text-white'>
          {product.name}
        </h5>
      </a>

      <div>
        <p className='text-lg text-black dark:text-white'>
          {product.description}
        </p>
      </div>

      <div className='flex items-center justify-between'>
        <span className='text-3xl font-bold text-gray-900 dark:text-white'>
          ${product.price}
        </span>
        <ButtonProducts
          admin={admin}
          productId={product.id}
          onEdit={onEdit}
        >
          {admin ? 'Edit product' : 'Add to cart'}
        </ButtonProducts>
      </div>
    </Card>
  );
};

export default ProductCard;
