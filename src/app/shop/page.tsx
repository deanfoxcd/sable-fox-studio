import ProductCard from '../_components/productCard';
import { getProducts } from '../_lib/actions';

export default async function Products() {
  const products = await getProducts();
  console.log(products);

  return (
    <div className='text-white min-h-screen'>
      <ul className='flex flex-wrap items-center justify-center'>
        {products?.map((product) => {
          return (
            <li
              key={product.id}
              className='p-6'
            >
              <ProductCard
                product={product}
                admin={false}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
