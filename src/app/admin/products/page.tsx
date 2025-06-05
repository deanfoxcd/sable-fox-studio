import { redirect } from 'next/navigation';

import { createClient } from '@/app/utils/supabase/server';
import { getProducts } from '@/app/_lib/actions';
import ProductCard from '@/app/_components/productCard';
import { Product } from '@/app/types';

export default async function PrivateProductsPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/login');
  }

  const products = await getProducts();
  console.log(products);

  return (
    <div className='text-white'>
      <div className='font-bold text-xl md:bg-transparent m-4'>PRODUCTS</div>

      <ul>
        {products?.map((product: Product) => {
          return (
            // <li
            //   key={product.id}
            //   className='m-4'
            // >
            //   <p className='font-bold text-xl mb-2'>{product.name}</p>
            //   <p className='mb-2'>${product.price}</p>
            //   <p>{product.description}</p>
            //   <hr className='mt-4' />
            // </li>
            <ProductCard
              key={product.id}
              product={product}
              admin={true}
            />
          );
        })}
      </ul>
    </div>
  );
}
