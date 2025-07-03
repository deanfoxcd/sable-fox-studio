'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

import { Product } from '../types';
import { createClient } from '../utils/supabase/server';

export async function addProduct(
  product: Omit<Product, 'imageUrl'> & { file: File }
) {
  const supabase = await createClient();
  const filePath = `products/${Date.now()}_${product.file.name}`;

  const { data, error: storageError } = await supabase.storage
    .from('product-images')
    .upload(filePath, product.file);

  if (storageError) {
    redirect('/error');
  }

  const { data: publicUrlData } = supabase.storage
    .from('product-images')
    .getPublicUrl(filePath);

  const imageUrl = publicUrlData?.publicUrl || '';

  const { error } = await supabase.from('products').insert([
    {
      name: product.name,
      price: product.price,
      description: product.description,
      imageUrl,
    },
  ]);

  if (error) {
    redirect('/error');
  }

  revalidatePath('/admin/products');
  redirect('/admin/products');
}

export async function getProducts() {
  const supabase = await createClient();

  const { data: products, error } = await supabase.from('products').select('*');

  if (error) console.log(error);

  return products;
}

export async function getProductById(id: number) {
  const supabase = await createClient();

  const { data: product, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id);

  if (error) console.log(error);

  return product?.[0];
}

export async function updateProduct(id: number, product: Product) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('products')
    .update({
      name: product.name,
      price: product.price,
      description: product.description,
    })
    .eq('id', id)
    .select();

  if (error) {
    redirect('/error');
  }

  revalidatePath('/admin/products');
  redirect('/admin/products');
}

export async function deleteProduct(id: number) {
  const supabase = await createClient();

  const { error } = await supabase.from('products').delete().eq('id', id);

  if (error) {
    redirect('/error');
  }

  revalidatePath('/admin/products');
  redirect('/admin/products');
}
