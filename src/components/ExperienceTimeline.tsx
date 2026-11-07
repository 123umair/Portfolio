import React from 'react';
import { Card, ArrowIcon } from './Card';

export const ExperienceTimeline: React.FC = () => {
  return (
    <Card className="col-span-1 md:col-span-2 flex flex-col justify-end min-h-60 p-10">
      {/* Decorative Star Icon on Top Left of Content */}
      <div className="absolute top-10 left-10 text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.176-.436.745-.436.92 0l2.17 5.378 5.4 1.134c.475.1.666.678.322 1.026l-4.14 4.195 1.41 5.39c.12.457-.393.829-.785.578L12 18.23l-4.78 3.16c-.392.25-.912-.12-.785-.578l1.41-5.39-4.14-4.195c-.344-.348-.153-.925.322-1.026l5.4-1.134 2.17-5.378z" />
        </svg>
      </div>

      <div className="max-w-md">
        <h2 className="text-3xl md:text-5xl  font-extrabold text-white leading-tight">
          Let's <br />work <span className="text-blue-500">together.</span>
        </h2>
      </div>
      <ArrowIcon />
    </Card>
  );
};