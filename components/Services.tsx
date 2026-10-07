'use client';

import Image from 'next/image';
import { useState } from 'react';
import { services } from '@/content/site';
import Button from './Button';
import SectionHeader from './SectionHeader';

export default function Services() {
  const [open, setOpen] = useState(0);
  return (
    <section id="services" aria-labelledby="services-title" className="py-20 md:py-28">
      <div className="wrap">
        <SectionHeader
          id="services-title" label="Services" a="What I" b="build"
          text="Modern, functional interfaces that put users first and hold up in production."
          action={<Button href="#work" variant="ink">View my work</Button>}
        />
        <ul className="mt-14 border-t">
          {services.map((s, i) => {
            const isOpen = open === i;
            return (
              <li key={s.title} className="border-b" onMouseEnter={() => setOpen(i)}>
                <h3>
                  <button
                    type="button" id={`svc-btn-${i}`} aria-expanded={isOpen} aria-controls={`svc-${i}`}
                    onClick={() => setOpen(i)} onFocus={() => setOpen(i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left text-[clamp(1.5rem,3.2vw,2.4rem)] font-medium uppercase tracking-[-0.02em] text-ink"
                  >
                    <span className={`transition-colors duration-300 ${isOpen ? 'text-ink' : 'text-ink/80'}`}>{s.title}</span>
                    <span aria-hidden="true" className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border text-xl leading-none transition-all duration-500 ${isOpen ? 'rotate-45 border-accent bg-accent text-white' : 'text-ink'}`}>+</span>
                  </button>
                </h3>
                <div id={`svc-${i}`} role="region" aria-labelledby={`svc-btn-${i}`} className="acc-panel" data-open={isOpen}>
                  <div className="acc-inner">
                    <div className="grid gap-8 pb-9 md:grid-cols-[1fr_320px] md:gap-12">
                      <div>
                        <p className="max-w-lg text-lg leading-relaxed text-body">{s.text}</p>
                        <ul className="mt-5 grid gap-x-8 gap-y-2.5 text-body sm:grid-cols-2">
                          {s.bullets.map((b) => (
                            <li key={b} className="flex gap-3"><span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 bg-accent" />{b}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="relative hidden aspect-[16/10] overflow-hidden rounded-2xl bg-cream ring-1 ring-ink/10 md:block">
                        <Image src={s.image} alt={s.alt} width={s.w} height={s.h} sizes="320px" className="h-full w-full object-cover object-top" />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
