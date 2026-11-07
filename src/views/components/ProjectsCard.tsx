import React, { useEffect, useRef, useState } from 'react';
import { Card } from './Card';
import { projects } from '../../models/projects';
import type { Project } from '../../models/projects';

interface ProjectCardProps {
  project: Project;
  outerRef?: (el: HTMLDivElement | null) => void;
}

const ProjectPreview: React.FC<{ project: Project }> = ({ project }) => {
  const [failed, setFailed] = useState(false);

  // Under-construction preview: animated build-in-progress panel
  if (project.status === 'building') {
    return (
      <div
        className="rounded-2xl overflow-hidden bg-[#080808] border border-[#10b981]/10 relative group-hover:border-[#10b981]/25 transition-colors duration-500 w-full aspect-video flex flex-col items-center justify-center gap-4"
      >
        {/* Sweeping scan line */}
        <div className="scan-line" aria-hidden="true" />

        <span className="relative z-10 coming-soon-glow text-lg font-black tracking-[0.35em]">
          COMING SOON
        </span>

        <span className="relative z-10 text-[10px] font-mono text-[#10b981]/80 tracking-widest">
          BUILDING · {project.name.toUpperCase()} · MERN STACK
        </span>

        {/* Indeterminate progress bar */}
        <div className="relative z-10 w-1/2 h-1 rounded-full bg-[#141414] border border-[#222] overflow-hidden">
          <div className="progress-fill h-full w-2/5 rounded-full" />
        </div>

        {/* Terminal line with blinking cursor */}
        <span className="relative z-10 text-[9px] font-mono text-gray-600">
          $ npm run build --production
          <span className="cursor-blink">▍</span>
        </span>
      </div>
    );
  }

  return (
    <a
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${project.name}`}
      className="rounded-2xl overflow-hidden bg-[#0b0b0b] border border-[#1c1c1c] relative group hover:border-[#10b981]/20 transition-colors duration-500 w-full aspect-video block"
    >
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-2 bg-black/60 backdrop-blur-sm border-b border-[#1c1c1c]">
        <span className="text-[10px] font-mono text-[#10b981]">{project.name}</span>
        <div className="flex gap-1">
          <span className="w-2 h-2 rounded-full bg-gray-700" />
          <span className="w-2 h-2 rounded-full bg-gray-700" />
        </div>
      </div>

      {project.image && !failed ? (
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
          loading="lazy"
          onError={() => setFailed(true)}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-full min-h-[200px] flex items-center justify-center text-gray-700 font-bold tracking-widest uppercase text-sm">
          [ {project.name} Preview ]
        </div>
      )}
      <span className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] font-mono text-[#34d399] bg-black/70 border border-[#10b981]/30 rounded-md px-2 py-1 pointer-events-none">
        view live →
      </span>
    </a>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, outerRef }) => {
  return (
    <div
      ref={outerRef}
      className="relative z-10"
    >
      <Card
        className="flex flex-col gap-6 p-6 md:p-8 min-h-[350px] h-full"
      >
        <ProjectPreview project={project} />

        {/* Details Area */}
        <div className="w-full flex flex-col justify-between flex-grow">
          <div>
            <h3 className="text-2xl font-black text-white mt-2">{project.name}</h3>
            <p className="text-gray-400 text-xs mt-3 leading-relaxed">{project.description}</p>

            {/* Technology badges */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] bg-[#141414] border border-[#222] text-gray-400 px-2.5 py-1 rounded-md font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Call to Actions */}
          {project.status === 'building' ? (
            <div className="flex items-center gap-2 mt-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
              </span>
              <span className="text-xs font-bold text-gray-500 font-mono">
                In Development — Coming Soon
              </span>
            </div>
          ) : (
            <div className="flex gap-4 mt-6">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-bold text-white hover:text-[#10b981] transition-colors"
              >
                GitHub Repo <span>→</span>
              </a>
              <span className="text-gray-700">|</span>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-bold text-[#10b981] hover:underline"
              >
                Live Demo <span>→</span>
              </a>
            </div>
          )}
        </div>
      </Card>

      {/* Connector nodes: ports where the grid mid-line meets the card */}
      <span className="connector-node connector-node--left" aria-hidden="true" />
      <span className="connector-node connector-node--right" aria-hidden="true" />
    </div>
  );
};

interface RowLine {
  key: string;
  x1: number;
  x2: number;
  y: number;
}

interface ElbowTrace {
  key: string;
  d: string;
}

/**
 * Dedicated projects-only grid. An SVG circuit layer sits behind the cards and
 * draws the grid's mid line through every row, wiring each project card to the
 * next one. Green signal pulses travel along the traces from project to project.
 */
export const ProjectsCard: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [rows, setRows] = useState<RowLine[]>([]);
  const [elbows, setElbows] = useState<ElbowTrace[]>([]);

  useEffect(() => {
    const compute = () => {
      const grid = gridRef.current;
      if (!grid) return;

      const g = grid.getBoundingClientRect();
      const cards = cardRefs.current
        .filter((el): el is HTMLDivElement => Boolean(el))
        .map((el) => {
          const r = el.getBoundingClientRect();
          return {
            left: r.left - g.left,
            right: r.right - g.left,
            midY: r.top - g.top + r.height / 2,
          };
        });
      if (cards.length === 0) return;

      // Group cards into visual rows (same row ⇒ tops within 24px)
      cards.sort((a, b) => a.midY - b.midY || a.left - b.left);
      const grouped: typeof cards[] = [];
      let current = [cards[0]];
      for (let i = 1; i < cards.length; i++) {
        if (Math.abs(cards[i].midY - current[0].midY) < 24) {
          current.push(cards[i]);
        } else {
          grouped.push(current);
          current = [cards[i]];
        }
      }
      grouped.push(current);

      const rowLines: RowLine[] = grouped.map((row, i) => {
        const x1 = Math.min(...row.map((c) => c.left));
        const x2 = Math.max(...row.map((c) => c.right));
        const y = row.reduce((sum, c) => sum + c.midY, 0) / row.length;
        return { key: `row-${i}`, x1, x2, y };
      });

      // Route the line around the right side of the grid to the next row
      const traces: ElbowTrace[] = [];
      for (let i = 0; i < rowLines.length - 1; i++) {
        const a = rowLines[i];
        const b = rowLines[i + 1];
        const connX = g.width + 14;
        traces.push({
          key: `elbow-${i}`,
          d: `M ${a.x2} ${a.y} L ${connX} ${a.y} L ${connX} ${b.y} L ${b.x1} ${b.y}`,
        });
      }

      setRows(rowLines);
      setElbows(traces);
    };

    compute();
    const timeout = window.setTimeout(compute, 450); // re-measure once images/fonts settle
    const observer = new ResizeObserver(compute);
    if (gridRef.current) observer.observe(gridRef.current);
    window.addEventListener('resize', compute);

    return () => {
      window.clearTimeout(timeout);
      observer.disconnect();
      window.removeEventListener('resize', compute);
    };
  }, []);

  return (
    <div ref={gridRef} className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Circuit layer: grid mid line + green signals (painted under the cards) */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-visible"
        width="100%"
        height="100%"
      >
        {/* Mid line through the middle of every grid row */}
        {rows.map((row, i) => (
          <g key={row.key}>
            <line
              x1={row.x1}
              y1={row.y}
              x2={row.x2}
              y2={row.y}
              className="signal-base"
            />
            <line
              x1={row.x1}
              y1={row.y}
              x2={row.x2}
              y2={row.y}
              className="signal-flow"
            />
            {/* Green signal travelling from project to project on this row */}
            <circle r="3.5" className="signal-pulse">
              <animateMotion
                dur="4s"
                begin={`${i * 1.35}s`}
                repeatCount="indefinite"
                path={`M ${row.x1} ${row.y} L ${row.x2} ${row.y}`}
              />
            </circle>
          </g>
        ))}

        {/* Traces connecting the end of one row to the start of the next */}
        {elbows.map((elbow, i) => (
          <g key={elbow.key}>
            <path d={elbow.d} className="signal-base" fill="none" />
            <path d={elbow.d} className="signal-flow" fill="none" />
            <circle r="3.5" className="signal-pulse">
              <animateMotion
                dur="3.2s"
                begin={`${1.0 + i * 1.35}s`}
                repeatCount="indefinite"
                path={elbow.d}
              />
            </circle>
          </g>
        ))}
      </svg>

      {projects.map((project, index) => (
        <ProjectCard
          key={`${project.id}-${index}`}
          project={project}
          outerRef={(el) => {
            cardRefs.current[index] = el;
          }}
        />
      ))}
    </div>
  );
};
