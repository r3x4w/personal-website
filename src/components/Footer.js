import ArrowUp from '@/components/ArrowUp';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='relative mx-6 mt-20 mt-32 space-y-16 rounded-t-2xl bg-zinc-950 pb-12 text-zinc-50 dark:bg-zinc-900 lg:mx-auto lg:w-full lg:max-w-5xl'>
      <div>
        <div className='absolute inset-x-1/2 -top-12 h-16 w-16 translate-x-1/2 rotate-45 rounded-xl bg-white dark:bg-zinc-950'></div>
        <ArrowUp />
      </div>
      <div className='grid grid-cols-1 place-items-center gap-12 sm:grid-cols-2 sm:place-items-baseline'>
        <div className='sm:mx-auto'>
          <h6 className='pb-2 font-medium'>لینک های مفید</h6>
          <ul className='space-y-2'>
            <li>
              <a href='https://virgool.io/@r3x4w' target='_blank'>
                ویرگول
              </a>
            </li>
            <li>
              <a href='#' target='_blank'>
                مدیوم
              </a>
            </li>
            <li>
              <a href='https://www.rtl-theme.com/author/thisisrexa' target='_blank'>
                راستچین
              </a>
            </li>
            <li>
              <a href='https://github.com/r3x4w' target='_blank'>
                گیت هاب
              </a>
            </li>
          </ul>
        </div>
        <div className='sm:mx-auto'>
          <h6 className='pb-2 font-medium'>راه های ارتباطی</h6>
          <ul className='space-y-2'>
            <li>
              <a href='mailto:thisisrexa@gmail.com' target='_blank'>
                ایمیل
              </a>
            </li>
            <li>
              <Link href='/contact'>فرم تماس با من</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className='mx-auto flex w-3/5 scale-90 items-center justify-center gap-4 border-b border-zinc-800 pb-6 text-center text-sm sm:w-1/3'>
          <a href='https://t.me/r3x4w' target='_blank' title='کانال تلگرام' className='text-zinc-400 hover:opacity-75'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='h-6 w-6'>
              <line x1='22' y1='2' x2='11' y2='13'></line>
              <polygon points='22 2 15 22 11 13 2 9 22 2'></polygon>
            </svg>
          </a>
          <a href='#' target='_blank' title='لینکدین' className='text-zinc-400 hover:opacity-75'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='h-6 w-6'>
              <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
              <rect x='2' y='9' width='4' height='12'></rect>
              <circle cx='4' cy='4' r='2'></circle>
            </svg>
          </a>
          <a href='https://github.com/r3x4w' target='_blank' title='گیت هاب' className='text-zinc-400 hover:opacity-75'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='h-6 w-6'>
              <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
            </svg>
          </a>

          <a href='https://twitter.com/r3x4w' target='_blank' title='توییتر' className='text-zinc-400 hover:opacity-75'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='h-6 w-6'>
              <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'></path>
            </svg>
          </a>
          <a
            href='https://www.instagram.com/r3x4w'
            target='_blank'
            title='اینستاگرام'
            className='text-zinc-400 hover:opacity-75'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='h-6 w-6'>
              <rect x='2' y='2' width='20' height='20' rx='5' ry='5'></rect>
              <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
              <line x1='17.5' y1='6.5' x2='17.51' y2='6.5'></line>
            </svg>
          </a>
        </div>
        <p className='ltr py-6 text-center text-sm sm:text-base'>© 2023 r3x4w. All rights reserved</p>
      </div>
    </footer>
  );
}
