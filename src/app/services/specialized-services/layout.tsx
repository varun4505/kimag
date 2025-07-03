import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Specialized PR & Communications Services | Konnections IMAG',
  description: 'Tailored specialized PR and communications services for specific industries and needs. Custom communication solutions for unique challenges and opportunities.',
  keywords: [
    'specialized PR services',
    'niche communications',
    'industry-specific PR',
    'specialized media relations',
    'custom PR solutions',
    'targeted communications',
    'sector-specific PR',
    'specialized messaging'
  ],
  openGraph: {
    title: 'Specialized PR & Communications Services | Konnections IMAG',
    description: 'Tailored specialized PR and communications services for specific industries and unique communication challenges.',
    url: 'https://www.konnectionsimag.com/services/specialized-services',
    images: [{ url: '/logo-big.png', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.konnectionsimag.com/services/specialized-services',
  },
};

export default function SpecializedServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
