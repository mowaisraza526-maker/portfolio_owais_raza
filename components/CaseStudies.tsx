import Image from 'next/image';
import { cases } from '@/content/site';
import Button from './Button';
import SectionHeader from './SectionHeader';

export default function CaseStudies() {
  return (
    <section id="cases" aria-labelledby="cases-title" className="bg-cream py-20 md:py-28">
      <div className="wrap">
        <SectionHeader id="cases-title" label="Case studies" a="Recent" b="case studies" text="What I owned, what I built, and what was recorded afterwards." />
        <ol className="mt-14 space-y-8 lg:space-y-10">
          {cases.map((c, i) => {
            const dark = c.tone === 'dark';
            return (
              <li key={c.title} className="stack-card" style={{ ['--i' as string]: i }} data-stack>
                <article className={`grid gap-8 rounded-[28px] p-5 sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 ${dark ? 'bg-ink text-cream' : 'border bg-paper shadow-[0_30px_60px_-40px_rgba(23,23,23,0.5)]'}`}>
                  <div className={`self-start overflow-hidden rounded-2xl ${dark ? 'bg-white/5 ring-1 ring-white/10' : 'bg-cream ring-1 ring-ink/10'}`}>
                    <Image src={c.image} alt={c.alt} width={c.w} height={c.h} sizes="(min-width:1024px) 480px, 90vw" className="aspect-[16/10] w-full object-cover object-top" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className={`text-[clamp(1.6rem,2.8vw,2.2rem)] font-medium leading-tight tracking-[-0.025em] ${dark ? '!text-cream' : ''}`}>{c.title}</h3>
                    <p className={`mt-1 ${dark ? 'text-on-dark' : 'text-muted'}`}>{c.sub}</p>
                    <dl className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                      {([['Role', c.role], ['Stack', c.stack], ['What I built', c.built], ['Outcome', c.outcome]] as const).map(([k, v]) => (
                        <div key={k} className={`border-l pl-4 ${dark ? 'border-white/20' : ''}`}>
                          <dt className={`text-[0.95rem] font-medium ${dark ? 'text-cream' : 'text-ink'}`}>{k}</dt>
                          <dd className={`mt-1 text-[0.95rem] leading-relaxed ${dark ? 'text-on-dark' : 'text-body'}`}>{v}</dd>
                        </div>
                      ))}
                    </dl>
                    {'url' in c && c.url && (
                      <div className="mt-7"><Button href={c.url} external variant={dark ? 'accent' : 'ink'}>Visit site</Button></div>
                    )}
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
