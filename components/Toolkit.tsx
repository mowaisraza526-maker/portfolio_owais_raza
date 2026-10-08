import Image from 'next/image';
import { site, toolkit } from '@/content/site';
import SectionHeader from './SectionHeader';

export default function Toolkit() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="py-20 md:py-28">
      <div className="wrap">
        <SectionHeader id="skills-title" label="Skills" a="My" b="toolkit" text="What I work with day to day, and what I’m still learning, labelled honestly." />
        <div className="mt-14 grid gap-12 lg:grid-cols-[340px_1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Image src="/images/portrait-tall.webp" alt={`${site.name} standing in a warm office`} width={800} height={1422} sizes="(min-width:1024px) 340px, 90vw" className="mx-auto aspect-[4/5] w-full max-w-[340px] rounded-3xl object-cover object-[50%_20%] ring-1 ring-ink/10 lg:max-w-none" />
          </div>
          <div className="divide-y border-y">
            {toolkit.map((g) => (
              <div key={g.group} className="grid gap-4 py-6 sm:grid-cols-[200px_1fr]">
                <h3 className="text-[1.15rem] font-medium tracking-[-0.01em] text-ink">{g.group}</h3>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <li key={it} className="rounded-full border bg-paper px-3.5 py-1.5 text-[0.95rem] text-body transition-colors hover:border-accent hover:text-ink">{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
