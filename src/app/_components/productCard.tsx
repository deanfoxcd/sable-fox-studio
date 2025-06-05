import { Button, Card } from 'flowbite-react';
import { Product } from '../types';
import ButtonServer from './buttonServer';
import { redirect } from 'next/navigation';

interface ProductsCardProps {
  product: Product;
  admin: boolean;
}

const ProductCard: React.FC<ProductsCardProps> = function ({ product, admin }) {
  const handleClick = () => {
    if (admin) redirect(`/admin/edit-product/${product.id}`);
    else return;
  };

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
        {/* <Button
          color='alternative'
          pill
        >
          {admin ? 'Edit product' : 'Add to cart'}
        </Button> */}
        <ButtonServer
          admin={admin}
          productId={product.id}
        >
          {admin ? 'Edit product' : 'Add to cart'}
        </ButtonServer>
      </div>
    </Card>
  );
};

export default ProductCard;
