import type { ReactNode } from 'react';

type Props = { label: string; a: string; b: string; text?: string; dark?: boolean; center?: boolean; action?: ReactNode; id?: string };

export default function SectionHeader({ label, a, b, text, dark, center, action, id }: Props) {
  return (
    <div className={`flex flex-wrap items-end justify-between gap-6 ${center ? 'justify-center text-center' : ''}`}>
      <div className={center ? 'mx-auto' : ''}>
        <span className={`pill ${dark ? 'pill-dark' : ''}`}>{label}</span>
        <h2 id={id} className={`h-section mt-5 ${dark ? '!text-cream' : ''}`}>
          {a} <span className="tone-2">{b}</span>
        </h2>
        {text && <p className={`mt-4 max-w-xl text-lg ${dark ? 'text-on-dark' : 'text-body'}`}>{text}</p>}
      </div>
      {action}
    </div>
  );
}
