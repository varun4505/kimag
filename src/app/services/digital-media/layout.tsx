import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Media & Social Media Strategy | Konnections IMAG',
  description: 'Comprehensive digital media and social media strategy services to boost your online presence, engagement, and brand visibility. Expert content creation and social media management.',
  keywords: [
    'digital media services',
    'social media strategy',
    'content marketing',
    'social media management',
    'digital PR',
    'online reputation management',
    'social media campaigns',
    'digital content creation'
  ],
  openGraph: {
    title: 'Digital Media & Social Media Strategy | Konnections IMAG',
    description: 'Comprehensive digital media and social media strategy services to boost your online presence and brand visibility.',
    url: 'https://www.konnectionsimag.com/services/digital-media',
    images: [{ url: '/logo-big.png', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.konnectionsimag.com/services/digital-media',
  },
};

export default function DigitalMediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
