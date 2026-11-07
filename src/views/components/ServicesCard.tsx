import React from 'react';
import { Card } from './Card';
import { techStack } from '../../models/techStack';

export const ServicesCard: React.FC = () => {
  return (
    <Card className="col-span-1 md:col-span-2 flex flex-col justify-between min-h-[250px]" id="stack">
      <div>
        <span className="text-[10px] uppercase tracking-widest text-gray-500">Core Engine</span>
        <h3 className="text-lg font-bold text-white mt-1">Tech Stack</h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-4">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl bg-[#121212] border ${tech.color} text-xs font-semibold hover:bg-[#1a1a1a] hover:-translate-y-0.5 transition-all duration-300`}
          >
            <span>{tech.icon}</span>
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};
