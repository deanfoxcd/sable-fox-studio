'use server';

import { supabase } from '../utils/supabase/client';
import { getGuestId } from './guestId';

export async function getCart() {
  const guestId = getGuestId();

  const { data: cart_items, error } = await supabase
    .from('cart_items')
    .select('*')
    .eq('guest_id', guestId);

  if (error) console.log(error);

  return cart_items;
}

export async function addToCart(productId: string, quantity: number = 1) {
  const guestId = getGuestId();

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

export async function updateCartItem(productId: string, quantity: number) {
  const guestId = getGuestId();

  const { data, error } = await supabase
    .from('cart_items')
    .update({ quantity })
    .eq('guest_id', guestId)
    .eq('product_id', productId)
    .select();

  if (error) console.log(error);

  return data;
}

export async function deleteCartItem(productId: string) {
  const guestId = getGuestId();

  const { error } = await supabase
    .from('cart_items')
    .delete()
    .eq('guest_id', guestId)
    .eq('product_id', productId);

  if (error) console.log(error);
}
