import React from 'react';
import Button from '../ui/Button';
import heroDark from '../../assets/image/Hero-dark.png';
import heroLight from '../../assets/image/Hero-light.png';

const HeroSection = () => {
  return (
    <section
      id='home'
      className='w-full bg-white dark:bg-black text-slate-900 dark:text-white transition-colors duration-300 pt-28 pb-16 md:pt-36 md:pb-24 lg:min-h-[85vh] flex flex-col justify-center relative overflow-hidden'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex items-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center w-full'>
          {/* KIRI: Teks & Tombol */}
          <div className='space-y-6 text-center md:text-left order-2 md:order-1 flex flex-col justify-center'>
            <h1 className='text-4xl sm:text-5xl lg:text-[50px] font-semibold leading-[1.15] tracking-tight text-slate-900 dark:text-white tracking-wide'>
              Your Tech Partner for
              <br className='hidden lg:block' />
              <span className='text-[#FF6B4A]'> Smarter Growth</span>
            </h1>

            <p className='text-base sm:text-lg text-black dark:text-white max-w-lg mx-auto md:mx-0 leading-relaxed font-normal'>
              We deliver tailored IT solutions to help you scale with speed and
              confidence
            </p>

            <div className='flex flex-col sm:flex-row gap-5 justify-center md:justify-start pt-1'>
              <Button
                variant='primary'
                className='px-23 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-b from-[#FF6B4A] to-[#FF6B4A] transition-all duration-300 hover:-translate-y-1 shadow-md'
              >
                Let's Talk
              </Button>
            </div>
          </div>

          {/* KANAN: Gambar Hero Dinamis Mode Terang & Gelap */}
          <div className='order-1 md:order-2 flex justify-center md:justify-end items-center relative w-full h-full'>
            <div className='w-full max-w-md lg:max-w-lg xl:max-w-xl'>
              {/* Gambar Light Mode: Muncul saat terang, menghilang saat mode gelap (dark:hidden) */}
              <img
                src={heroLight}
                alt='Hero Illustration Light'
                className='w-full h-auto object-contain select-none rounded-xl block dark:hidden'
                draggable='false'
              />

              {/* Gambar Dark Mode: Awalnya tersembunyi (hidden), lalu muncul saat mode gelap (dark:block) */}
              <img
                src={heroDark}
                alt='Hero Illustration Dark'
                className='w-full h-auto object-contain select-none rounded-xl hidden dark:block'
                draggable='false'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
