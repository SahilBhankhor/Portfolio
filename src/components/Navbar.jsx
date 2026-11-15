import { useEffect, useState } from 'react';
import { NAV_LINKS, PROFILE } from '../data/portfolio';
import { ArrowUpRightIcon, CloseIcon, MenuIcon } from './Icons';

export default function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      const pct = total > 0 ? Math.min(100, (window.scrollY / total) * 100) : 0;
      setScrollProgress(pct);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4 pointer-events-none">
      {/* Subtle brutalist top reading hairline */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-moss transition-[width] duration-75 ease-out pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl pointer-events-auto">
        <nav
          aria-label="Primary navigation"
          className="glass-nav border-2 border-ink rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 flex items-center justify-between gap-3"
        >
          {/* Brand Monogram (Brutalist + Minimal) */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <span className="brutal-badge inline-flex items-center justify-center w-9 h-9 rounded-lg bg-ink text-surface font-mono font-bold text-sm tracking-tight transition-transform duration-150 group-hover:-translate-y-0.5">
              {PROFILE.initials}
            </span>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-bold text-sm tracking-tight text-ink">
                {PROFILE.fullName}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted mt-0.5">
                CS · Web Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation inside a crisp minimal bordered rail */}
          <ul className="hidden md:flex items-center gap-1 p-1 rounded-xl minimal-well">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                      isActive
                        ? 'bg-surface text-ink font-semibold border-[1.5px] border-ink shadow-[2px_2px_0_#141619]'
                        : 'text-muted hover:text-ink border-[1.5px] border-transparent'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        isActive ? 'bg-moss' : 'bg-ink/20'
                      }`}
                      aria-hidden="true"
                    />
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right CTA + Mobile Toggle */}
          <div className="flex items-center gap-2">
            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-btn hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-surface text-ink font-mono text-xs font-semibold uppercase tracking-wider hover:bg-ink hover:text-surface"
            >
              <span>GitHub</span>
              <ArrowUpRightIcon className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="md:hidden border-2 border-ink bg-surface shadow-[2.5px_2.5px_0_#141619] rounded-xl p-2 text-ink active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </nav>

        {/* Mobile Frosted Glass Dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-2.5 brutal-glass-card rounded-2xl p-3">
            <ul className="flex flex-col gap-1.5">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={handleLinkClick}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-ink text-surface font-semibold'
                          : 'text-ink hover:bg-ink/5'
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="font-mono text-xs opacity-60">
                          {link.index}
                        </span>
                        {link.label}
                      </span>
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isActive ? 'bg-moss-tint' : 'bg-ink/20'
                        }`}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="mt-3 pt-3 border-t border-ink/15">
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="brutal-btn w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-ink text-surface font-mono text-xs font-semibold uppercase tracking-wider"
              >
                <span>Visit GitHub Profile</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
