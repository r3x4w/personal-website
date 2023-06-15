'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function Header() {
  const [isShow, setIsShow] = useState(false);
  const [theme, setTheme] = useState(typeof window !== "undefined" ? window.localStorage.getItem('theme') : 'light');
  const isDarkMode = theme === 'dark' ? true : false

  useEffect(() => {
    if (isShow) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isShow]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    localStorage.setItem('theme', theme)
  }, [theme])

  const handleToggleMenu = (e) => {
    setIsShow((prevIsShow) => !prevIsShow);
  };

  const handleToggleDarkMode = () => {
    setTheme(isDarkMode ? 'light' : 'dark')
  };

  return (
    <header className='flex-0 relative mx-auto my-2 flex w-full items-center justify-between p-4 pb-6 lg:max-w-5xl'>
      <button
        type='button'
        className={`z-40 p-2 transition-all duration-300 ease-in-out hover:cursor-pointer md:hidden ${
          isShow ? 'show' : ''
        }`}
        onClick={(e) => handleToggleMenu(e)}>
        <svg
          className='h-6 w-6'
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          version='1.1'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'>
          <line x1='3' x2='21' y1='8.5381' y2='8.5381'></line>
          <line x1='3' x2='21' y1='15.462' y2='15.462'></line>
        </svg>
      </button>
      <a href='/' className='relative h-8 w-8'>
        <Image
          src={`/images/${isDarkMode ? 'white' : 'black'}-logo.svg`}
          alt='Rexas logo'
          className='transition-opacity ease-in hover:cursor-pointer hover:opacity-70'
          draggable='false'
          fill={true}
          priority={true}
        />
      </a>
      <button
        type='button'
        className='order-1 p-2 text-zinc-500 transition-all ease-in hover:cursor-pointer hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50'
        onClick={handleToggleDarkMode}>
        {isDarkMode ? (
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
            <circle cx='12' cy='12' r='5'></circle>
            <line x1='12' y1='1' x2='12' y2='3'></line>
            <line x1='12' y1='21' x2='12' y2='23'></line>
            <line x1='4.22' y1='4.22' x2='5.64' y2='5.64'></line>
            <line x1='18.36' y1='18.36' x2='19.78' y2='19.78'></line>
            <line x1='1' y1='12' x2='3' y2='12'></line>
            <line x1='21' y1='12' x2='23' y2='12'></line>
            <line x1='4.22' y1='19.78' x2='5.64' y2='18.36'></line>
            <line x1='18.36' y1='5.64' x2='19.78' y2='4.22'></line>
          </svg>
        ) : (
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
            <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
          </svg>
        )}
      </button>
      <Navbar isShow={isShow} />
    </header>
  );
}
