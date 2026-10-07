import { brands } from '@/content/site';

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
      <p className="mb-6 text-center text-[0.95rem] text-muted">Contributed to projects for brands including</p>
      <div className="marquee">
        <div className="marquee-track">{row()}{row(true)}</div>
      </div>
    </section>
  );
}
