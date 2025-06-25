import ProductCard from '../_components/productCard';
import { getProducts } from '../_lib/productActions';
import { Product } from '../types';

export default async function Products() {
  const products = await getProducts();

  return (
    <div className='text-white min-h-screen'>
      <ul className='flex flex-wrap justify-center mt-6'>
        {products?.length === 0 ? (
          <p className='text-center mt-20 text-4xl'>
            New products coming soon!
          </p>
        ) : (
          products?.map((product: Product) => {
            return (
              <li
                key={product.id}
                className='p-6'
              >
                <ProductCard
                  product={product}
                  role='shop'
                />
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}
