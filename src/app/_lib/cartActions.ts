'use server';

import { revalidatePath } from 'next/cache';
import { UUIDTypes } from 'uuid';
import { supabase } from '../utils/supabase/client';
import { getProductById } from './productActions';

export async function getCart(guestId: UUIDTypes) {
  const { data, error } = await supabase
    .from('cart_items')
    .select('*')
    .eq('guest_id', guestId);

  if (error) console.log(error);

  if (!data) return;

  const cartItems = await Promise.all(
    data.map((item) => getProductById(Number(item.product_id)))
  );

  return data;
}

export async function addToCart(
  guestId: UUIDTypes,
  productId: string,
  quantity: number
) {
  const { data, error } = await supabase
    .from('cart_items')
    .insert([
      {
        guest_id: guestId,
        product_id: productId,
        quantity,
      },
    ])
    .select();

  if (error) console.log(error);

  return data;
}

export async function updateCartItem(
  guestId: UUIDTypes,
  productId: string,
  quantity: number
) {
  const { data, error } = await supabase
    .from('cart_items')
    .update({ quantity: quantity })
    .eq('guest_id', guestId)
    .eq('product_id', productId)
    .select();

  if (error) console.log(error);

  return data;
}

export async function deleteCartItem(productId: string, guestId: UUIDTypes) {
  try {
    const { error } = await supabase
      .from('cart_items')
      .delete()
      .eq('guest_id', guestId)
      .eq('product_id', productId);

    if (error) console.log('Supabase delete error:', error);
  } catch (error) {
    console.log('Error in deleteCartItem:', error);
  }

  revalidatePath('/cart', 'layout');
}

export async function emptyCart(guestId: UUIDTypes) {
  const { error } = await supabase
    .from('cart_items')
    .delete()
    .eq('guest_id', guestId);

  if (error) console.log(error);
}

export async function getCartItemQuantity(
  guestId: UUIDTypes,
  productId: string
) {
  const { data, error } = await supabase
    .from('cart_items')
    .select('quantity')
    .eq('guest_id', guestId)
    .eq('product_id', productId);

  if (error) console.log(error);

  if (!data) return;

  return data[0].quantity;
}
