import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Commercial Cleaning Melbourne & Sydney | EagleWing Facility Services',
    template: '%s | EagleWing Facility Services',
  },
  description:
    'EagleWing Facility Services — premium commercial cleaning and intelligent facility management across Melbourne and Sydney. 20+ years experience. 98% client retention.',
  metadataBase: new URL('https://eaglewingfacilityservices.com.au'),
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://eaglewingfacilityservices.com.au',
    siteName: 'EagleWing Facility Services',
    images: [{ url: '/images/og-home.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
