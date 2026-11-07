import React from 'react';
import { Card } from './Card';

export const Aboutme: React.FC = () => {
  return (
    <Card className="flex flex-col justify-between min-h-75" id="about">
      {/* Top Header */}
      <div className="flex justify-between items-start">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-gray-500">Who I Am</span>
          <h3 className="text-lg font-bold text-white mt-1">About Me</h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-xs leading-relaxed mt-4">
        I engineer scalable web environments and hybrid applications. Grounded in strict clean code conventions, I make sure frontends perform beautifully while backend services scale reliably.
      </p>

      {/* Code Accent Footer */}
      <div className="text-[10px] font-mono text-emerald-500/80 bg-[#121212] border border-[#1c1c1c] px-3 py-1.5 rounded-lg w-fit mt-4">
        npm install developer --save
      </div>
    </Card>
  );
};