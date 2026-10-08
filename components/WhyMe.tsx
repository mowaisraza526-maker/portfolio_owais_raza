'use client';

import { useState } from 'react';
import { strengths } from '@/content/site';
import { strengthIcons } from './Icons';
import SectionHeader from './SectionHeader';
import { delay } from '@/lib/utils';

export default function WhyMe() {
  const [active, setActive] = useState(0);
  return (
    <section aria-labelledby="why-title" className="bg-cream py-20 md:py-28">
      <div className="wrap">
        <SectionHeader id="why-title" label="How I work" a="Why teams" b="work with me" center text="The habits behind the projects: accurate to the design, fast in the browser, steady in production." />
        <ul className="hx mt-14">
          {strengths.map((s, i) => {
            const Icon = strengthIcons[s.icon as keyof typeof strengthIcons];
            const on = active === i;
            return (
              <li key={s.title} data-reveal style={delay(i * 110)} data-active={on} className="hx-card rounded-3xl border" onMouseEnter={() => setActive(i)}>
                <button type="button" aria-expanded={on} onClick={() => setActive(i)} onFocus={() => setActive(i)} className="flex h-full w-full flex-col justify-between gap-6 p-6 text-left lg:min-h-[340px] lg:gap-10">
                  <span className={`grid h-12 w-12 place-items-center rounded-full transition-colors duration-500 ${on ? 'bg-accent text-white' : 'bg-cream text-ink'}`}><Icon /></span>
                  <span>
                    <span className="block break-words text-[1.35rem] font-medium leading-tight tracking-[-0.02em] text-ink [hyphens:auto]">{s.title}</span>
                    <span className="hx-desc mt-3 block max-w-[22rem] text-body">{s.text}</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
