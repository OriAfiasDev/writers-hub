import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/ui/Navbar';
import { Providers } from './providers';

const defaultFont = Poppins({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'WriterHub',
  description: 'A collection of tools for writers.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${defaultFont.className} bg-gradient`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
