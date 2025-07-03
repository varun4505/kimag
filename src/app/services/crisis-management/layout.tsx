import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crisis Management & Communication Services | Konnections IMAG',
  description: 'Strategic crisis management and communication services to protect your brand reputation during challenging times. Rapid response, media management, and recovery planning.',
  keywords: [
    'crisis management',
    'crisis communication',
    'reputation management',
    'crisis PR',
    'emergency response',
    'media management',
    'crisis planning',
    'crisis recovery'
  ],
  openGraph: {
    title: 'Crisis Management & Communication Services | Konnections IMAG',
    description: 'Strategic crisis management and communication services to protect your brand reputation during challenging times.',
    url: 'https://www.konnectionsimag.com/services/crisis-management',
    images: [{ url: '/logo-big.png', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.konnectionsimag.com/services/crisis-management',
  },
};

export default function CrisisManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
