'use server';

import { redirect } from 'next/navigation';
import { Product } from '../types';
import { supabase } from '../utils/supabase/client';
import { revalidatePath } from 'next/cache';

export async function addProduct(product: Product) {
  const { error } = await supabase.from('products').insert([product]);

  if (error) {
    redirect('/error');
  }

  revalidatePath('/admin/products');
  redirect('/admin/products');
}

export async function getProducts() {
  const { data: products, error } = await supabase.from('products').select('*');

  if (error) console.log(error);

  return products;
}

export async function getProductById(id: number) {
  const { data: product, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id);

  if (error) console.log(error);

  return product?.[0];
}

export async function updateProduct(id: number, product: Product) {
  const { data, error } = await supabase
    .from('products')
    .update({
      name: product.name,
      price: product.price,
      description: product.description,
    })
    .eq('id', id)
    .select();

  console.log('Updated product:', data);

  if (error) {
    redirect('/error');
  }

  revalidatePath('/admin/products');
  redirect('/admin/products');
}

export async function deleteProduct(id: number) {
  const { error } = await supabase.from('products').delete().eq('id', id);

  if (error) {
    redirect('/error');
  }

  revalidatePath('/admin/products');
  redirect('/admin/products');
}
