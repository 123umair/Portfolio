import React from 'react';
import { profile, mailtoLink } from '../../models/profile';

const FOOT_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'stack', label: 'Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
];

export const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="py-12 mt-12 border-t border-[#1a1a1a] flex flex-col items-center gap-5">
      <a href="#top" className="text-xl font-bold text-white tracking-wider hover:opacity-80 transition-opacity">
        UMAIR<span className="text-[#10b981]">.DEV</span>
      </a>

      {/* Actionable contact buttons */}
      <div className="flex items-center gap-3">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="w-10 h-10 rounded-xl bg-[#121212] border border-[#1a1a1a] flex items-center justify-center text-gray-400 hover:text-[#10b981] hover:border-[#10b981]/50 transition-all duration-300"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        </a>
        <a
          href={mailtoLink}
          aria-label={`Email ${profile.name}`}
          className="w-10 h-10 rounded-xl bg-[#121212] border border-[#1a1a1a] flex items-center justify-center text-gray-400 hover:text-[#10b981] hover:border-[#10b981]/50 transition-all duration-300"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
          </svg>
        </a>
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="w-10 h-10 rounded-xl bg-[#121212] border border-[#1a1a1a] flex items-center justify-center text-gray-400 hover:text-[#10b981] hover:border-[#10b981]/50 transition-all duration-300"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      </div>

      <div className="flex items-center gap-4 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
        {FOOT_LINKS.map((link) => (
          <a key={link.id} href={`#${link.id}`} className="hover:text-white transition-colors">
            {link.label}
          </a>
        ))}
      </div>

      <p className="text-[10px] text-gray-600 mt-2 text-center">
        &copy; {new Date().getFullYear()} Umair Khan ·{' '}
        <a href={mailtoLink} className="text-gray-500 hover:text-[#10b981] transition-colors">
          {profile.email}
        </a>
      </p>
    </footer>
  );
};
