import React, { useState } from 'react';

// Memanggil data layanan dari file contact
import { serviceOptions } from '../../data/contact';

// Import ikon status dari folder assets/icon sesuai instruksi
import successIcon from '../../assets/icon/Message Complete.png';
import failIcon from '../../assets/icon/Message Failed.png';

const AboutSection = () => {
  // State untuk menyimpan data form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State untuk menyimpan layanan yang dicentang (Checkbox)
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // State untuk mengatur status pengiriman: 'idle' | 'loading' | 'success' | 'error'
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  // Menangani perubahan input teks
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Menangani perubahan checkbox
  const handleCheckboxChange = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  // Menangani proses pengiriman (Submit)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');

    // Simulasi proses pengiriman data (delay 1.5 detik)
    setTimeout(() => {
      // LOGIKA SEDERHANA: Jika Name, Email, dan Message diisi, maka Berhasil. Jika tidak, Gagal.
      if (formData.name && formData.email && formData.message) {
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
      }
    }, 1500);
  };

  // Fungsi untuk kembali ke halaman utama (Refresh manual)
  const handleBackToHome = () => {
    window.location.reload();
  };

  return (
    <section
      id='about'
      className='py-20 md:py-32 bg-white dark:bg-black text-slate-900 dark:text-white transition-colors duration-300 relative'
    >
      <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* ======================================================== */}
        {/* TAMPILAN FORM KONTAK                                     */}
        {/* ======================================================== */}
        <div className='animate-in fade-in duration-500'>
          {/* Judul & Subjudul */}
          <div className='text-center mb-16 space-y-4'>
            <h2 className='text-3xl md:text-5xl font-semibold tracking-wide text-slate-900 dark:text-white'>
              Ready to Start? Let's Talk.
            </h2>
            <p className='text-base md:text-[18px] text-gray-500 dark:text-gray-500 max-w-2xl mx-auto'>
              Tell us what you need, and we'll get back to you soon.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className='space-y-10'>
            {/* Kolom Input Susun Atas-Bawah */}
            <div className='space-y-6 py-3'>
              {/* Input Name (Bentuk Kotak Persegi Panjang) */}
              <div className='space-y-2 relative'>
                <label
                  htmlFor='name'
                  className='text-[14px] font-semibold text-slate-700 dark:text-gray-300 px-2'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder='Enter your name'
                  className='w-full bg-transparent border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#FF6B4A] focus:border-[#FF6B4A] dark:focus:border-[#FF6B4A] transition-colors text-slate-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600'
                />
              </div>

              {/* Input Email (Bentuk Kotak Persegi Panjang) */}
              <div className='space-y-2 relative'>
                <label
                  htmlFor='email'
                  className='text-[14px] font-semibold text-slate-700 dark:text-gray-300 px-2'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder='Enter your email'
                  className='w-full bg-transparent border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#FF6B4A] focus:border-[#FF6B4A] dark:focus:border-[#FF6B4A] transition-colors text-slate-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600'
                />
              </div>

              {/* Input Message (Bentuk Kotak Persegi Panjang) */}
              <div className='space-y-2 relative'>
                <label
                  htmlFor='message'
                  className='text-[14px] font-semibold text-slate-700 dark:text-gray-300 px-2'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder='Enter your message'
                  rows={4}
                  className='w-full bg-transparent border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#FF6B4A] focus:border-[#FF6B4A] dark:focus:border-[#FF6B4A] transition-colors resize-none text-slate-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600'
                />
              </div>
            </div>

            {/* 6 Checkbox Layanan */}
            <div className='space-y-10 pt-0'>
              <label className='text-[15px] font-semibold text-black dark:text-gray-300'>
                Services
                <br />
                <br />
              </label>

              {/*2 kolom dan 3 baris */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-[-20]'>
                {serviceOptions.map((service) => (
                  <label
                    key={service}
                    className='flex items-center space-x-3 cursor-pointer group'
                  >
                    <div className='relative flex items-center justify-center w-5 h-5 border-2 border-gray-400 dark:border-gray-600 rounded-md bg-transparent transition-colors group-hover:border-[#FF6B4A]'>
                      <input
                        type='checkbox'
                        className='opacity-0 absolute inset-0 cursor-pointer'
                        checked={selectedServices.includes(service)}
                        onChange={() => handleCheckboxChange(service)}
                      />
                      {/* Kustomisasi Icon Centang */}
                      {selectedServices.includes(service) && (
                        <svg
                          className='w-3.5 h-3.5 text-[#FF6B4A] pointer-events-none'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M5 13l4 4L19 7'
                          />
                        </svg>
                      )}
                    </div>
                    <span className='text-sm font-medium text-black dark:text-white select-none group-hover:text-slate-900 dark:group-hover:text-white transition-colors'>
                      {service}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Tombol Send */}
            <button
              type='submit'
              disabled={submitStatus === 'loading'}
              className='w-full bg-[#FF6B4A] text-white rounded-4xl py-3 font-semibold text-lg transition-all duration-300 hover:bg-[#FF6B4A] dark:hover:bg-[#FF6B4A] hover:text-white flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed mt-8 shadow-md hover:shadow-lg'
            >
              {submitStatus === 'loading' ? (
                <span className='flex items-center gap-2'>
                  <svg
                    className='animate-spin h-5 w-5 text-current'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <circle
                      className='opacity-25'
                      cx='12'
                      cy='12'
                      r='10'
                      stroke='currentColor'
                      strokeWidth='4'
                    ></circle>
                    <path
                      className='opacity-75'
                      fill='currentColor'
                      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send'
              )}
            </button>
          </form>
        </div>

        {/* ======================================================== */}
        {/* TAMPILAN 2: MODAL / POP-UP (Overlay dengan Blur)         */}
        {/* ======================================================== */}
        {(submitStatus === 'success' || submitStatus === 'error') && (
          // pembungkus layar penuh dengan efek blur (backdrop-blur-sm) dan fixed position
          <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 dark:bg-black/60 backdrop-blur-sm p-4'>
            <div className='animate-in zoom-in-95 duration-500 w-full max-w-md mx-auto relative flex flex-col rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden'>
              <div className='bg-gray-100 dark:bg-[#121620] pt-12 pb-8 flex justify-center items-center'>
                {/* Ikon Gambar (Berhasil / Gagal) */}
                <div className='w-24 h-24 md:w-32 md:h-32 mb-6'>
                  <img
                    src={submitStatus === 'success' ? successIcon : failIcon}
                    alt={
                      submitStatus === 'success'
                        ? 'Message Complete'
                        : 'Message Failed'
                    }
                    className='w-full h-full object-contain drop-shadow-md'
                  />
                </div>
              </div>

              <div className='bg-white dark:bg-[#050505] p-8 md:p-10 text-center flex flex-col items-center'>
                {/* Judul & Subjudul Status */}
                <h3
                  className={`text-2xl md:text-2xl font-semibold mb-3 ${submitStatus === 'success' ? 'text-black dark:text-white' : 'text-black dark:text-white'}`}
                >
                  {submitStatus === 'success'
                    ? 'Message Received!'
                    : 'Oops! Something went wrong.'}
                </h3>
                <p className='text-slate-600 dark:text-gray-400 text-sm md:text-base mb-10 max-w-sm leading-relaxed'>
                  {submitStatus === 'success'
                    ? "Thanks for reaching out - we'll get back to you as soon as possible."
                    : "We couldn't send your message. Please try again or check your connection. "}
                </p>

                {/* Tombol Back to Home (Refresh) */}
                <button
                  onClick={handleBackToHome}
                  className='w-full bg-[#FF6B4A] text-white rounded-full py-4 font-bold text-base transition-all duration-300 hover:bg-[#FF6B4A] dark:hover:bg-[#FF6B4A] hover:text-white shadow-md active:scale-95'
                >
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;
