import type { CSSProperties } from 'react';
/** Sets the --d CSS variable used for staggered animation delays. */
export const delay = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties;
