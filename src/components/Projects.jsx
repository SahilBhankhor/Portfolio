import { useMemo, useState } from 'react';
import { PROJECTS } from '../data/portfolio';
import { ArrowUpRightIcon } from './Icons';

const PROJECT_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'systems', label: 'C++ / Systems' },
  { id: 'web', label: 'Web / UI' },
  { id: 'python', label: 'Python CLI' },
];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const visibleProjects = useMemo(() => {
    if (filter === 'all') return PROJECTS;
    return PROJECTS.filter((project) => project.category === filter);
  }, [filter]);

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="mx-auto max-w-6xl">
        {/* Header + Crisp Glass Filter Bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="brutal-badge px-2.5 py-0.5 rounded-md bg-ink text-surface font-mono text-xs font-bold">
                03
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted font-semibold">
                Selected Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.025em] text-ink">
              My Projects
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter projects"
            className="glass-panel border-[1.5px] border-ink/30 p-1.5 rounded-xl inline-flex items-center gap-1 self-start sm:self-auto"
          >
            {PROJECT_FILTERS.map((tab) => {
              const active = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(tab.id)}
                  className={`px-3.5 py-1.5 rounded-lg font-mono text-xs font-semibold transition-all cursor-pointer ${
                    active
                      ? 'bg-ink text-surface shadow-[2px_2px_0_#2D523A]'
                      : 'text-muted hover:text-ink hover:bg-white/60'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Brutalist + Glassmorphic 2x2 Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7 relative">
          {/* Ambient tonal backdrop orbs so glass cards refract gentle depth */}
          <div
            className="hidden md:block absolute top-12 left-1/3 w-64 h-64 rounded-full bg-moss/14 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="hidden md:block absolute bottom-8 right-1/4 w-64 h-64 rounded-full bg-slate-500/16 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          {visibleProjects.map((project) => (
            <article
              key={project.id}
              className="brutal-glass-interactive rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative group"
            >
              <div>
                {/* Top Metadata Row */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-2.5">
                    <span className="brutal-badge px-2.5 py-1 rounded-lg bg-surface font-mono text-xs font-bold text-ink">
                      {project.index}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-moss font-semibold">
                      {project.origin}
                    </span>
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}`}
                    className="border-[1.5px] border-ink bg-surface shadow-[2.5px_2.5px_0_#141619] group-hover:bg-ink group-hover:text-surface w-10 h-10 rounded-xl inline-flex items-center justify-center text-ink transition-all duration-150"
                  >
                    <ArrowUpRightIcon className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

                {/* Title & Summary */}
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-ink group-hover:text-moss transition-colors">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus:outline-none hover:underline underline-offset-4 decoration-2"
                  >
                    {project.title}
                  </a>
                </h3>

                <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-muted">
                  {project.description}
                </p>
              </div>

              {/* Bottom Tags (Minimalist Bordered) + Direct Link */}
              <div className="mt-7 pt-5 border-t border-ink/15 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="minimal-tag px-2.5 py-1 rounded-md font-mono text-[11px] font-medium text-ink"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-wider text-ink hover:text-moss transition-colors"
                >
                  <span>{project.typeLabel}</span>
                  <ArrowUpRightIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
