import React, { useState } from 'react';
import ThemeToggle from '../ui/ThemeToggle';

import logoSymbol from '../../assets/image/logo-symbol.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='w-full bg-white/70 dark:bg-black/70 backdrop-blur-md border-b border-gray-100/50 dark:border-gray-800/50 fixed top-0 left-0 z-50 transition-colors duration-300'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          {/*Logo & Nama */}
          <div className='flex items-center gap-3 shrink-0'>
            <img
              src={logoSymbol}
              alt='TechNova Logo'
              className='h-8 w-auto object-contain'
            />
            <span className='text-xl font-bold tracking-tight text-slate-900 dark:text-white'>
              Your Logo
            </span>
          </div>

          {/* TENGAH: Menu Navigasi*/}
          <div className='hidden md:flex flex-1 justify-center items-center gap-8'>
            <a
              href='#about'
              className='text-black dark:text-white hover:text-[#FF6B4A] dark:hover:text-[#FF6B4A] font-semibold text-base tracking-wide transition-colors'
            >
              About
            </a>
            <a
              href='#services'
              className='text-black dark:text-white hover:text-[#FF6B4A] dark:hover:text-[#FF6B4A] font-semibold text-base tracking-wide transition-colors'
            >
              Service
            </a>
            <a
              href='#portfolio'
              className='text-black dark:text-white hover:text-[#FF6B4A] dark:hover:text-[#FF6B4A] font-semibold text-base tracking-wide transition-colors'
            >
              Project
            </a>
            <a
              href='#testimonials'
              className='text-black dark:text-white hover:text-[#FF6B4A] dark:hover:text-[#FF6B4A] font-semibold text-base tracking-wide transition-colors'
            >
              Testimonials
            </a>
            <a
              href='#faq'
              className='text-black dark:text-white hover:text-[#FF6B4A] dark:hover:text-[#FF6B4A] font-semibold text-base tracking-wide transition-colors'
            >
              FAQ
            </a>
          </div>

          {/* KANAN: Theme Toggle & Button Contact */}
          <div className='hidden md:flex items-center justify-end gap-5 shrink-0'>
            <ThemeToggle />
            <a
              href='#contact'
              className='px-12 py-2 text-lg font-semibold text-white rounded-full bg-gradient-to-b from-[#FF6B4A] to-[#FF6B4A] transition-all duration-300 hover:-translate-y-1'
            >
              Let's Talk
            </a>
          </div>

          {/* TAMPILAN MOBILE: Hamburger Menu */}
          <div className='md:hidden flex items-center gap-4'>
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white focus:outline-none p-1'
            >
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                {isOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* DROPDOWN MOBILE */}
      {isOpen && (
        <div className='md:hidden bg-white/90 dark:bg-black/90 backdrop-blur-lg px-4 pt-2 pb-6 space-y-2 shadow-xl border-t border-gray-100/50 dark:border-gray-800/50'>
          <a
            href='#about'
            onClick={() => setIsOpen(false)}
            className='block px-3 py-2.5 text-base font-medium text-black dark:text-slate-300 hover:text-[#FF6B4A] dark:hover:text-[#FF6B4A] rounded-lg'
          >
            About
          </a>
          <a
            href='#service'
            onClick={() => setIsOpen(false)}
            className='block px-3 py-2.5 text-base font-medium text-black dark:text-slate-300 hover:text-[#FF6B4A] dark:hover:text-[#FF6B4A] rounded-lg'
          >
            Service
          </a>
          <a
            href='#portfolio'
            onClick={() => setIsOpen(false)}
            className='block px-3 py-2.5 text-base font-medium text-black dark:text-slate-300 hover:text-[#FF6B4A] dark:hover:text-[#FF6B4A] rounded-lg'
          >
            Project
          </a>
          <a
            href='#testimonials'
            onClick={() => setIsOpen(false)}
            className='block px-3 py-2.5 text-base font-medium text-black dark:text-slate-300 hover:text-[#FF6B4A] dark:hover:text-[#FF6B4A] rounded-lg'
          >
            Testimonials
          </a>
          <a
            href='#faq'
            onClick={() => setIsOpen(false)}
            className='block px-3 py-2.5 text-base font-medium text-blac dark:text-slate-300 hover:text-[#FF6B4A] dark:hover:text-[#FF6B4A] rounded-lg'
          >
            FAQ
          </a>
          <div className='pt-4 px-3'>
            <a
              href='#contact'
              onClick={() => setIsOpen(false)}
              className='block w-full text-center py-3 rounded-full font-semibold text-white bg-gradient-to-b from-[#FF6B4A] to-[#FF6B4A]'
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
