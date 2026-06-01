import React from 'react';
import Navbar from './Navbar';
// import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    // Ubah bg-gray-50 menjadi bg-transparent agar mengikuti warna body index.css
    <div className='min-h-screen font-sans bg-transparent pt-20'>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
