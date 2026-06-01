import React, { useState } from 'react';

// Import ikon chevron
import chevronDown from '../../assets/icon/chevron down.png';
import chevronUp from '../../assets/icon/chevron up.png';

// Memanggil data dari file services yang sudah dipisah
import { processSteps } from '../../data/services';

const ServicesSection = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleAccordion = (index: number) => {
    setOpenIndices((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <section
      id='service'
      className='py-16 md:py-24 bg-white dark:bg-black text-slate-900 dark:text-white transition-colors duration-300'
    >
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* ======================================= */}
        {/* JUDUL DAN SUBJUDUL */}
        {/* ======================================= */}
        <div className='text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4'>
          <h2 className='text-3xl md:text-4xl lg:text-[42px] font-semibold tracking-tight text-black dark:text-white tracking-wide'>
            Our Process
          </h2>
          <p className='text-base md:text-lg text-slate-600 dark:text-slate-300 tracking-wide'>
            Clear steps. Smart execution. Results you can count on.
          </p>
        </div>

        {/* ======================================= */}
        {/* TIMELINE ZIG-ZAG */}
        {/* ======================================= */}
        <div className='relative w-full'>
          <div className='space-y-6 md:space-y-12'>
            {processSteps.map((step, index) => {
              const isOpen = openIndices.includes(index);
              const isEven = index % 2 === 0;

              return (
                <div key={index} className='relative flex items-start w-full'>
                  {/* LINGKARAN ANGKA TENGAH */}
                  <div className='absolute left-[20px] md:left-1/2 transform -translate-x-1/2 top-[14px] w-10 h-10 md:w-15 md:h-15 rounded-full bg-[#FF6B4A] text-white flex items-center justify-center font-bold text-lg md:text-xl z-10 shadow-sm border-4 border-white dark:border-black'>
                    {index + 1}
                  </div>

                  {/* ========================================================================= */}
                  {/* GARIS VERTIKAL YANG DIKUNCI MATI (Menggunakan Inline Style yang kebal bug) */}
                  {/* ========================================================================= */}
                  {index !== processSteps.length - 1 && (
                    <>
                      {/* Garis khusus layar komputer/laptop */}
                      <div
                        className='hidden md:block absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-gray-200 dark:bg-gray-900 z-0'
                        style={{ top: '34px', bottom: '-82px' }}
                      ></div>

                      {/* Garis khusus layar HP/Mobile */}
                      <div
                        className='md:hidden absolute left-[20px] transform -translate-x-1/2 w-[2px] bg-gray-200 dark:bg-gray-900 z-0'
                        style={{ top: '34px', bottom: '-58px' }}
                      ></div>
                    </>
                  )}

                  {/* KOTAK KONTEN BUKA-TUTUP (ACCORDION) */}
                  <div
                    className={`w-full flex ${isEven ? 'md:justify-start' : 'md:justify-end'} pl-14 md:pl-0`}
                  >
                    <div
                      className={`w-full md:w-[48%] ${isEven ? 'md:pr-5 lg:pr-6' : 'md:pl-8 lg:pl-12'}`}
                    >
                      <div
                        className={`w-full rounded-xl border transition-all duration-300 overflow-hidden flex flex-col ${
                          isOpen
                            ? 'border-gray-200 bg-gray-100 dark:bg-[#0B0F19] dark:border-[#0B0F19] shadow-md shadow-[#FF6B4A]/10'
                            : 'border-gray-200 dark:border-[#0B0F19] bg-gray-100 dark:bg-[#0B0F19] hover:border-gray-300 dark:hover:border-[#0B0F19]'
                        }`}
                      >
                        <button
                          onClick={() => toggleAccordion(index)}
                          className='w-full flex justify-between items-center p-5 md:p-6 text-left focus:outline-none'
                        >
                          <h3
                            className={`text-lg md:text-xl font-semibold transition-colors duration-300 pr-4 ${
                              isOpen
                                ? 'text-black dark:text-white'
                                : 'text-black dark:text-slate-200'
                            }`}
                          >
                            {step.title}
                          </h3>

                          <img
                            src={isOpen ? chevronUp : chevronDown}
                            alt='Toggle'
                            className={`w-4 h-2 flex-shrink-0 transition-transform duration-300 
                              brightness-0 opacity-60 dark:invert dark:opacity-100
                                    `}
                          />
                        </button>

                        <div
                          className={`grid transition-all duration-300 ease-in-out ${
                            isOpen
                              ? 'grid-rows-[1fr] opacity-100'
                              : 'grid-rows-[0fr] opacity-0'
                          }`}
                        >
                          <div className='overflow-hidden'>
                            <p className='px-5 md:px-6 pb-5 md:pb-6 text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed'>
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
