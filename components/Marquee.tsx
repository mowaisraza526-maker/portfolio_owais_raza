import { brands } from '@/content/site';
import { Pause, Play } from './Icons';

export default function Marquee() {
  const row = (hidden?: boolean) => (
    <ul className="flex shrink-0 items-center gap-14 pr-14" aria-hidden={hidden || undefined}>
      {brands.map((b) => (
        <li key={b} className="whitespace-nowrap text-[1.7rem] font-semibold tracking-tight text-muted/80">{b}</li>
      ))}
    </ul>
  );
  return (
    <section aria-label="Brands I have worked on" className="border-y py-9">
      <div className="mb-6 flex items-center justify-center gap-3">
        <p className="text-center text-[0.95rem] text-muted">Contributed to projects for brands including</p>
        {/* WCAG 2.2.2: moving content needs a way to stop it. Wired up in Motion.tsx. */}
        <button type="button" data-marquee-toggle aria-pressed="false" aria-label="Pause brand scroll" className="marquee-toggle grid h-8 w-8 shrink-0 place-items-center rounded-full border text-ink transition-colors hover:border-accent">
          <Pause width={14} height={14} className="icon-pause" />
          <Play width={14} height={14} className="icon-play" />
        </button>
      </div>
      <div className="marquee" id="brand-marquee">
        <div className="marquee-track">{row()}{row(true)}</div>
      </div>
    </section>
  );
}
