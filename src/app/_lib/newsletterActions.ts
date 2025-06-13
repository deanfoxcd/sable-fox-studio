'use server';

import { supabase } from '../utils/supabase/client';

export async function save(formData: FormData) {
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const email = formData.get('email');

  const { data, error } = await supabase
    .from('subscribers')
    .insert([{ firstName, lastName, email }])
    .select();

  if (error) {
    console.log(error);
  }
}
