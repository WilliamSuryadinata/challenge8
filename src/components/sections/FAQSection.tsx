import React, { useState } from 'react';
import { faqData } from '../../data/FAQ';
import consultationImg from '../../assets/image/Consultation.png';

const FAQSection = () => {
  // State untuk melacak indeks FAQ yang sedang terbuka
  const [openIndices, setOpenIndices] = useState<number[]>(
    faqData.map((_, i) => i)
  );

  const toggleFAQ = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section
      id='faq'
      className='py-20 bg-white dark:bg-black text-slate-900 dark:text-white transition-colors duration-300'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* ========================================================= */}
        {/* HEADER: JUDUL DI UJUNG KIRI & SUBJUDUL DI UJUNG KANAN     */}
        {/* ========================================================= */}
        <div className='flex flex-col md:flex-row justify-between items-start md:items-end gap-4 pb-6 border-b border-gray-300 dark:border-gray-800'>
          <h2 className='text-3xl md:text-4xl font-semibold text-black dark:text-white text-left tracking-wide'>
            Need Help? Start
            <br></br>
            Here.
          </h2>
          <p className='text-base text-gray-500 dark:text-slate-500 text-left md:text-right max-w-md leading-relaxed tracking-wide'>
            Everything you need to <br></br>
            know - all in one place.
          </p>
        </div>

        {/* ========================================================= */}
        {/* KONTEN UTAMA: KIRI (ACCORDION) & KANAN (KOTAK KONSULTASI) */}
        {/* ========================================================= */}
        <div className='flex flex-col lg:flex-row gap-12 mt-12 items-start'>
          {/* SEBELAH KIRI: DAFTAR TULISAN FAQ (ACCORDION BUKA TUTUP) */}
          <div className='w-full lg:w-3/5 space-y-2'>
            {faqData.map((item, index) => {
              const isOpen = openIndices.includes(index);
              return (
                <div
                  key={item.id}
                  className={`pb-5 pt-3 ${
                    index === faqData.length - 1
                      ? '' // Item terakhir tidak pakai garis bawah
                      : 'border-b border-gray-300 dark:border-gray-800'
                  }`}
                >
                  {/* Tombol Pertanyaan */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className='w-full flex justify-between items-center text-left py-2 focus:outline-none group'
                  >
                    <span className='text-lg md:text-[20px] font-semibold text-slate-900 dark:text-white group-hover:text-[#FF6B4A] transition-colors duration-200 tracking-wide'>
                      {item.question}
                    </span>
                    {/* Icon Buka Tutup Karakter Teks Standar (+ dan -) */}
                    <span className='text-3xl font-mono font-bold text-black dark:text-white ml-4 select-none w-6 text-center'>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {/* Panel Jawaban (Buka Tutup Smooth) */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen
                        ? 'max-h-[200px] mt-3 opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className='text-slate-600 dark:text-gray-400 text-sm md:text-[16px] leading-relaxed'>
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* SEBELAH KANAN: KOTAK INFORMASI / KONSULTASI */}
          <div className='w-auto lg:w-100 py-8 '>
            <div className='bg-[#ca4729] rounded-2xl p-6 border border-gray-800 shadow-xl flex flex-col'>
              {/* Bagian Atas: Judul & Subjudul di Dalam Kotak */}
              <div className='mb-6'>
                <h3 className='text-xl font-semibold text-[35px] text-white mb-1'>
                  Let's talk it through
                </h3>
                <p className='text-xs md:text-[18px] text-white'>
                  book a free consultation with our team.
                </p>
              </div>

              {/* Bagian Tengah: Gambar Konsultasi */}
              <div className='overflow-hidden rounded-xl flex justify-center items-center'>
                <img
                  src={consultationImg}
                  alt='Consultation Session blueprint'
                  className='w-full h-auto object-cover max-h-[200px] hover:scale-105 transition-transform duration-500'
                />
              </div>

              {/* Bagian Bawah: Placeholder Warna Putih dengan Tulisan di dalamnya */}
              <button className='w-full bg-black dark:bg-white rounded-4xl py-2 mt-4 text-center border border-gray-100 shadow-sm transition-all duration-200 hover:opacity-80 active:scale-95 cursor-pointer'>
                <span className='text-white dark:text-black text-xs md:text-[15px] leading-normal font-semibold'>
                  Free Consultation
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
