'use server';

import { revalidatePath } from 'next/cache';
import { UUIDTypes } from 'uuid';
import { supabase } from '../utils/supabase/client';

export async function getCart(guestId: UUIDTypes) {
  const { data, error } = await supabase
    .from('cart_items')
    .select('*')
    .eq('guest_id', guestId);

  if (error) console.log(error);

  if (!data) return;

  return data;
}

export async function addToCart(guestId: UUIDTypes, productId: string) {
  const { data } = await supabase
    .from('cart_items')
    .select('product_id')
    .eq('guest_id', guestId);

  const productIds: number[] = [];
  data?.map((item) => {
    productIds.push(item.product_id);
  });

  if (productIds.includes(Number(productId))) {
    const itemQty = await getCartItemQuantity(guestId, productId);
    const newQty = Number(itemQty) + 1;

    const { data: cartItems, error } = await supabase
      .from('cart_items')
      .update({ quantity: newQty })
      .eq('guest_id', guestId)
      .eq('product_id', Number(productId))
      .select();

    if (error) console.log(error);

    return cartItems;
  } else {
    const { data: cartItems, error } = await supabase
      .from('cart_items')
      .insert([
        {
          guest_id: guestId,
          product_id: Number(productId),
          quantity: 1,
        },
      ])
      .select();

    if (error) console.log(error);

    return cartItems;
  }
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
