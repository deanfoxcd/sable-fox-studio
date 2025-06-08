import { v4 as uuidv4 } from 'uuid';

export function getGuestId(): string {
  if (typeof window === 'undefined') {
    return uuidv4(); // Temporary UUID for server-side, not used for cart
  }
  let guestId = localStorage.getItem('guest_id');
  if (!guestId) {
    guestId = uuidv4();
    localStorage.setItem('guest_id', guestId);
  }
  return guestId;
}
