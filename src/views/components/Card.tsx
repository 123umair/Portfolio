import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '', id }) => {
  return (
    <div id={id} className={`bg-[#0d0d0d] border border-[#1a1a1a] rounded-3xl p-6 relative overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:border-[#10b981]/30 hover:shadow-[0_10px_30px_rgba(16,185,129,0.05)] group cursor-pointer ${className}`}>
      {/* Subtle radial gradient on hover */}
      <div className="absolute inset-0 bg-linear-to-br from-transparent via-transparent to-[#10b981]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      {children}
    </div>
  );
};

export const ArrowIcon = () => (
  <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full border border-[#1a1a1a] flex items-center justify-center text-gray-500 transition-all duration-300 group-hover:bg-[#10b981] group-hover:text-black group-hover:border-[#10b981] group-hover:rotate-45">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  </div>
);