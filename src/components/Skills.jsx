import { useMemo, useState } from 'react';
import { SKILL_CATEGORIES, SKILLS } from '../data/portfolio';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const filteredSkills = useMemo(() => {
    if (activeCategory === 'all') return SKILLS;
    return SKILLS.filter((skill) => skill.category === activeCategory);
  }, [activeCategory]);

  const countByCategory = useMemo(() => {
    const counts = { all: SKILLS.length };
    for (const s of SKILLS) {
      counts[s.category] = (counts[s.category] || 0) + 1;
    }
    return counts;
  }, []);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    const nextList =
      catId === 'all' ? SKILLS : SKILLS.filter((s) => s.category === catId);
    if (nextList.length > 0 && !nextList.some((s) => s.name === selectedSkill.name)) {
      setSelectedSkill(nextList[0]);
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="mx-auto max-w-6xl">
        {/* Section Header + Minimalist Glass Category Filter Rail */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="brutal-badge px-2.5 py-0.5 rounded-md bg-ink text-surface font-mono text-xs font-bold">
                02
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted font-semibold">
                Technical Stack
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.025em] text-ink">
              Skills &amp; Toolkit
            </h2>
          </div>

          {/* Crisp Glass + Brutalist Filter Bar */}
          <div
            role="tablist"
            aria-label="Filter skills by category"
            className="glass-panel border-[1.5px] border-ink/30 p-1.5 rounded-xl flex flex-wrap gap-1.5"
          >
            {SKILL_CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-3.5 py-2 rounded-lg font-mono text-xs font-semibold transition-all duration-150 cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-ink text-surface border border-ink shadow-[2.5px_2.5px_0_#2D523A]'
                      : 'text-muted hover:text-ink hover:bg-white/60 border border-transparent'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded ${
                      isSelected ? 'bg-surface/15 text-surface' : 'bg-ink/8 text-muted'
                    }`}
                  >
                    {countByCategory[cat.id] || 0}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Frosted Glass + Brutalist Matrix Board holding Crisp Glass/Brutalist Skill Tiles */}
        <div className="relative">
          <div
            className="absolute top-1/2 -translate-y-1/2 right-12 w-56 h-56 rounded-full bg-moss/14 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="brutal-glass-card rounded-2xl p-5 sm:p-8 relative">
            {/* Minimalist architectural registration markers */}
            <div className="flex items-center justify-between mb-6 font-mono text-[11px] text-muted">
              <span>+ SKILL MATRIX // SELECT ANY TILE TO INSPECT</span>
              <span className="hidden sm:inline">
                SHOWING {String(filteredSkills.length).padStart(2, '0')} OF{' '}
                {String(SKILLS.length).padStart(2, '0')}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 sm:gap-4">
              {filteredSkills.map((skill) => {
                const isActive = selectedSkill?.name === skill.name;
                const skillNumber = String(
                  SKILLS.findIndex((s) => s.name === skill.name) + 1
                ).padStart(2, '0');

                return (
                  <button
                    key={skill.name}
                    type="button"
                    data-active={isActive}
                    onClick={() => setSelectedSkill(skill)}
                    className="skill-tile rounded-xl p-4 text-left flex flex-col justify-between min-h-[96px] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-moss"
                  >
                    <div className="flex items-center justify-between w-full">
                      <span
                        className={`font-mono text-[10px] ${
                          isActive ? 'text-surface/65' : 'text-muted'
                        }`}
                      >
                        {skillNumber}
                      </span>
                      <span
                        className={`w-2 h-2 rounded-full transition-colors ${
                          isActive ? 'bg-moss-tint' : 'bg-ink/20'
                        }`}
                        aria-hidden="true"
                      />
                    </div>

                    <div className="mt-3">
                      <span
                        className={`block font-bold text-sm sm:text-[15px] leading-tight ${
                          isActive ? 'text-surface' : 'text-ink'
                        }`}
                      >
                        {skill.name}
                      </span>
                      <span
                        className={`block font-mono text-[10px] mt-1 truncate ${
                          isActive ? 'text-surface/70' : 'text-muted'
                        }`}
                      >
                        {skill.groupLabel}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Minimalist-Brutalist Inspector Strip */}
            {selectedSkill && (
              <div className="mt-6 pt-5 border-t border-ink/15">
                <div className="bg-surface/85 border-[1.5px] border-ink rounded-xl px-4 py-3.5 sm:px-5 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 shadow-[3px_3px_0_#141619]">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="brutal-badge px-2.5 py-0.5 rounded-md bg-moss text-white font-mono text-[11px] font-semibold uppercase tracking-wider">
                      {selectedSkill.groupLabel}
                    </span>
                    <span className="font-bold text-base text-ink">
                      {selectedSkill.name}
                    </span>
                  </div>
                  <p className="font-mono text-xs sm:text-[13px] text-muted">
                    {selectedSkill.note}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
