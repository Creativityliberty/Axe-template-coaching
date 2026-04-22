import type {Metadata, Viewport} from 'next';
import { Playfair_Display, Inter, IBM_Plex_Mono } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import { CookieConsent } from '@/components/CookieConsent';
import './globals.css';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const plexMono = IBM_Plex_Mono({ weight: ['400', '500', '600'], subsets: ['latin'], variable: '--font-plex-mono' });

const APP_URL = process.env.APP_URL || 'https://axe-coaching.fr';

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: 'AXE — Coaching de transformation intérieure',
    template: '%s | AXE Coaching'
  },
  description: 'Un accompagnement 1:1 pour passer de la compréhension à l’action réelle, sans se trahir.',
  keywords: ["coaching transformation intérieure", "coaching introspection", "coaching passage à l'action", "coaching réalignement intérieur", "coaching 1:1"],
  authors: [{ name: 'AXE' }],
  creator: 'AXE',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: APP_URL,
    title: 'AXE — Agir sans se trahir.',
    description: 'Retrouver un axe intérieur stable pour agir de façon juste.',
    siteName: 'AXE Coaching',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AXE — Agir sans se trahir.',
    description: 'Retrouver un axe intérieur stable pour agir de façon juste.',
    creator: '@axecoaching',
  },
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
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable} ${plexMono.variable} scroll-smooth antialiased`} suppressHydrationWarning>
      <body className="font-body selection:bg-brand-signal/20 min-h-screen flex flex-col" suppressHydrationWarning>
        {children}
        <CookieConsent />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'} />
    </html>
  );
}
