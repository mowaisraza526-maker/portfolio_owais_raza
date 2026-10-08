import type { SVGProps } from 'react';

const base = (p: SVGProps<SVGSVGElement>) => ({
  width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8,
  strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true, focusable: false, ...p,
});

export const Arrow = (p: SVGProps<SVGSVGElement>) => (<svg {...base(p)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>);
export const Download = (p: SVGProps<SVGSVGElement>) => (<svg {...base(p)}><path d="M12 4v11M7 11l5 5 5-5M5 20h14" /></svg>);
export const Mail = (p: SVGProps<SVGSVGElement>) => (<svg {...base(p)}><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 8 8 6 8-6" /></svg>);
export const Phone = (p: SVGProps<SVGSVGElement>) => (<svg {...base(p)}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>);
export const Pin = (p: SVGProps<SVGSVGElement>) => (<svg {...base(p)}><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>);
export const Menu = (p: SVGProps<SVGSVGElement>) => (<svg {...base(p)}><path d="M4 8h16M4 16h16" /></svg>);
export const Close = (p: SVGProps<SVGSVGElement>) => (<svg {...base(p)}><path d="M6 6l12 12M18 6 6 18" /></svg>);
export const LinkedIn = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base({ ...p, fill: 'currentColor', stroke: 'none' })}><path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3a1.95 1.95 0 1 0 0 3.9 1.95 1.95 0 0 0 0-3.9ZM20.44 13.2c0-3.1-1.65-4.9-4.3-4.9-1.4 0-2.4.77-2.8 1.5V8.5h-3.3V20h3.38v-6.2c0-1.64.3-2.6 1.65-2.6 1.3 0 1.44 1.1 1.44 2.66V20h3.4l.53-6.8Z" /></svg>
);
export const GitHub = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base({ ...p, fill: 'currentColor', stroke: 'none' })}><path d="M12 2a10 10 0 0 0-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.2-3.37-1.2-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.52 1.03 1.52 1.03.9 1.52 2.35 1.08 2.92.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.1-4.55-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" /></svg>
);
export const WhatsApp = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base({ ...p, fill: 'currentColor', stroke: 'none' })}><path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.98L2 22l5.16-1.5A9.93 9.93 0 1 0 12.04 2Zm0 18.13a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.06.89.9-2.98-.2-.31a8.2 8.2 0 1 1 6.86 3.73Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.22-.08-.39-.12-.55.12-.16.25-.63.8-.77.96-.14.17-.28.19-.53.06a6.73 6.73 0 0 1-3.32-2.9c-.25-.43.25-.4.72-1.33.08-.16.04-.3-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.65.3c-.22.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.64 4.2 3.7 1.56.67 2.17.73 2.95.62.48-.07 1.46-.6 1.67-1.18.2-.58.2-1.07.14-1.18-.06-.1-.22-.17-.47-.29Z" /></svg>
);
export const Pause = (p: SVGProps<SVGSVGElement>) => (<svg {...base(p)}><path d="M9 6v12M15 6v12" /></svg>);
export const Play = (p: SVGProps<SVGSVGElement>) => (<svg {...base(p)}><path d="M8 5.5v13l10.5-6.5L8 5.5Z" /></svg>);
export const Ruler = (p: SVGProps<SVGSVGElement>) => (<svg {...base(p)}><rect x="3" y="8" width="18" height="8" rx="2" /><path d="M7 8v3M11 8v4M15 8v3M19 8v2" /></svg>);
export const Gauge = (p: SVGProps<SVGSVGElement>) => (<svg {...base(p)}><path d="M4 16a8 8 0 1 1 16 0" /><path d="m12 16 4-5" /><circle cx="12" cy="16" r="1" /></svg>);
export const Shield = (p: SVGProps<SVGSVGElement>) => (<svg {...base(p)}><path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></svg>);
export const Globe = (p: SVGProps<SVGSVGElement>) => (<svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></svg>);

export const strengthIcons = { ruler: Ruler, gauge: Gauge, shield: Shield, globe: Globe } as const;
