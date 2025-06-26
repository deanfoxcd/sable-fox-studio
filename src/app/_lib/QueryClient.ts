import { QueryClient } from '@tanstack/react-query';

const cartQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

export default cartQueryClient;
