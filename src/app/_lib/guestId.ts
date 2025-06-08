import { v4 as uuidv4 } from 'uuid';

export function getGuestId(): string {
  if (typeof window === 'undefined') {
    throw new Error('getGuestId must be called from the browser');
  }
  let guestId = localStorage.getItem('guest_id');
  if (!guestId) {
    guestId = uuidv4();
    localStorage.setItem('guest_id', guestId);
  }
  return guestId;
}
