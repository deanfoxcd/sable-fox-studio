'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

import cartQueryClient from '../_lib/QueryClient';

interface QueryProviderProps {
  children: ReactNode;
}

const QueryProviderWrapper: React.FC<QueryProviderProps> = function ({
  children,
}) {
  return (
    <QueryClientProvider client={cartQueryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default QueryProviderWrapper;
