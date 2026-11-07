import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between py-6 max-w-6xl mx-auto w-full">
      <div className="text-xl font-bold text-white tracking-wider">
        UMAIR<span className="text-[#10b981]">.DEV</span>
      </div>

      <div className="hidden md:flex items-center space-x-10 text-sm font-medium text-gray-400">
        <a href="#about" className="hover:text-[#10b981] transition-colors">About</a>
        <a href="#stack" className="hover:text-[#10b981] transition-colors">Tech Stack</a>
        <a href="#projects" className="hover:text-[#10b981] transition-colors">Projects</a>
        <a href="#experience" className="hover:text-[#10b981] transition-colors">Experience</a>
      </div>

      <a 
        href="mailto:your-email@example.com"
        className="bg-[#121212] border border-[#1a1a1a] text-white px-5 py-2 rounded-full text-xs font-semibold hover:bg-[#10b981] hover:text-black hover:border-[#10b981] transition-all duration-300"
      >
        Let's Connect
      </a>
    </nav>
  );
};