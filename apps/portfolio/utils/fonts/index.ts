import localFont from 'next/font/local';
import { Poppins } from 'next/font/google';

export const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export const poetsenOneRegular = localFont({
  src: './PoetsenOne-Regular.ttf',
});

export const montserrat = localFont({
  src: './Montserrat-Regular.ttf',
});
