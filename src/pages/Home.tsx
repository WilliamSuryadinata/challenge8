import React from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import SolutonsSection from '../components/sections/SolutionsSection';
import IndustrySection from '../components/sections/IndustrySection';
import PortfolioSection from '../components/sections/PortfolioSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import FAQSection from '../components/sections/FAQSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <Layout>
      <div className='w-full'>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SolutonsSection />
        <IndustrySection />
        <PortfolioSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </div>
    </Layout>
  );
};

export default Home;
