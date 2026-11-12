import React from 'react';
import { Card } from './Card';
import { Zap } from 'lucide-react';

export const CredentialsCard: React.FC = () => {
  return (
    <Card className="col-span-1 md:col-span-2 flex flex-col min-h-75 font-mono p-6 text-xs text-left bg-[#080808]">
      {/* Window Controls */}
      <div className="flex gap-1.5 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
      </div>

      <div className="space-y-3 grow select-none">
        <div>
          <span className="text-gray-500">$</span> <span className="text-[#10b981]">whoami</span>
          <p className="text-white mt-1">umair-khan (Full-Stack Engineer)</p>
        </div>
        <div>
          <span className="text-gray-500">$</span> <span className="text-[#10b981]">skills --main</span>
          <p className="text-white mt-1">React, Node.js, Express, MongoDB</p>
        </div>
        <div>
          <span className="text-gray-500">$</span> <span className="text-[#10b981]">currently</span>
          <p className="text-[#10b981] mt-1 animate-pulse flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5" strokeWidth={2.5} />
            Building scalable applications
          </p>
        </div>
      </div>
    </Card>
  );
};