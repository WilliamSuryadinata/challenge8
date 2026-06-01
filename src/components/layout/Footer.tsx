import React from 'react';
import logoSymbol from '../../assets/image/logo-symbol.png';
import socialMedia from '../../assets/icon/Social Media.png';

const Footer = () => {
  return (
    <footer className='w-full bg-white dark:bg-black py-10 px-4 sm:px-6 lg:px-8'>
      {/* Kotak Footer Utama */}
      <div className='max-w-7xl mx-auto bg-gray-100 dark:bg-[#0B0F19] rounded-[2rem] border border-gray-300 dark:border-gray-700 p-8 md:p-12'>
        {/* BAGIAN ATAS: Judul & Logo */}
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-15'>
          {/* Judul di Kiri */}
          <h2 className='text-black dark:text-white text-3xl md:text-5xl font-semibold'>
            Let's Discuss <br /> Your Ideas
          </h2>

          {/* Gambar Logo di Ujung Kanan */}
          <div className='flex items-center cursor-pointer hover:opacity-80 transition-opacity duration-300'>
            <img
              src={logoSymbol}
              alt='Company Logo'
              className='h-10 md:h-10 w-auto object-contain'
            />
            <span className='text-black dark:text-white font-semibold text-xl md:text-2xl tracking-tight'>
              Your Logo
            </span>
          </div>
        </div>

        {/* GARIS PEMBATAS */}
        <hr className='border-gray-400 dark:border-gray-700 mb-8' />

        {/* BAGIAN BAWAH: Navigasi & Sosial Media */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
          {/* Menu Navigasi*/}
          <nav className='flex flex-wrap justify-center md:justify-start gap-6 md:gap-8'>
            {['About', 'Service', 'Projects', 'Testimonials', 'FAQ'].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className='text-gray-700 dark:text-white hover:text-white text-sm md:text-[15px] font-semibold transition-colors duration-300'
                >
                  {item}
                </a>
              )
            )}
          </nav>

          {/* Gambar Sosial Media */}
          <div className='flex items-center'>
            <img
              src={socialMedia}
              alt='Social Media Links'
              className='h-8 md:h-10 w-auto object-contain cursor-pointer hover:scale-105 transition-all duration-300 invert-100 dark:invert-0 opacity-70 hover:opacity-100'
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
