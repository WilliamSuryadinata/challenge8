/**
 * Button Component - EXAMPLE FILE
 *
 * File ini adalah CONTOH implementasi Button component.
 * Kamu bisa menggunakan ini sebagai reference atau
 * membuat implementasi sendiri dari scratch.
 *
 * Untuk menggunakan:
 * 1. Rename file ini menjadi Button.tsx (hapus .example)
 * 2. Adjust styling sesuai design Figma
 * 3. Add more variants jika diperlukan
 */

import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = ({
  variant = 'primary',
  children,
  onClick,
  className = '',
}: ButtonProps) => {
  // PERHATIKAN: rounded-lg sudah diganti menjadi rounded-full di baris ini
  const baseStyle =
    'px-6 py-3 rounded-full font-semibold transition-all duration-300';

  const variants = {
    primary: 'bg-[#FF6B4A] text-white hover:bg-[#FF6B4A]',
    outline: 'border-2 border-[#FF6B4A] text-[#FF6B4A] hover:bg-[#FF6B4A]',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
/**
 * USAGE EXAMPLES:
 *
 * // Primary button (default)
 * <Button onClick={handleClick}>Click Me</Button>
 *
 * // Secondary variant
 * <Button variant="secondary">Secondary</Button>
 *
 * // Outline variant with large size
 * <Button variant="outline" size="lg">Large Outline</Button>
 *
 * // Disabled state
 * <Button disabled>Disabled</Button>
 *
 * // With custom classes
 * <Button className="w-full">Full Width Button</Button>
 *
 * // Submit button for forms
 * <Button type="submit" variant="primary">Submit</Button>
 */

/**
 * TODO untuk kamu:
 * 1. Lihat button styles di Figma design
 * 2. Update colors sesuai design system (primary color, etc)
 * 3. Adjust padding, border-radius, font-size
 * 4. Add more variants jika diperlukan (e.g., 'ghost', 'link')
 * 5. Consider adding icon support:
 *    - leftIcon prop
 *    - rightIcon prop
 * 6. Add loading state jika diperlukan
 * 7. Test semua variants dan sizes
 */
