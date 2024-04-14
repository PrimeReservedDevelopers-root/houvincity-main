import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './style/globals.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Houvincity Real Estate',
  description: 'Your Gateway to Stress-free Real Estate.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
