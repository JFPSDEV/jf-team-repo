import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import AppProvider from '../provider/AppProvider';

const inter = Inter({ subsets: ['latin'] });

const style = {
  height: '100%',
  margin: 0,
  padding: 0
};

export const metadata: Metadata = {
  title: 'JF-Portfolio',
  description: 'Made with ❤️'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang='fr' style={style}>
      <body className={inter.className} style={style}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
