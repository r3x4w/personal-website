import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

import '@/styles/base.css';

export const metadata = {
  title: {
    template: '%s | رکسا',
    default: 'بدون عنوان',
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang='fa'>
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
