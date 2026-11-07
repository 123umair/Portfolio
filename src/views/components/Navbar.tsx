import React, { useState } from 'react';
import { useScrollSpy } from '../../controllers/useScrollSpy';
import { profile, mailtoLink } from '../../models/profile';

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'stack', label: 'Tech Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
];

export const Navbar: React.FC = () => {
  const active = useScrollSpy(NAV_LINKS.map((l) => l.id));
  const [open, setOpen] = useState(false);

  const linkClass = (id: string) =>
    `hover:text-[#10b981] transition-colors ${active === id ? 'text-[#10b981]' : ''}`;

  return (
    <nav className="flex items-center justify-between py-6 max-w-6xl mx-auto w-full relative z-40">
      <a href="#top" className="text-xl font-bold text-white tracking-wider">
        UMAIR<span className="text-[#10b981]">.DEV</span>
      </a>

      <div className="hidden md:flex items-center space-x-10 text-sm font-medium text-gray-400">
        {NAV_LINKS.map((link) => (
          <a key={link.id} href={`#${link.id}`} className={linkClass(link.id)}>
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <a
          href={mailtoLink}
          className="bg-[#121212] border border-[#1a1a1a] text-white px-5 py-2 rounded-full text-xs font-semibold hover:bg-[#10b981] hover:text-black hover:border-[#10b981] transition-all duration-300"
        >
          Let's Connect
        </a>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden w-10 h-10 rounded-full bg-[#121212] border border-[#1a1a1a] flex items-center justify-center text-gray-300 hover:text-[#10b981] hover:border-[#10b981] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            {open ? (
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="absolute top-full inset-x-0 mt-2 md:hidden bg-[#0d0d0d] border border-[#1a1a1a] rounded-2xl p-2 flex flex-col shadow-2xl shadow-black/60">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                active === link.id
                  ? 'text-[#10b981] bg-[#10b981]/5'
                  : 'text-gray-300 hover:text-white hover:bg-[#141414]'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            onClick={() => setOpen(false)}
            className="px-4 py-3 mt-1 rounded-xl text-sm font-semibold text-black bg-[#10b981] hover:bg-[#34d399] transition-colors"
          >
            {profile.email}
          </a>
        </div>
      )}
    </nav>
  );
};
