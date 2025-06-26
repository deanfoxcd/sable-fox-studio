import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addToCart, getCart } from '../_lib/cartActions';

export function useAddToCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      guestId,
      productId,
      quantity = 1,
    }: {
      guestId: string;
      productId: string;
      quantity?: number;
    }) => {
      return addToCart(guestId, productId, quantity);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });
}

export function useCart(guestId: string) {
  return useQuery({
    queryKey: ['cart', guestId],
    queryFn: () => getCart(guestId),
    enabled: !!guestId,
  });
}
