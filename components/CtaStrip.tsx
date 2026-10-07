import { ctaStrip } from '@/content/site';
import Button from './Button';

export default function CtaStrip() {
  return (
    <section aria-label="Start a conversation" className="relative overflow-hidden bg-ink py-16 md:py-20">
      <svg aria-hidden="true" viewBox="0 0 90 120" className="pointer-events-none absolute right-2 top-1/2 hidden h-[135%] -translate-y-1/2 text-accent md:block" fill="none" stroke="currentColor" strokeWidth="22" strokeLinecap="round">
        <path d="M30 10c40 0 40 26 0 26s-40 26 0 26 40 26 0 26-40 26 0 26" />
      </svg>
      <div className="wrap relative flex flex-col items-start gap-8">
        <p className="max-w-[34rem] text-[clamp(1.6rem,3.2vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.025em] text-cream">{ctaStrip}</p>
        <Button href="#contact" variant="accent">Let’s talk</Button>
      </div>
    </section>
  );
}
