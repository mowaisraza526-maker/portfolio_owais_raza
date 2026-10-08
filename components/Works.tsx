import Image from 'next/image';
import { projects, type Project } from '@/content/site';
import { delay } from '@/lib/utils';
import SectionHeader from './SectionHeader';

function Tile({ p }: { p: Project }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-cream ring-1 ring-ink/10">
      {p.image ? (
        <Image src={p.image} alt={p.alt ?? p.title} width={p.w} height={p.h} sizes="(min-width:1120px) 540px, (min-width:640px) 45vw, 92vw" className="work-img h-full w-full object-cover object-top" />
      ) : (
        <div className="work-img grid h-full w-full place-items-center bg-ink p-8 text-center">
          <p className="text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-cream">Lux Style <span className="text-accent">Awards</span></p>
        </div>
      )}
      {p.url ? (
        <span className="view-chip absolute left-1/2 top-1/2 grid h-[88px] w-[88px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ink text-center text-sm font-medium leading-tight text-cream shadow-lg">
          View<br />site
        </span>
      ) : (
        <span className="absolute bottom-3 right-3 rounded-full bg-ink px-3 py-1 text-xs font-medium text-cream">Private beta</span>
      )}
    </div>
  );
}

function Meta({ p }: { p: Project }) {
  return (
    <div className="mt-4">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-[1.3rem] font-medium tracking-[-0.015em] text-ink">{p.title}</h3>
        <span className="shrink-0 text-sm text-muted">{p.category}</span>
      </div>
      <p className="mt-1.5 text-[0.95rem] text-ink"><span className="font-medium">My role:</span> {p.role}</p>
      <p className="mt-0.5 text-[0.95rem] text-muted">{p.stack}{p.note ? ` · ${p.note}` : ''}</p>
    </div>
  );
}

export default function Works() {
  return (
    <section id="work" aria-labelledby="work-title" className="py-20 md:py-28">
      <div className="wrap">
        <SectionHeader id="work-title" label="Selected work" a="My recent" b="work" text="Live sites and internal products I built or contributed to, with my role on each." />
        <ul className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2">
          {projects.map((p, i) => (
            <li key={p.slug} data-reveal style={delay((i % 2) * 120)}>
              {p.url ? (
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="work-card group block">
                  <Tile p={p} />
                  <Meta p={p} />
                  <span className="sr-only">(opens the live site in a new tab)</span>
                </a>
              ) : (
                <div className="work-card"><Tile p={p} /><Meta p={p} /></div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
