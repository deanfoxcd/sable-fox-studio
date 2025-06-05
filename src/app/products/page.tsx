import ProductCard from '../_components/productCard';
import { getProducts } from '../_lib/actions';

export default async function Products() {
  const products = await getProducts();
  console.log(products);

  return (
    <div className='text-white'>
      <div>PRODUCTS</div>

      <ul>
        {products?.map((product) => {
          return (
            <li key={product.id}>
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
