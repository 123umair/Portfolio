import React from 'react';
import { Card } from './Card';
import { profile, mailtoLink } from '../../models/profile';

/** CTA card — the whole card opens an email to the real address */
export const ExperienceTimeline: React.FC = () => {
  return (
    <a href={mailtoLink} aria-label={`Email ${profile.name}`} className="block outline-none">
      <Card className="col-span-1 md:col-span-2 flex flex-col justify-end min-h-60 p-10 hover:shadow-[0_10px_40px_rgba(226,72,27,0.08)]">
        {/* Decorative Star Icon on Top Left of Content */}
        <div className="absolute top-10 left-10 text-gray-500 transition-colors duration-300 group-hover:text-[#e2481b]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499c.176-.436.745-.436.92 0l2.17 5.378 5.4 1.134c.475.1.666.678.322 1.026l-4.14 4.195 1.41 5.39c.12.457-.393.829-.785.578L12 18.23l-4.78 3.16c-.392.25-.912-.12-.785-.578l1.41-5.39-4.14-4.195c-.344-.348-.153-.925.322-1.026l5.4-1.134 2.17-5.378z"
            />
          </svg>
        </div>

        <div className="max-w-md">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight transition-colors duration-300 group-hover:text-[#e2481b]">
            Let's <br />
            work <span className="text-[#e2481b]">together.</span>
          </h2>
        </div>

        <div className="mt-6 flex items-center gap-3 text-xs font-mono text-gray-400">
          <span>{profile.email}</span>
          <span className="text-[#10b981] group-hover:translate-x-1 transition-transform duration-300">
            click to mail →
          </span>
        </div>
      </Card>
    </a>
  );
};
