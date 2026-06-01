import React, { useState, useEffect } from 'react';
import { testimonialsData } from '../../data/testimonials';
import type { TestimonialItem } from '../../types';
import ratingImg from '../../assets/image/Rating.png';
import vectorIcon from '../../assets/icon/Vector.png';

const TestimonialsSections = () => {
  // State untuk melacak slide mana yang sedang aktif (tengah)
  const [activeIndex, setActiveIndex] = useState(1);

  // STATE BARU: Pendeteksi layar
  const [isMobile, setIsMobile] = useState(false);
  // STATE: Untuk melacak sentuhan jari (Touch) & Geseran Mouse (Drag)
  const [isDragging, setIsDragging] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const minSwipeDistance = 50; // Jarak minimal geseran (50px)

  // EFEK BARU: Mendeteksi ukuran layar
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // KUNCI PRESISI TENGAH:
  const slideDistance = isMobile ? 352 : 512;

  //berpindah slide
  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
  };

  // Logika membaca geseran jari / kursor
  const handleSwipe = () => {
    if (!touchStartX || !touchEndX) return;

    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    // Geser ke kiri
    if (isLeftSwipe && activeIndex < testimonialsData.length - 1) {
      handleSlideChange(activeIndex + 1);
    }
    // Geser ke kanan
    if (isRightSwipe && activeIndex > 0) {
      handleSlideChange(activeIndex - 1);
    }

    // Reset posisi
    setTouchStartX(null);
    setTouchEndX(null);
  };

  // --- EVENT PENGGUNA HP (TOUCH) ---
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    handleSwipe();
  };

  // --- EVENT PENGGUNA KOMPUTER (MOUSE DRAG) ---
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setTouchEndX(null);
    setTouchStartX(e.clientX);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setTouchEndX(e.clientX);
  };

  const onMouseUp = () => {
    if (!isDragging) return;
    handleSwipe();
    setIsDragging(false);
  };

  const onMouseLeave = () => {
    if (!isDragging) return;
    handleSwipe();
    setIsDragging(false);
  };

  return (
    <section
      id='testimonials'
      className='py-20 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 overflow-hidden'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
        {/* JUDUL & SUBJUDUL                        */}
        <div className='text-center max-w-3xl mx-auto mb-16 space-y-4'>
          <h2 className='text-3xl md:text-4xl lg:text-[35px] font-semibold tracking-tight text-black dark:text-white'>
            What Partners Say About Working With Us
          </h2>
          <p className='text-gray-500 dark:text-gray-400 text-lg md:text-xl font-medium'>
            Trusted voices. Real experiences. Proven results.
          </p>
        </div>

        {/* SLIDER CONTAINER                        */}
        <div
          className='relative w-full pt-10 pb-24 overflow-hidden select-none cursor-grab active:cursor-grabbing'
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
        >
          {/* Efek Gelap di Sisi Kiri dan Kanan */}
          <div className='absolute inset-y-0 left-0 w-40 bg-linear-to-r from-white to-transparent dark:from-black to-transparent z-30 pointer-events-none'></div>
          <div className='absolute inset-y-0 right-0 w-40 bg-linear-to-l from-white to-transparent dark:from-black to-transparent z-30 pointer-events-none'></div>

          {/* Track Slider */}
          <div
            className='flex justify-center items-center transition-all duration-700 ease-in-out gap-8'
            style={{
              transform: `translateX(${(1 - activeIndex) * slideDistance}px)`,
            }}
          >
            {testimonialsData.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSlideChange(index)}
                  className={`shrink-0 cursor-pointer transition-all duration-500 transform 
            ${
              isActive
                ? 'opacity-100 scale-100 z-20'
                : 'opacity-40 scale-90 z-10'
            }
          `}
                >
                  <TestimonialCard item={item} isActive={isActive} />
                </div>
              );
            })}
          </div>

          {/* NAVIGASI TITIK TIGA (LINGKARAN STATIS)  */}
          <div className='absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-1.5'>
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 
          ${
            index === activeIndex
              ? 'bg-[#FF6B4A]'
              : 'bg-gray-300 dark:bg-gray-900'
          }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// KOMPONEN KOTAK TESTIMONIAL
// ========================================================
const TestimonialCard = ({
  item,
  isActive,
}: {
  item: TestimonialItem;
  isActive: boolean;
}) => {
  return (
    <div
      className={`relative bg-gray-200 dark:bg-[#0B0F19] rounded-2xl p-6 pt-10 pb-12 border transition-all duration-500 flex flex-col items-center text-center w-[320px] md:w-[480px] h-80 shrink-0 pointer-events-none
      ${isActive ? 'border-[#FF6B4A]' : 'border-gray-800'}
    `}
    >
      {/* ICON VECTOR */}
      <div className='absolute -top-8 left-0 w-35 h-15 flex items-center justify-center rounded-full p-2'>
        <img
          src={vectorIcon}
          alt='Quote Icon'
          draggable={false}
          className='w-full h-full object-contain opacity-80'
        />
      </div>

      {/* GAMBAR RATING */}
      <div className='mb-6 flex justify-center w-full'>
        <img
          src={ratingImg}
          alt='Rating Stars'
          draggable={false}
          className='h-5 md:h-6 object-contain'
        />
      </div>

      {/* KUTIPAN */}
      <p className='text-black dark:text-gray-300 text-sm md:text-[16px] font-semibold leading-relaxed mb-4 flex-grow'>
        "{item.quote}"
      </p>

      {/* IDENTITAS */}
      <div className='space-y-1 w-full mb-4'>
        <h4 className='text-lg font-semibold text-black dark:text-white'>
          {item.name}
        </h4>
        <p className='text-[#FF6B4A] text-sm md:text-base font-medium'>
          {item.role}
        </p>
      </div>

      {/* FOTO PROFIL */}
      <div
        className={`absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full overflow-hidden bg-gray-900 shadow-md transition-all duration-500
      `}
      >
        <img
          src={item.image}
          alt={item.name}
          draggable={false}
          className='w-full h-full object-cover'
        />
      </div>
    </div>
  );
};

export default TestimonialsSections;
