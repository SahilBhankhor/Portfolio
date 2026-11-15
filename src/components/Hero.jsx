import { useState } from 'react';
import helmetImg from '../assets/helmet.webp';
import { PROFILE, PROJECTS, SKILLS } from '../data/portfolio';
import { ArrowDownIcon, ArrowUpRightIcon, CheckIcon, CopyIcon } from './Icons';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* LEFT: Brutalist + Glassmorphism Primary Identity Centerpiece */}
          <div className="lg:col-span-7 relative z-10 flex">
            {/* Ambient subtle tones behind card to highlight glass refraction */}
            <div
              className="hidden sm:block absolute -top-6 -left-6 w-40 h-40 rounded-full bg-moss/18 blur-2xl pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="hidden sm:block absolute -bottom-8 right-12 w-48 h-48 rounded-full bg-slate-500/18 blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="brutal-glass-card rounded-2xl p-6 sm:p-9 lg:p-10 relative w-full flex flex-col justify-center">
              {/* Top status strip: Minimalist frosted status pill */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-7">
                <div className="minimal-tag inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-moss opacity-60" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-moss" />
                  </span>
                  <span className="font-mono text-[11px] sm:text-xs font-medium uppercase tracking-wider text-ink">
                    {PROFILE.education.status}
                  </span>
                </div>

                <span className="font-mono text-xs text-muted tracking-widest uppercase">
                  PORTFOLIO // V2.0
                </span>
              </div>

              {/* Minimalist-Brutalist Display Headline */}
              <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-moss font-semibold mb-2">
                {PROFILE.education.shortUni} · B.Tech {PROFILE.education.graduationYear}
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-[-0.03em] leading-[1.04] text-ink">
                Hi, I am{' '}
                <span className="inline-block relative">
                  <span className="relative z-10">{PROFILE.firstName}.</span>
                  <span
                    className="absolute left-0 bottom-1 w-full h-3 bg-moss-tint -z-0"
                    aria-hidden="true"
                  />
                </span>
              </h1>

              {/* Dual Role Tag preserving original "||" motif */}
              <div className="mt-5 inline-flex flex-wrap items-center gap-2 font-mono text-xs sm:text-sm font-semibold text-ink">
                <span className="px-2.5 py-1 rounded-md bg-ink text-surface">
                  {PROFILE.rolePrimary}
                </span>
                <span className="text-moss font-bold select-none" aria-hidden="true">
                  ||
                </span>
                <span className="px-2.5 py-1 rounded-md border-[1.5px] border-ink bg-surface/80">
                  {PROFILE.roleSecondary}
                </span>
              </div>

              {/* Sahil's exact intro statement from index.html */}
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted max-w-xl">
                {PROFILE.heroSummary}
              </p>

              {/* Brutalist + Glass + Minimal CTA Row */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href="#projects"
                  className="brutal-btn inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-ink text-surface text-sm font-semibold tracking-wide hover:bg-moss"
                >
                  <span>Explore Projects</span>
                  <ArrowUpRightIcon className="w-4 h-4" />
                </a>

                <a
                  href="#contact"
                  className="brutal-btn inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/70 backdrop-blur-md text-ink text-sm font-semibold hover:bg-surface"
                >
                  <span>Contact Me</span>
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="minimal-well hover:border-ink hover:bg-white/70 inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl font-mono text-xs text-ink transition-colors cursor-pointer"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <CheckIcon className="w-3.5 h-3.5 text-moss" />
                      <span className="text-moss font-semibold">Email Copied</span>
                    </>
                  ) : (
                    <>
                      <CopyIcon className="w-3.5 h-3.5 text-muted" />
                      <span className="hidden sm:inline">{PROFILE.email}</span>
                      <span className="sm:hidden">Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: Signature Helmet Portrait Card (Centered, Unobstructed, Aligned with Hero Card) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="brutal-glass-card rounded-2xl p-3 sm:p-3.5 w-full max-w-[440px] lg:max-w-none flex flex-col">
              {/* Clean unobstructed portrait frame */}
              <div className="relative rounded-xl overflow-hidden bg-[#DCE0E3] border-[1.5px] border-ink aspect-[19/20] lg:aspect-auto lg:flex-1 lg:min-h-[340px]">
                <img
                  src={helmetImg}
                  alt="Vintage astronaut helmet with botanical ivy vines — signature portfolio artwork"
                  width="780"
                  height="822"
                  fetchPriority="high"
                  className="w-full h-full object-cover object-[50%_24%]"
                />
              </div>

              {/* Clean integrated identity footer bar below the portrait (zero overlap over artwork) */}
              <div className="mt-3 pt-3 border-t border-ink/15 px-1 flex items-center justify-between gap-3">
                <div>
                  <p className="font-bold text-sm sm:text-[15px] text-ink leading-tight">
                    {PROFILE.fullName}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted mt-0.5">
                    FIG. 01 · CS &amp; Web Dev
                  </p>
                </div>

                <span className="minimal-tag px-2.5 py-1 rounded-md font-mono text-[11px] font-bold text-moss tracking-wider uppercase">
                  Class of {PROFILE.education.graduationYear}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Minimalist Architectural Index Strip (same 4-column layout, crisp glass + brutalist) */}
        <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="glass-panel border-[1.5px] border-ink/25 rounded-xl px-4 py-3.5 flex flex-col justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Core Skills
            </span>
            <span className="mt-1 text-2xl font-bold font-mono text-ink">
              {String(SKILLS.length).padStart(2, '0')}
            </span>
          </div>

          <div className="glass-panel border-[1.5px] border-ink/25 rounded-xl px-4 py-3.5 flex flex-col justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Projects
            </span>
            <span className="mt-1 text-2xl font-bold font-mono text-ink">
              {String(PROJECTS.length).padStart(2, '0')}
            </span>
          </div>

          <div className="glass-panel border-[1.5px] border-ink/25 rounded-xl px-4 py-3.5 flex flex-col justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
              B.Tech Track
            </span>
            <span className="mt-1 text-2xl font-bold font-mono text-moss">
              {PROFILE.education.graduationYear}
            </span>
          </div>

          <a
            href="#about"
            className="contact-tile rounded-xl px-4 py-3.5 flex items-center justify-between group"
          >
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted block">
                Continue
              </span>
              <span className="mt-1 text-sm font-bold text-ink block">
                Read Dossier
              </span>
            </div>
            <span className="w-8 h-8 rounded-lg border-[1.5px] border-ink/30 group-hover:border-ink group-hover:bg-ink group-hover:text-surface inline-flex items-center justify-center transition-colors">
              <ArrowDownIcon className="w-4 h-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
