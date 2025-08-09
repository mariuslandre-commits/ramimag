import './globals.css';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Analytics } from '@/components/Analytics';
import { jsonLdPerson } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL('https://mariusandre.dev'),
  title: {
    default: 'Marius André — Director of Business Development',
    template: '%s · Marius André',
  },
  description:
    'Exec-ready BD leader for services & tech. Built predictable GTM: 4× revenue, +300% ACV, enterprise wins, $2.7M multi-year program. Québec → Canada → North America.',
  openGraph: {
    type: 'website',
    title: 'Marius André — Director of Business Development',
    description:
      'Exec-ready BD leader for services & tech. Built predictable GTM: 4× revenue, +300% ACV, enterprise wins, $2.7M multi-year program.',
    url: 'https://mariusandre.dev',
    images: [{ url: '/images/headshot.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marius André — Director of Business Development',
    description:
      'Exec-ready BD leader for services & tech. Built predictable GTM: 4× revenue, +300% ACV, enterprise wins, $2.7M multi-year program.',
    images: ['/images/headshot.jpg'],
  },
  alternates: { canonical: 'https://mariusandre.dev' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" suppressHydrationWarning
          dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLdPerson())}} />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
