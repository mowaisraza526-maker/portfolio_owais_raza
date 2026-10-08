import type { ReactNode } from 'react';
import { Arrow } from './Icons';

type Props = {
  href: string;
  variant?: 'accent' | 'ink' | 'cream' | 'ghost';
  children: ReactNode;
  external?: boolean;
  download?: boolean;
  className?: string;
  icon?: ReactNode;
};

// Full class names must appear literally so Tailwind keeps them (no `btn-${variant}` interpolation).
const variants = { accent: 'btn-accent', ink: 'btn-ink', cream: 'btn-cream', ghost: 'btn-ghost' } as const;

/** Pill button with arrow circle and text-roll hover (structure from the reference design). */
export default function Button({ href, variant = 'accent', children, external, download, className = '', icon }: Props) {
  const ext = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  // Visible label stays short; screen readers also hear that the link opens a new tab.
  return (
    <a href={href} className={`btn ${variants[variant]} ${className}`} {...ext} {...(download ? { download: true } : {})}>
      <span className="btn-label">
        <span className="btn-roll">
          <span>{children}{external && <span className="sr-only"> (opens in a new tab)</span>}</span>
          <span aria-hidden="true">{children}</span>
        </span>
      </span>
      <span className="btn-icon" aria-hidden="true">{icon ?? <Arrow width={16} height={16} />}</span>
    </a>
  );
}
