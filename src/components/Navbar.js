"use client"

import Link from 'next/link'
import {usePathname} from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className='hidden md:block'>
      <div
        className='fixed inset-0 z-30 flex hidden items-center justify-center bg-zinc-950/70'
        id='mobileNavContainer'>
        <div id='mobileNav' className='w-4/5 animate-fadeInUp rounded-xl bg-white p-14 text-center shadow'>
          <ul className='flex flex-col gap-6'>
            <li>
              <Link href='/' className={`d-menu-link ${pathname === '/' ? 'active' : ''}`}>
                صفحه اصلی
              </Link>
            </li>
            <li>
              <Link href='/resume' className={`d-menu-link ${pathname === '/resume' ? 'active' : ''}`}>
                رزومه
              </Link>
            </li>
            <li>
              <Link href='/projects' className={`d-menu-link ${pathname === '/projects' ? 'active' : ''}`}>
                پروژه ها
              </Link>
            </li>
            <li>
              <Link href='/products' className={`d-menu-link ${pathname === '/products' ? 'active' : ''}`}>
                محصولات
              </Link>
            </li>
            <li>
              <Link href='/podcasts' className={`d-menu-link ${pathname === '/podcasts' ? 'active' : ''}`}>
                پادکست ها
              </Link>
            </li>
            <li>
              <Link href='/blog' className={`d-menu-link ${pathname === '/blog' ? 'active' : ''}`}>
                بلاگ
              </Link>
            </li>
            <li>
              <Link href='/contact' className={`d-menu-link ${pathname === '/contact' ? 'active' : ''}`}>
                تماس با من
              </Link>
            </li>
          </ul>
        </div>
      </div>

  <div className='hidden md:block'>
    <ul className='flex gap-x-6'>
      <li>
        <Link href='/' className={`d-menu-link ${pathname === '/' ? 'active' : ''}`}>
          صفحه اصلی
        </Link>
      </li>
      <li>
        <Link
          href='/resume'
          className={`d-menu-link ${pathname === '/resume' ? 'active' : ''}`}>
          رزومه
        </Link>
      </li>
      <li>
        <Link
          href='/projects'
          className={`d-menu-link ${pathname === '/projects' ? 'active' : ''}`}>
          پروژه ها
        </Link>
      </li>
      <li>
        <Link
          href='/products'
          className={`d-menu-link ${pathname === '/products' ? 'active' : ''}`}>
          محصولات
        </Link>
      </li>
      <li>
        <Link
          href='/podcasts'
          className={`d-menu-link ${pathname === '/podcasts' ? 'active' : ''}`}>
          پادکست ها
        </Link>
      </li>
      <li>
        <Link
          href='/blog'
          className={`d-menu-link ${pathname === '/blog' ? 'active' : ''}`}>
          بلاگ
        </Link>
      </li>
      <li>
        <Link
          href='/contact'
          className={`d-menu-link ${pathname === '/contact' ? 'active' : ''}`}>
          تماس با من
        </Link>
      </li>
    </ul>
  </div>
    </nav>
  );
}
