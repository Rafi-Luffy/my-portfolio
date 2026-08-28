import type { Metadata } from 'next';
import { Manrope, Space_Mono } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap'
});

const mono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap'
});

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/my-portfolio' : '';

export const metadata: Metadata = {
  title: 'Rafi.S.B.M - AI Engineer & Full-Stack Systems Architect | Editions ’26',
  description:
    'Portfolio of Shaik Balaji Mahammad Rafi (Rafi.S.B.M). AI Engineer, Google Agentic AI Grand Finalist, and Full-Stack Systems Architect building production-ready multi-agent workflows, GraphRAG memory archives, and high-throughput streaming intelligence.',
  keywords: [
    'Rafi.S.B.M',
    'Shaik Balaji Mahammad Rafi',
    'AI Engineer',
    'Agentic AI',
    'Multi-Agent Systems',
    'LangGraph',
    'GraphRAG',
    'Full Stack Developer',
    'IIT Ropar',
    'Google Agentic AI Finalist'
  ],
  authors: [{ name: 'Shaik Balaji Mahammad Rafi', url: 'https://github.com/Rafi-Luffy' }],
  creator: 'Shaik Balaji Mahammad Rafi',
  metadataBase: new URL('https://rafi-luffy.github.io'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rafi-luffy.github.io/my-portfolio/',
    title: 'Rafi.S.B.M - AI Engineer & Full-Stack Systems Architect',
    description:
      'AI Engineer, Google Agentic AI Grand Finalist, and Full-Stack Systems Architect building production-ready intelligence systems that work everywhere.',
    siteName: 'Rafi Editions ’26'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rafi.S.B.M - AI Engineer & Full-Stack Systems Architect',
    description: 'AI Engineer building production-ready intelligent systems that work everywhere.'
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
    apple: `${basePath}/favicon.svg`
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${manrope.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
