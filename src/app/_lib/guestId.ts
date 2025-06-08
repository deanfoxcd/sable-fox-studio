// lib/guest.ts
import { v4 as uuidv4 } from 'uuid';

export function getGuestId(): string {
  let guestId = localStorage.getItem('guest_id');
  if (!guestId) {
    guestId = uuidv4();
    localStorage.setItem('guest_id', guestId);
  }
  return guestId;
}
