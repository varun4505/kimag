import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Konnections IMAG',
  description: 'Comprehensive strategic communications and public relations services offered by Konnections IMAG. From media relations and crisis management to digital strategies and corporate communications.',
  keywords: [
    'PR services',
    'strategic communications services',
    'communications agency services',
    'media relations services',
    'crisis management services',
    'digital media services',
    'corporate communications',
    'PR agency offerings'
  ],
  openGraph: {
    title: 'Our Services | Konnections IMAG',
    description: 'Comprehensive strategic communications and public relations services offered by Konnections IMAG.',
    url: 'https://www.konnectionsimag.com/services',
    images: [{ url: '/logo-big.png', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.konnectionsimag.com/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
