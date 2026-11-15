import { useState } from 'react';
import { CONTACT_LINKS, PROFILE } from '../data/portfolio';
import { ArrowUpRightIcon, CheckIcon, CopyIcon, SocialIcon } from './Icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="brutal-badge px-2.5 py-0.5 rounded-md bg-ink text-surface font-mono text-xs font-bold">
                04
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted font-semibold">
                Get In Touch
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.025em] text-ink">
              Contact Me
            </h2>
          </div>

          <p className="text-sm sm:text-base text-muted max-w-md">
            Open to web development internships, collaborative projects, and
            technical conversations.
          </p>
        </div>

        {/* Top Direct Email Console: Brutalist-Glass Container + Crisp Minimal Email Field */}
        <div className="brutal-glass-card rounded-2xl p-5 sm:p-7 mb-8 relative">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-moss font-semibold block mb-1">
                Direct Channel
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-ink">
                Drop an email directly
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="minimal-well rounded-xl px-4 py-3 font-mono text-xs sm:text-sm text-ink select-all">
                {PROFILE.email}
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="brutal-btn bg-white/75 backdrop-blur-md hover:bg-surface px-4 py-3 rounded-xl font-mono text-xs font-semibold uppercase tracking-wider text-ink inline-flex items-center justify-center gap-2 cursor-pointer flex-1 sm:flex-none"
                >
                  {copied ? (
                    <>
                      <CheckIcon className="w-4 h-4 text-moss" />
                      <span className="text-moss">Copied</span>
                    </>
                  ) : (
                    <>
                      <CopyIcon className="w-4 h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PROFILE.email}`}
                  className="brutal-btn px-5 py-3 rounded-xl bg-ink text-surface hover:bg-moss font-mono text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-1.5 flex-1 sm:flex-none"
                >
                  <span>Email</span>
                  <ArrowUpRightIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* All 6 Social Tiles (Frosted Minimal Glass -> Brutalist Snap on Hover) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {CONTACT_LINKS.map((item) => {
            const isMail = item.id === 'email';
            return (
              <a
                key={item.id}
                href={item.url}
                target={isMail ? undefined : '_blank'}
                rel={isMail ? undefined : 'noopener noreferrer'}
                className="contact-tile rounded-xl p-5 flex items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 rounded-xl border-[1.5px] border-ink/25 bg-surface/85 flex items-center justify-center shrink-0 text-ink group-hover:border-ink group-hover:bg-ink group-hover:text-surface transition-colors">
                    <SocialIcon id={item.id} className="w-5 h-5" />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-base text-ink">
                        {item.name}
                      </span>
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: item.accent }}
                        aria-hidden="true"
                      />
                    </div>
                    <p className="font-mono text-xs text-muted truncate mt-0.5">
                      {item.handle}
                    </p>
                  </div>
                </div>

                <span className="w-8 h-8 rounded-lg border-[1.5px] border-ink/25 group-hover:border-ink group-hover:bg-surface inline-flex items-center justify-center shrink-0 text-ink transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRightIcon className="w-4 h-4" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
