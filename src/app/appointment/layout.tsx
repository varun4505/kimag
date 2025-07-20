import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schedule an Appointment | Konnections IMAG',
  description: 'Request a consultation with our strategic communications and PR experts. Schedule an appointment to discuss your communication needs and objectives.',
  keywords: [
    'PR appointment',
    'communications consultation',
    'book PR meeting',
    'PR agency consultation',
    'strategic communications appointment',
    'PR strategy meeting',
    'communications expert consultation'
  ],
  openGraph: {
    title: 'Schedule an Appointment | Konnections IMAG',
    description: 'Request a consultation with our strategic communications and PR experts.',
    url: 'https://www.konnectionsimag.com/appointment',
    images: [{ url: '/logo-big.png', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.konnectionsimag.com/appointment',
  },
};

export default function AppointmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
