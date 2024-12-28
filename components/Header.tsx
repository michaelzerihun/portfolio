'use client';
import React, { useState } from 'react';
import Container from './Container';
import Logo from './Logo';
import { navbarData } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import Sidebar from './Sidebar';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className='border-b-2 border-b-hoverColor/20 bg-bodyColor text-white/80 sticky top-0 z-50'>
      <Container className='py-5 flex items-center justify-between'>
        <Logo title='Michael' subtitle='.' />
        <div className='hidden md:inline-flex items-center gap-7 text-sm uppercase tracking-wide font-medium'>
          {navbarData?.map((item) => (
            <Link
              className={`hover:text-hoverColor hoverEffect relative group overflow-x-hidden ${
                pathname === item?.href && 'text-hoverColor'
              }`}
              key={item?.title}
              href={item.href}
            >
              {item.title}
              <span
                className={`w-full h-px bg-hoverColor inline-block absolute left-0 bottom-0 group-hover:translate-x-0 hoverEffect ${
                  pathname === item?.href
                    ? 'translate-x-0'
                    : '-translate-x-[105%]'
                }`}
              />
            </Link>
          ))}
          <Link
            href={'/resume.pdf'}
            target='_blank'
            rel='noopener noreferrer'
            className='text-sm bg-lightSky/10 px-4 py-2 rounded-md border border-hoverColor/10 hover:border-hoverColor hover:bg-hoverColor hover:text-black hoverEffect'
          >
            Hire me
          </Link>
        </div>
        <button
          aria-label='Toggle menu'
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className='inline-flex md:hidden relative hover:text-hoverColor hoverEffect'
        >
          <Menu />
        </button>
      </Container>

      <div className='md:hidden'>
        <Sidebar
          pathname={pathname}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>
    </header>
  );
};

export default Header;
