import { Button, Card } from 'flowbite-react';
import { Product } from '../types';

interface ProductsCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductsCardProps> = function ({ product }) {
  return (
    <Card
      className='max-w-sm'
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
        <Button
          color='alternative'
          pill
        >
          Add to cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
