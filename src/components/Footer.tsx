import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 mt-12 border-t border-[#1a1a1a] flex flex-col items-center gap-4">
      <div className="text-xl font-bold text-white tracking-wider">
        UMAIR<span className="text-[#10b981]">.DEV</span>
      </div>

      <div className="flex items-center space-x-6 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#stack" className="hover:text-white transition-colors">Stack</a>
        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        <a href="#experience" className="hover:text-white transition-colors">Experience</a>
      </div>

      <p className="text-[10px] text-gray-600 mt-2">
        &copy; {new Date().getFullYear()} Umair Khan. Created with clean code.
      </p>
    </footer>
  );
};