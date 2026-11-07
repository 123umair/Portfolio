import React from 'react';
import { Card } from './Card';
import { experienceEvents } from '../../models/experience';

export const StatsCard: React.FC = () => {
  return (
    <Card className="col-span-1 md:col-span-2 flex flex-col justify-between min-h-62.5 p-6" id="experience">
      <div>
        <span className="text-[10px] uppercase tracking-widest text-gray-500">Journey</span>
        <h3 className="text-lg font-bold text-white mt-1 mb-6">Experience</h3>
      </div>

      <div className="relative border-l border-[#1a1a1a] ml-2 pl-4 space-y-4">
        {experienceEvents.map((event, idx) => (
          <div key={idx} className="relative group/item">
            {/* Timeline Dot */}
            <div className="absolute -left-5.25 top-1.5 w-2 h-2 rounded-full bg-gray-700 group-hover/item:bg-[#10b981] transition-colors duration-300" />
            <div className="text-[10px] font-mono text-[#10b981]">{event.year}</div>
            <div className="text-xs font-bold text-white">{event.role}</div>
            <div className="text-[10px] text-gray-500">{event.org}</div>
          </div>
        ))}
      </div>
    </Card>
  );
};
