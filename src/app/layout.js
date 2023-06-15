import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

import '@/styles/base.css'

export const metadata = {
  title: {
    template: '%s | رکسا',
    default: 'بدون عنوان'
  }
}

export default function RootLayout({ children }) {
  // useEffect(() => {
  //   const currentTheme = localStorage.getItem('theme');

  //     if (currentTheme === 'dark') {
  //       document.documentElement.classList.add('dark');
  //     } else {
  //       document.documentElement.style.background = 'red';
  //     }
  // }, [])

  return (
    <html lang='fa'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        {/* <meta property='og:site_name' content={siteName} />
    <meta property='og:title' content={title} />
    <meta property='og:description' content={description} />
    <meta property='og:type' content={contentType} />
    <meta property='og:url' content={Astro.url} />
    <meta property='og:locale' content='fa' />
    <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
    <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
    <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
    <link rel='manifest' href='/site.webmanifest' />
    <link rel='sitemap' href='/sitemap-index.xml' /> */}
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
