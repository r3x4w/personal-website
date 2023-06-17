import localFont from 'next/font/local'

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

import './global.css';

export const vazir = localFont({
  src: './vazirmatn.woff2',
  display: 'swap',
  variable: '--font-vazirmatn'
})

export const metadata = {
  title: {
    template: '%s | رکسا',
    default: 'بدون عنوان',
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang='fa' className={vazir.variable} dir="rtl">
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </head>
      <body>
        <Header />
        <main className='w-full flex-1 p-6 lg:mx-auto lg:max-w-5xl'>{children}</main>
        <Sidebar />
        <Footer />
      </body>
    </html>
  );
}
