import { redirect } from 'next/navigation';
import { supabase } from '../utils/supabase/client';
import { JournalEntry } from '../types';

export async function addEntry(journalEntry: JournalEntry) {
  const { title, content } = journalEntry;

  const { data, error } = await supabase
    .from('journal_entries')
    .insert([{ title, content }])
    .select();

  if (error) {
    redirect('/error');
  }
}
