import { useEffect, useState } from 'react';
import { CONTACT_LINKS, PROFILE } from '../data/portfolio';
import { copyText } from '../utils/copyText';
import {
  ArrowUpRightIcon,
  CheckIcon,
  CloseIcon,
  CopyIcon,
  SocialIcon,
} from './Icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!modalOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setModalOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [modalOpen]);

  const handleCopy = async () => {
    const ok = await copyText(PROFILE.email);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  const trimmedSubject = subject.trim() || 'Hello Sahil — Portfolio Inquiry';
  const trimmedBody = message.trim();

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    PROFILE.email
  )}&su=${encodeURIComponent(trimmedSubject)}${
    trimmedBody ? `&body=${encodeURIComponent(trimmedBody)}` : ''
  }`;

  const mailtoUrl = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
    trimmedSubject
  )}${trimmedBody ? `&body=${encodeURIComponent(trimmedBody)}` : ''}`;

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

                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="brutal-btn px-5 py-3 rounded-xl bg-ink text-surface hover:bg-moss font-mono text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-1.5 cursor-pointer flex-1 sm:flex-none"
                >
                  <span>Email</span>
                  <ArrowUpRightIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* All 6 Social Tiles (Frosted Minimal Glass -> Brutalist Snap on Hover) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {CONTACT_LINKS.map((item) => {
            const isMail = item.id === 'email';
            const innerContent = (
              <>
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 rounded-xl border-[1.5px] border-ink/25 bg-surface/85 flex items-center justify-center shrink-0 text-ink group-hover:border-ink group-hover:bg-ink group-hover:text-surface transition-colors">
                    <SocialIcon id={item.id} className="w-5 h-5" />
                  </div>

                  <div className="min-w-0 text-left">
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
              </>
            );

            if (isMail) {
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="contact-tile rounded-xl p-5 flex items-center justify-between gap-4 group w-full cursor-pointer"
                >
                  {innerContent}
                </button>
              );
            }

            return (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-tile rounded-xl p-5 flex items-center justify-between gap-4 group"
              >
                {innerContent}
              </a>
            );
          })}
        </div>
      </div>

      {/* Brutalist-Glass Email Composer Modal (works reliably via Gmail Web, Mail App, or Copy) */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="email-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/45 backdrop-blur-sm"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="brutal-card rounded-2xl w-full max-w-lg p-6 sm:p-7 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 pb-4 mb-5 border-b border-ink/15">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-moss font-semibold block">
                  Direct Email
                </span>
                <h3
                  id="email-modal-title"
                  className="text-xl font-bold text-ink mt-0.5"
                >
                  Send a message to {PROFILE.firstName}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setModalOpen(false)}
                aria-label="Close email dialog"
                className="border-[1.5px] border-ink bg-surface hover:bg-ink hover:text-surface rounded-lg p-1.5 text-ink transition-colors cursor-pointer"
              >
                <CloseIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Recipient row */}
            <div className="mb-4">
              <span className="block font-mono text-[10px] uppercase tracking-widest text-muted mb-1.5">
                To
              </span>
              <div className="minimal-well rounded-xl px-3.5 py-2.5 flex items-center justify-between gap-2">
                <span className="font-mono text-xs sm:text-sm text-ink select-all truncate">
                  {PROFILE.email}
                </span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="font-mono text-[11px] font-semibold uppercase tracking-wider text-ink hover:text-moss inline-flex items-center gap-1 shrink-0 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <CheckIcon className="w-3.5 h-3.5 text-moss" />
                      <span className="text-moss">Copied</span>
                    </>
                  ) : (
                    <>
                      <CopyIcon className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Optional Subject */}
            <div className="mb-4">
              <label
                htmlFor="email-subject"
                className="block font-mono text-[10px] uppercase tracking-widest text-muted mb-1.5"
              >
                Subject 
              </label>
              <input
                id="email-subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Internship / Project Collaboration"
                className="w-full rounded-xl border-[1.5px] border-ink/30 focus:border-ink bg-white/80 px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/65 focus:outline-none"
              />
            </div>

            {/* Optional Message */}
            <div className="mb-6">
              <label
                htmlFor="email-body"
                className="block font-mono text-[10px] uppercase tracking-widest text-muted mb-1.5"
              >
                Message 
              </label>
              <textarea
                id="email-body"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hi Sahil, I came across your portfolio and wanted to connect..."
                className="w-full rounded-xl border-[1.5px] border-ink/30 focus:border-ink bg-white/80 px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/65 focus:outline-none resize-none"
              />
            </div>

            {/* Launch options */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={gmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn flex-1 px-4 py-3 rounded-xl bg-ink text-surface hover:bg-moss font-mono text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-1.5"
              >
                <span>Open in Gmail</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href={mailtoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn flex-1 px-4 py-3 rounded-xl bg-surface text-ink hover:bg-white font-mono text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-1.5"
              >
                <span>Mail App</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
