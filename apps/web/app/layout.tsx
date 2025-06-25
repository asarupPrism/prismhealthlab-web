import type { Metadata } from 'next';
import { Roboto, Noto_Sans, Poppins, Inter } from 'next/font/google';
import './globals.css';
import './teleporthq.css';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

const notoSans = Noto_Sans({
  variable: '--font-noto-sans',
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'PRISM Health Lab - At-Home Lab Testing Made Easy',
  description:
    'Personalized at-home testing made easy by a world class CLIA Certified Laboratory built by doctors. Over 20+ tests available for general health, oral health, and STI testing.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${notoSans.variable} ${poppins.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
