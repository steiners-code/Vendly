import type { Metadata } from 'next';
import { PageNotFound } from '@/components/PageNotFound';

export const metadata: Metadata = {
  title: 'Page not found | Vendly',
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootNotFound() {
  return <PageNotFound />;
}
