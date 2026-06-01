import type { TestimonialItem } from '../types';
import johnLee from '../assets/image/John Lee.png';
import sarahTan from '../assets/image/Sarah Tan.png';
import emilyChen from '../assets/image/Emily Chen.png';

export const testimonialsData: TestimonialItem[] = [
  {
    id: 1,
    name: 'John Lee',
    role: 'Creative Director at Innovate Corp',
    quote:
      'Working with this team was a game-changer for our project. They understood our vision and turned it into reality efficiently and effectively.',
    image: johnLee,
  },
  {
    id: 2,
    name: 'Sarah Tan',
    role: 'Product Manager at Finovate',
    quote:
      'The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.',
    image: sarahTan,
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Marketing Head at Tech Solutions',
    quote:
      'The collaboration was seamless, and the results surpassed our expectations. Their expertise transformed our ideas into a successful product.',
    image: emilyChen,
  },
];
