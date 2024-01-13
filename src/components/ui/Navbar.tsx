'use client';

import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navbar() {
  return (
    <nav className='sticky top-0 flex w-full flex-wrap items-center justify-between bg-primary py-2 lg:py-4'>
      <div className='flex w-full flex-wrap items-center justify-between px-3'>
        <div className='ml-2'>
          <Link className='text-xl text-primary' href='/'>
            Writers Hub
          </Link>
        </div>
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
