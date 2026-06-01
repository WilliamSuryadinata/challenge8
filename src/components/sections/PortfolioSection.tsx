import React from 'react';
// Panggil data projects dari file portfolio.ts
// Sesuaikan jalur '../' agar tepat mengarah ke folder data Anda
import { projects } from '../../data/portfolio';

const PortfolioSection = () => {
  return (
    <section
      id='portfolio'
      className='py-16 md:py-24 bg-white dark:bg-black text-slate-900 dark:text-white transition-colors duration-300'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* ======================================= */}
        {/* JUDUL DAN SUBJUDUL DI TENGAH            */}
        {/* ======================================= */}
        <div className='text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-5'>
          <h2 className='text-3xl md:text-4xl lg:text-[32px] font-semibold tracking-tight text-black dark:text-white'>
            From Vision to Launch! Projects We’re Proud Of
          </h2>
          <p className='text-base md:text-[12] text-slate-600 dark:text-slate-400'>
            Take a closer look at our recent work powering startups, enterprise,
            and everything in between.
          </p>
        </div>

        {/* ======================================= */}
        {/* GRID GAMBAR PORTOFOLIO (3 Kolom)         */}
        {/* ======================================= */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6'>
          {projects.map((project) => (
            <div
              key={project.id}
              className='group flex flex-col space-y-3 cursor-pointer'
            >
              {/* Bingkai Gambar dengan Efek Zoom Saat Hover */}
              <div className='overflow-hidden rounded-2xl border border-white dark:border-gray-900 bg-gray-50 dark:bg-gray-900'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-[350px] object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105'
                />
              </div>

              {/* AREA TULISAN DI SEBELAH KIRI */}
              <div className='text-left space-y-1 px-1'>
                {/* Tulisan Orange (Kategori) */}
                <p className='text-[#FF6B4A] font-light lg:text-[16px] md:text-sm tracking-wider'>
                  {project.category}
                </p>

                {/* Tulisan Putih/Gelap (Judul Proyek) */}
                <h3 className='text-lg md:text-xl font-semibold text-slate-900 dark:text-white transition-colors duration-300'>
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
