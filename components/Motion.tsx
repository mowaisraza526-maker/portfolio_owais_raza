'use client';

import { useEffect } from 'react';

/**
 * Scroll behaviour in one place:
 *  - [data-reveal]  → fades in once (IntersectionObserver + CSS, no library)
 *  - [data-count]   → counts up once when visible
 *  - [data-parallax]→ gentle vertical drift (GSAP, desktop only)
 *  - [data-stack]   → earlier case-study cards scale back as the next one covers them (GSAP, desktop only)
 *  - .marquee       → pause/play button, and the animation idles while off screen
 * Everything is skipped when the visitor prefers reduced motion.
 */
export default function Motion() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const reveals = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const counters = Array.from(document.querySelectorAll<HTMLElement>('[data-count]'));
    if (reduce) { reveals.forEach((el) => el.classList.add('is-in')); return; }

    const marquee = document.querySelector<HTMLElement>('.marquee');
    const toggle = document.querySelector<HTMLButtonElement>('[data-marquee-toggle]');
    const onToggle = () => {
      const paused = toggle!.getAttribute('aria-pressed') !== 'true';
      toggle!.setAttribute('aria-pressed', String(paused));
      toggle!.setAttribute('aria-label', paused ? 'Play brand scroll' : 'Pause brand scroll');
      marquee?.toggleAttribute('data-paused', paused);
    };
    toggle?.addEventListener('click', onToggle);
    const marqueeIO = new IntersectionObserver(([en]) => marquee?.toggleAttribute('data-offscreen', !en.isIntersecting));
    if (marquee) marqueeIO.observe(marquee);

    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    reveals.forEach((el) => io.observe(el));

    const countIO = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const el = en.target as HTMLElement;
        countIO.unobserve(el);
        const to = Number(el.dataset.count); const suffix = el.dataset.suffix ?? ''; const dur = 1400; const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / dur); const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = `${Math.round(to * eased)}${suffix}`;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.6 });
    counters.forEach((el) => { el.textContent = `0${el.dataset.suffix ?? ''}`; countIO.observe(el); });

    let revert: (() => void) | undefined;
    const mq = window.matchMedia('(min-width: 1024px)');
    if (mq.matches) {
      (async () => {
        const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
          document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
            const k = Number(el.dataset.parallax) || 0.1;
            gsap.to(el, { y: () => -k * 360, ease: 'none', scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } });
          });
          const cards = Array.from(document.querySelectorAll<HTMLElement>('[data-stack]'));
          cards.forEach((card, i) => {
            const next = cards[i + 1]; if (!next) return;
            gsap.to(card, { scale: 0.94 - (cards.length - i) * 0.004, ease: 'none', scrollTrigger: { trigger: next, start: 'top 90%', end: 'top 120px', scrub: true } });
          });
        });
        revert = () => ctx.revert();
      })();
    }

    return () => { io.disconnect(); countIO.disconnect(); marqueeIO.disconnect(); toggle?.removeEventListener('click', onToggle); revert?.(); };
  }, []);
  return null;
}
