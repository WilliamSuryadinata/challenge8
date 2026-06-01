import type { IndustryItem } from '../types';

// Impor gambar langsung di file data agar file tampilan tetap bersih
import fintech from '../assets/image/Fintench.png';
import ecommerce from '../assets/image/E-commerce.png';
import healthcare from '../assets/image/health.png';

export const industryData: IndustryItem[] = [
  {
    id: 'fintech',
    title: 'Fintech',
    description:
      'We build secure, compliant fintech solutions - from digital wallets to core banking systems - tailored to modern financial needs.',
    image: fintech,
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    description:
      'Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.',
    image: ecommerce,
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description:
      'Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.',
    image: healthcare,
  },
];
