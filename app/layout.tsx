import type { Metadata } from 'next';
import { Space_Grotesk, Syne } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-body',
  subsets: ['latin', 'latin-ext'],
});

const syne = Syne({
  variable: '--font-display',
  subsets: ['latin', 'latin-ext'],
});

export const metadata: Metadata = {
  title: 'cruthecat — internet creature',
  description: 'Kod, design i odrobina kontrolowanego chaosu.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body className={`${spaceGrotesk.variable} ${syne.variable}`}>{children}</body>
    </html>
  );
}
