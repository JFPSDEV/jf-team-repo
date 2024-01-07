import localFont from 'next/font/local';
import { Poppins, Montserrat_Alternates } from 'next/font/google';

export const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export const montserrat = Montserrat_Alternates({
  weight: '400',
  subsets: ['latin']
});

export const poetsenOneRegular = localFont({
  src: './PoetsenOne-Regular.ttf'
});
