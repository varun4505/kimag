import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Public Relations Services - Strategic PR Solutions | Konnections IMAG',
  description: 'Comprehensive public relations services including media relations, brand building, thought leadership, and stakeholder engagement. Expert PR strategies that drive results.',
  keywords: [
    'public relations services',
    'media relations',
    'brand building',
    'thought leadership',
    'stakeholder engagement',
    'PR agency India',
    'strategic communications',
    'reputation management'
  ],
  openGraph: {
    title: 'Public Relations Services - Strategic PR Solutions | Konnections IMAG',
    description: 'Comprehensive public relations services including media relations, brand building, thought leadership, and stakeholder engagement.',
    url: 'https://www.konnectionsimag.com/services/public-relations',
    images: [{ url: '/logo-big.png', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.konnectionsimag.com/services/public-relations',
  },
};

export default function PublicRelationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
