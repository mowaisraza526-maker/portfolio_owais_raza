'use client';

import { useEffect, useState } from 'react';
import { nav, site } from '@/content/site';
import Button from './Button';
import { Close, Menu } from './Icons';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const ids = nav.map((n) => n.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect(); };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b transition-[background-color,border-color] duration-300 ${scrolled ? 'border-ink/10 bg-paper/85 backdrop-blur-md' : 'border-transparent bg-paper'}`}>
      <div className="wrap flex h-[72px] items-center justify-between">
        <a href="#home" className="flex items-center gap-3 text-ink" aria-label={`${site.name}, home`}>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-sm font-semibold tracking-tight text-cream">OR</span>
          <span className="text-lg font-semibold tracking-tight">Owais Raza</span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="nav-link" aria-current={active === n.href ? 'true' : undefined}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block"><Button href="#contact" variant="ink">Contact now</Button></div>
          <button type="button" className="grid h-11 w-11 place-items-center rounded-full border text-ink lg:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((v) => !v)}>
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      <div id="mobile-nav" hidden={!open} className="border-t bg-paper lg:hidden">
        <ul className="wrap flex flex-col py-3">
          {nav.map((n) => (
            <li key={n.href}>
              <a href={n.href} onClick={() => setOpen(false)} className="block border-b py-4 text-lg text-ink last:border-0">{n.label}</a>
            </li>
          ))}
          <li className="pb-3 pt-4"><Button href="#contact" variant="accent">Contact now</Button></li>
        </ul>
      </div>
    </header>
  );
}
