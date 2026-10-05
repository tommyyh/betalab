import type { Metadata } from 'next';
import { Newsreader, Poppins } from 'next/font/google';
import '../globals.scss';
import Navbar from '@/components/Navbar/Navbar';
import Cursor from '@/components/Cursor/Cursor';
import SmoothScroll from '@/components/SmoothScroll/SmoothScroll';
import { MenuProvider } from '@/components/Navbar/MenuContext/MenuContext';
import Menu from '@/components/Navbar/Menu/Menu';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Footer from '@/components/Footer/Footer';

// Font types
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '100'],
  variable: '--poppins',
  display: 'swap',
});
const newsreader = Newsreader({
  subsets: ['latin', 'latin-ext'],
  style: ['normal'],
  axes: ['opsz'],
  variable: '--newsreader',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Lumen Digital',
  description: 'Lumen Digital · Leading web agency',
};

// Body
type PropsType = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<PropsType>) {
  // @ts-ignore
  const navMessages = useMessages('nav');

  return (
    <html lang={locale} className={`${newsreader.variable} ${poppins.variable}`}>
      <body>
        <Cursor />
        <SmoothScroll />

        {/* Main */}
        <NextIntlClientProvider messages={navMessages as any}>
          <MenuProvider>
            <Navbar />
            <Menu />
          </MenuProvider>
        </NextIntlClientProvider>

        {children}

        <Footer />
      </body>
    </html>
  );
}
