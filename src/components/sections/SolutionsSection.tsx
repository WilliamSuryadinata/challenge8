import React from 'react';

// Memanggil data yang sudah dirapikan dari file terpisah
import { solutionsData } from '../../data/solutions';

const SolutionsSection = () => {
  return (
    <section
      id='solutions'
      className='py-16 md:py-24 bg-white dark:bg-black text-slate-900 dark:text-white transition-colors duration-300'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* ======================================= */}
        {/* JUDUL DAN SUBJUDUL DI TENGAH            */}
        {/* ======================================= */}
        <div className='text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4'>
          <h2 className='text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight text-slate-900 dark:text-white'>
            Smart IT Solutions That Go With You
          </h2>
          <p className='text-base md:text-lg text-slate-600 dark:text-slate-400'>
            Tailored tech to boost efficiency, security, and results
          </p>
        </div>

        {/* ======================================= */}
        {/* GRID 9 KOTAK                            */}
        {/* ======================================= */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-14 pt-4 md:pt-8'>
          {solutionsData.map((item, index) => (
            <div
              key={index}
              className='group relative p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-[#0B0F19] transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6B4A] hover:shadow-xl hover:shadow-[#FF6B4A]/20 cursor-pointer flex flex-col h-full'
            >
              {/* IKON LAYANAN - Desain menembus ujung kotak dipertahankan utuh */}
              <div className='absolute -top-10 left-1 w-30 h-20 flex items-center justify-center'>
                <img
                  src={item.icon}
                  alt={item.title}
                  className='w-full h-full object-contain transition-transform duration-300 group-hover:scale-110'
                />
              </div>

              {/* TEKS JUDUL */}
              <h3 className='text-xl font-bold mb-3 mt-6 text-slate-900 dark:text-white transition-colors duration-300'>
                {item.title}
              </h3>

              {/* TEKS DESKRIPSI */}
              <p className='text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base flex-grow'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
