import React from 'react';
import { Card } from './Card';
import { useClipboardFeedback } from '../../controllers/useClipboardFeedback';
import { mailtoLink } from '../../models/profile';

const NPM_CMD = 'npm install umair-khan --save';

export const Aboutme: React.FC = () => {
  const { copied, copy } = useClipboardFeedback();

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
        I engineer scalable web environments and hybrid applications. Grounded in strict clean code
        conventions, I make sure frontends perform beautifully while backend services scale reliably.
      </p>

      {/* Code Accent Footer — click to copy */}
      <button
        onClick={() => copy(NPM_CMD)}
        title="Click to copy"
        className={`text-left text-[10px] font-mono ${
          copied ? 'text-white bg-[#10b981] text-black border-[#10b981]' : 'text-emerald-500/80'
        } bg-[#121212] border border-[#1c1c1c] px-3 py-1.5 rounded-lg w-fit mt-4 hover:border-[#10b981]/50 transition-all duration-300`}
      >
        {copied ? '✓ copied to clipboard' : NPM_CMD}
      </button>

      <a
        href={mailtoLink}
        className="text-[10px] font-mono text-gray-500 hover:text-[#10b981] transition-colors w-fit mt-2"
      >
        → collaborate? email me
      </a>
    </Card>
  );
};
