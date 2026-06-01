// src/components/ui/Card.tsx
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    // Penambahan dark:bg-gray-900 dan dark:border-gray-800 adalah kunci agar kartu ikut gelap
    <div
      className={`bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
