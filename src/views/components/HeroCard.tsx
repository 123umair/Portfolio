import React from 'react';
import { Card } from './Card';
import { profile } from '../../models/profile';

export const HeroCard: React.FC = () => {
  return (
    <Card className="col-span-1 md:col-span-2 flex flex-col justify-between min-h-80 p-8">
      <div className="flex flex-col-reverse sm:flex-row justify-between items-start gap-6">
        {/* Left Side: Info */}
        <div className="grow">
          <span className="text-xs uppercase tracking-[0.2em] text-[#10b981] font-bold">{profile.headline}</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-3 leading-tight tracking-tight">
            {profile.name}
          </h1>
          <p className="text-gray-400 text-sm mt-4 leading-relaxed max-w-sm">{profile.tagline}</p>

          {/* Quick actions */}
          <div className="flex gap-3 mt-5 flex-wrap">
            <a
              href="#projects"
              className="bg-[#10b981] text-black px-4 py-2 rounded-full text-[11px] font-bold hover:bg-[#34d399] hover:shadow-[0_0_16px_rgba(16,185,129,0.4)] transition-all duration-300"
            >
              View Projects →
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#121212] border border-[#222] px-4 py-2 rounded-full text-[11px] font-bold text-gray-300 hover:text-[#10b981] hover:border-[#10b981]/50 transition-all duration-300"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        {/* Right Side: portrait image */}
        <div className="w-32 h-40 sm:w-36 sm:h-44 rounded-2xl overflow-hidden bg-[#141414] border border-[#222] p-1.5 shrink-0 mx-auto sm:mx-0 shadow-lg shadow-black/50">
          <div className="w-full h-full rounded-[10px] overflow-hidden bg-linear-to-tr from-[#10b981]/20 to-transparent">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-full h-full object-cover object-top grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500 ease-out"
            />
          </div>
        </div>
      </div>

      {/* Bottom Badges */}
      <div className="flex gap-3 mt-6 flex-wrap">
        <span className="text-[10px] bg-[#141414] border border-[#222] px-3 py-1.5 rounded-full text-gray-400 font-mono">
          📍 {profile.location}
        </span>
        <span className="text-[10px] bg-[#141414] border border-[#222] px-3 py-1.5 rounded-full text-gray-400 font-mono flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
          Open to remote roles
        </span>
      </div>
    </Card>
  );
};
