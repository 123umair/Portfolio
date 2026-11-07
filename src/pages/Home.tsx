import React, { useRef } from 'react';
import { Navbar } from '../components/Navbar';
import { HeroCard } from '../components/HeroCard';
import { CredentialsCard } from '../components/CredentialsCard';
import { ProjectsCard } from '../components/ProjectsCard';
import { Aboutme } from '../components/Aboutme';
import { ServicesCard } from '../components/ServicesCard';
import { DeveloperProfile } from '../components/DeveloperProfile';
import { StatsCard } from '../components/StatsCard';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { Footer } from '../components/Footer';
import { useBentoAnimation } from '../hooks/useBentoAnimation';

export const Home: React.FC = () => {
  const introRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLElement>(null);

  useBentoAnimation(introRef);
  useBentoAnimation(projectsRef);
  useBentoAnimation(detailsRef);

  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans antialiased overflow-x-hidden selection:bg-[#10b981]/30 selection:text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <Navbar />

        {/* AREA 1: Who I am + Terminal */}
        <section
          ref={introRef}
          className="bento-grid grid grid-cols-1 md:grid-cols-4 gap-6 mt-6"
        >
          <HeroCard />
          <CredentialsCard />
        </section>

        {/* AREA 2: Projects (its own section) */}
        <section id="projects" className="mt-16 scroll-mt-24">
          <div className="mb-6">
            <span className="text-[10px] uppercase tracking-widest text-[#10b981] font-bold">
              Portfolio
            </span>
            <h2 className="text-3xl font-black text-white mt-1">Projects</h2>
          </div>

          <div
            ref={projectsRef}
            className="bento-grid"
          >
            <ProjectsCard />
          </div>
        </section>

        {/* AREA 3: About, skills, timeline, stats, services */}
        <section
          ref={detailsRef}
          className="bento-grid grid grid-cols-1 md:grid-cols-4 gap-6 mt-16"
        >
          <Aboutme />
          <DeveloperProfile />
          <ExperienceTimeline />
          <StatsCard />
          <ServicesCard />
        </section>

        <Footer />
      </div>
    </div>
  );
};