import type { NextConfig } from 'next';
import withFlowbiteReact from 'flowbite-react/plugin/nextjs';

const nextConfig: NextConfig = {
  images: {
    domains: ['grtppckoxxgcescndodc.supabase.co'],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb', // or a higher value as needed
    },
  },
};

export default withFlowbiteReact(nextConfig);
