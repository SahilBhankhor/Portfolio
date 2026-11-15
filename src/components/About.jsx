import { PROFILE } from '../data/portfolio';

const SPEC_ROWS = [
  { label: 'Institution', value: PROFILE.education.university },
  { label: 'Degree', value: PROFILE.education.degree },
  { label: 'Expected Graduation', value: PROFILE.education.graduationYear },
  { label: 'Current Goal', value: 'Projects & Internships' },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="mx-auto max-w-6xl">
        {/* Minimalist + Brutalist Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="brutal-badge px-2.5 py-0.5 rounded-md bg-ink text-surface font-mono text-xs font-bold">
                01
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted font-semibold">
                About Me
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.025em] text-ink">
              Grounded in CS. Driven by building.
            </h2>
          </div>

          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            B.TECH · GJUST · 2027
          </p>
        </div>

        {/* 12-Column Asymmetric Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Narrative Card: Brutalist Border + Glassmorphic Interior */}
          <div className="lg:col-span-7 relative">
            <div
              className="absolute -bottom-4 left-10 w-44 h-44 rounded-full bg-moss/15 blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            <div className="brutal-glass-card rounded-2xl p-6 sm:p-9 h-full flex flex-col justify-between relative">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-ink/15">
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-ink">
                    Profile Statement
                  </span>
                  <span className="font-mono text-[11px] text-moss font-semibold">
                    ● ACTIVE LEARNER
                  </span>
                </div>

                <div className="space-y-5">
                  {PROFILE.aboutParagraphs.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className={`leading-relaxed ${
                        idx === 0
                          ? 'text-lg sm:text-xl font-medium text-ink'
                          : 'text-base sm:text-lg text-muted'
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Minimalist Principle Tags */}
              <div className="mt-8 pt-5 border-t border-ink/15 flex flex-wrap gap-2">
                {[
                  'Real-World Reliability',
                  'Web Development',
                  'Clean Fundamentals',
                  'Internship Ready',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="minimal-tag rounded-lg px-3 py-1 font-mono text-[11px] font-medium text-ink"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Crisp Minimalist-Brutalist Academic Spec Sheet */}
          <div className="lg:col-span-5">
            <div className="brutal-card rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-ink/15">
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-ink">
                    Academic Dossier
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-moss" />
                </div>

                <div className="divide-y divide-ink/12 border-y border-ink/12">
                  {SPEC_ROWS.map((item) => (
                    <div
                      key={item.label}
                      className="py-3.5 first:pt-3 last:pb-3"
                    >
                      <span className="block font-mono text-[10px] uppercase tracking-widest text-muted mb-1">
                        {item.label}
                      </span>
                      <span className="block text-sm sm:text-[15px] font-semibold text-ink leading-snug">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-ink/15 flex items-center justify-between font-mono text-[11px] text-muted">
                <span>STATUS</span>
                <span className="px-2 py-0.5 rounded bg-moss-tint text-moss font-bold">
                  SEEKING OPPORTUNITIES
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
