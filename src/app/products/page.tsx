import { redirect } from 'next/navigation';

import { createClient } from '@/app/utils/supabase/server';
import { getProducts } from '../_lib/actions';
import ProductCard from '../_components/productCard';

export default async function PrivatePage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/login');
  }

  const products = await getProducts();
  console.log(products);

  return (
    <div className='text-white'>
      <div>PRODUCTS</div>

      <ul>
        {products?.map((product) => {
          return (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
