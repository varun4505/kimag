import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Financial Communications Services | Konnections IMAG',
  description: 'Expert financial communications services for investor relations, financial reporting, M&A, and market positioning. Strategic communications for financial institutions and corporations.',
  keywords: [
    'financial communications',
    'investor relations',
    'financial PR',
    'M&A communications',
    'IPO communications',
    'financial reporting',
    'shareholder communications',
    'financial market positioning'
  ],
  openGraph: {
    title: 'Financial Communications Services | Konnections IMAG',
    description: 'Expert financial communications services for investor relations, financial reporting, and market positioning.',
    url: 'https://www.konnectionsimag.com/services/financial-communications',
    images: [{ url: '/logo-big.png', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.konnectionsimag.com/services/financial-communications',
  },
};

export default function FinancialCommunicationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
