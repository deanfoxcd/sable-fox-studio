import { redirect } from 'next/navigation';

import AddProductButton from '@/app/_components/buttonAddProduct';
import ProductsListWithModal from '@/app/_components/productsListWithModal';
import { getProducts } from '@/app/_lib/productActions';
import { Product } from '@/app/types';
import { createClient } from '@/app/utils/supabase/server';
import { Button } from 'flowbite-react';
import { logOut } from '@/app/_lib/authActions';
import LogOutButton from '@/app/_components/logOutButton';

export default async function PrivateProductsPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/login');
  }

  const products: Product[] | null = await getProducts();

  return (
    <div className='text-white'>
      <div className='font-bold text-xl md:bg-transparent m-4'>PRODUCTS</div>

      <ProductsListWithModal products={products} />

      <div className='m-4'>
        <AddProductButton />
      </div>
      <div className='m-4'>
        <LogOutButton />
      </div>
    </div>
  );
}
