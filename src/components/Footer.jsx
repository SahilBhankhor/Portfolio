import { NAV_LINKS, PROFILE } from '../data/portfolio';
import { ArrowUpIcon } from './Icons';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-4 sm:px-6 pb-10 pt-6">
      <div className="mx-auto max-w-6xl">
        <div className="brutal-glass-card rounded-2xl px-5 py-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Identity */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <span className="brutal-badge inline-flex items-center justify-center w-8 h-8 rounded-lg bg-ink text-surface font-mono font-bold text-xs">
              {PROFILE.initials}
            </span>
            <div>
              <p className="text-sm font-bold text-ink">{PROFILE.fullName}</p>
              <p className="font-mono text-[11px] text-muted">
                © {year} · Built with React &amp; Tailwind CSS
              </p>
            </div>
          </div>

          {/* Minimal anchor row */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="font-mono text-xs uppercase tracking-wider text-muted hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Crisp Brutalist Back-to-Top Button */}
          <a
            href="#home"
            aria-label="Back to top"
            className="brutal-btn bg-surface hover:bg-ink hover:text-surface px-3.5 py-2 rounded-xl inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-ink"
          >
            <span>Top</span>
            <ArrowUpIcon className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
