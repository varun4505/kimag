import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Communications Services | Konnections IMAG',
  description: 'Effective corporate communications strategies to enhance your brand reputation, employee engagement, and stakeholder relationships. Strategic internal and external communications expertise.',
  keywords: [
    'corporate communications',
    'internal communications',
    'external communications',
    'employee engagement',
    'stakeholder communications',
    'corporate messaging',
    'brand reputation',
    'corporate PR'
  ],
  openGraph: {
    title: 'Corporate Communications Services | Konnections IMAG',
    description: 'Effective corporate communications strategies to enhance your brand reputation, employee engagement, and stakeholder relationships.',
    url: 'https://www.konnectionsimag.com/services/corporate-communications',
    images: [{ url: '/logo-big.png', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.konnectionsimag.com/services/corporate-communications',
  },
};

export default function CorporateCommunicationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
