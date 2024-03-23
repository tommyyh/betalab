import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../globals.scss';
import Navbar from '@/components/Navbar/Navbar';
import localFont from 'next/font/local';
import Cursor from '@/components/Cursor/Cursor';
import SmoothScroll from '@/components/SmoothScroll/SmoothScroll';
import Scrollbar from '@/components/Scrollbar/Scrollbar';

// Font types
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--poppins',
  display: 'swap',
});
const eiko = localFont({
  src: [
    {
      path: '../../public/font/eiko-thin.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/font/eiko-medium.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--eiko',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${eiko.variable}`}>
      <body>
        <Cursor />
        <SmoothScroll />

        {/* Main */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
