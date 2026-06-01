import React from 'react';

import logo1 from '../../assets/image/Company logo-1.png';
import logo2 from '../../assets/image/Company logo-2.png';
import logo3 from '../../assets/image/Company logo-3.png';
import logo4 from '../../assets/image/Company logo-4.png';
import logo5 from '../../assets/image/Company logo-5.png';
import logo6 from '../../assets/image/Company logo-6.png';
import logo7 from '../../assets/image/Company logo-7.png';
import logo8 from '../../assets/image/Company logo-8.png';

const AboutSection = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

  // Data untuk komponen statistik bulat
  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '5+', label: 'Years of Experience' },
    { number: '10+', label: 'Industry Awards Won' },
    { number: '100%', label: 'Client Satisfaction Rate' },
  ];

  return (
    <section
      id='about'
      className='py-16 md:py-24 bg-white dark:bg-black text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden border-t border-gray-100 dark:border-black'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* ========================================= */}
        {/* BAGIAN ATAS: LOGO MARQUEE (TRUSTED BY) */}
        {/* ========================================= */}
        <div className='mb-20 md:mb-28'>
          <div className='text-center mb-10'>
            <h3 className='text-xl md:text-2xl font-semibold text-black dark:text-white tracking-wide'>
              Trusted by Global innovators & leading Brands
            </h3>
          </div>

          <div className='relative w-full overflow-hidden py-4'>
            <div className='absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent dark:from-black dark:to-transparent z-10 pointer-events-none'></div>
            <div className='absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent dark:from-black dark:to-transparent z-10 pointer-events-none'></div>

            <div className='flex overflow-hidden select-none'>
              <div className='animate-marquee flex gap-12 md:gap-20 items-center pr-12 md:pr-20'>
                {[...logos, ...logos].map((logo, index) => (
                  <img
                    key={index}
                    src={logo}
                    alt='Partner Logo'
                    className='h-8 md:h-10 w-auto object-contain opacity-60 grayscale dark:invert dark:opacity-80 transition-opacity hover:opacity-100 hover:grayscale-0 shrink-0'
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* BAGIAN BAWAH: STATISTIK BULAT (INNOVATE WITH TECHNOVA) */}
        {/* ========================================= */}
        <div className='flex flex-col items-center justify-center w-full'>
          {/* Judul & Subjudul */}
          <div className='text-center max-w-3xl mx-auto mb-16 space-y-0'>
            <h2 className='md:py-10 text-3xl md:text-4xl lg:text-[36px] font-semibold tracking-tight text-black dark:text-white'>
              End-to-End IT Solutions That Drive Results
            </h2>
            <p className='text-base md:text-lg text-slate-700 dark:text-slate-400 leading-relaxed font-normal'>
              From strategy to execution, we deliver solutions that grow your
              business.
            </p>
          </div>

          {/* Grid Lingkaran Statistik */}
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 w-full justify-items-center'>
            {stats.map((stat, index) => (
              /* Trik Gradient Border: Kontainer luar diberi padding [2px] dengan background gradient */
              <div
                key={index}
                className='relative flex items-center justify-center w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-tr transition-transform duration-300 hover:-translate-y-2'
              >
                {/* Kontainer Dalam: Menggunakan background utama (hitam/putih) agar tengahnya bolong */}
                <div className='flex flex-col items-center justify-center w-full h-full bg-slate-100 dark:bg-[#0B0F19] rounded-full text-center px-4'>
                  <h4 className='text-4xl md:text-5xl font-semibold text-[#FF6B4A] mb-2 tracking-tight'>
                    {stat.number}
                  </h4>
                  <p className='text-base md:text-base font-semibold text-slate-700 dark:text-slate-300'>
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
