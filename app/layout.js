import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Omprakash Sahani | Software Engineer & Researcher',
  description: 'Personal portfolio of Omprakash Sahani, showcasing software engineering projects and EECS research.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">{/* No newlines after html tag */}
      <head></head>{/* No newlines after head tag */}
      <body>{/* No newlines after body tag starts */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
