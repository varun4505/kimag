import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "../components/SmoothScrollProvider";
import { MobileOptimizer } from "../components/MobileOptimizer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Konnections IMAG - Strategic Communications & Public Relations Agency",
    template: "%s | Konnections IMAG"
  },
  description: "Leading strategic communications and public relations agency in India. Specializing in crisis management, corporate communications, digital media, and specialized PR services. Build meaningful connections with your audience.",
  keywords: [
    "public relations agency",
    "strategic communications",
    "crisis management",
    "corporate communications",
    "digital media agency",
    "PR services India",
    "financial communications",
    "media relations",
    "reputation management",
    "communications consultancy"
  ],
  authors: [{ name: "Konnections IMAG" }],
  creator: "Konnections IMAG",
  publisher: "Konnections IMAG",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.konnectionsimag.com',
    title: 'Konnections IMAG - Strategic Communications & Public Relations Agency',
    description: 'Leading strategic communications and public relations agency in India. Specializing in crisis management, corporate communications, digital media, and specialized PR services.',
    siteName: 'Konnections IMAG',
    images: [
      {
        url: '/logo-big.png',
        width: 1200,
        height: 630,
        alt: 'Konnections IMAG - Strategic Communications Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Konnections IMAG - Strategic Communications & Public Relations Agency',
    description: 'Leading strategic communications and public relations agency in India. Build meaningful connections with your audience.',
    images: ['/logo-big.png'],
    creator: '@konnectionsimag',
  },
  alternates: {
    canonical: 'https://www.konnectionsimag.com',
  },
  other: {
    'google-site-verification': 'your-google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <link rel="icon" href="/logo-small.png" type="image/png" />
        <link rel="canonical" href="https://www.konnectionsimag.com" />
        <meta name="google-site-verification" content="your-google-site-verification-code" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Konnections IMAG",
              "description": "Leading strategic communications and public relations agency in India",
              "url": "https://www.konnectionsimag.com",
              "logo": "https://www.konnectionsimag.com/logo-big.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "url": "https://www.konnectionsimag.com/appointment"
              },
              "sameAs": [
                "https://www.linkedin.com/company/konnections-imag",
                "https://twitter.com/konnectionsimag"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "service": [
                {
                  "@type": "Service",
                  "name": "Public Relations",
                  "description": "Comprehensive public relations services"
                },
                {
                  "@type": "Service", 
                  "name": "Crisis Management",
                  "description": "Strategic crisis communication and reputation management"
                },
                {
                  "@type": "Service",
                  "name": "Corporate Communications", 
                  "description": "Internal and external corporate communication strategies"
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MobileOptimizer>
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </MobileOptimizer>
      </body>
    </html>
  );
}
