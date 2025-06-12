import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import Providers from '../providers';
import '../globals.css';
import Layout from '@/components/Layout';

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'NextJS Store App',
  description: 'NextJS Store App with Tailwind CSS and Lucide Icons',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${rubik.className} antialiased`}>
        <Layout>
          <Providers>{children}</Providers>
        </Layout>
      </body>
    </html>
  );
}
