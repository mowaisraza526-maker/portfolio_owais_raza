import type { Metadata } from 'next';
import Button from '@/components/Button';

export const metadata: Metadata = { title: 'Style guide', robots: { index: false } };

const colors = [
  { name: 'Ink', token: '--ink', hex: '#171717', use: 'Headings, dark sections', cls: 'bg-ink text-cream' },
  { name: 'Body', token: '--body', hex: '#444444', use: 'Paragraph text', cls: 'bg-body text-cream' },
  { name: 'Muted', token: '--muted', hex: '#6B6B6B', use: 'Secondary text (AA on cream)', cls: 'bg-muted text-white' },
  { name: 'Accent', token: '--accent', hex: '#D83B20', use: 'Buttons, large type, markers', cls: 'bg-accent text-white' },
  { name: 'Accent text', token: '--accent-text', hex: '#B52E17', use: 'Small red text (5.6:1 on cream)', cls: 'bg-accent-text text-white' },
  { name: 'Cream', token: '--cream', hex: '#F6F2EA', use: 'Panels and alternate sections', cls: 'bg-cream text-ink border' },
  { name: 'On dark', token: '--on-dark', hex: '#A8A39A', use: 'Secondary text on ink (7.1:1)', cls: 'bg-on-dark text-ink' },
];

export default function StyleGuide() {
  return (
    <main className="wrap py-16 md:py-24">
      <a href="/" className="text-sm text-muted underline-offset-4 hover:underline">Back to portfolio</a>
      <h1 className="h-display mt-6">Style <span className="tone-2">guide</span></h1>
      <p className="mt-4 max-w-xl text-lg">Tokens come from the 2026 resume. Change them in <code className="rounded bg-cream px-1.5 py-0.5 text-[0.9em]">app/globals.css</code> and the whole site follows.</p>

      <h2 className="mt-16 text-2xl font-medium">Colour</h2>
      <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {colors.map((c) => (
          <li key={c.token} className={`rounded-2xl p-5 ${c.cls}`}>
            <p className="font-medium">{c.name}</p>
            <p className="mt-1 text-sm opacity-90">{c.hex} · {c.token}</p>
            <p className="mt-6 text-sm">{c.use}</p>
          </li>
        ))}
      </ul>

      <h2 className="mt-16 text-2xl font-medium">Type</h2>
      <div className="mt-5 space-y-5 rounded-2xl border p-6">
        <p className="text-sm text-muted">Inter Tight, weights 400 to 700</p>
        <p className="h-display">Muhammad <span className="tone-2">Owais Raza</span></p>
        <p className="h-section">Section heading <span className="tone-2">two-tone</span></p>
        <p className="max-w-xl text-lg">Body copy at 18px with a 1.6 line height. Lines stay under 80 characters so long paragraphs remain easy to read on any screen.</p>
        <p className="text-[0.95rem] text-muted">Secondary text at 15px in the muted colour.</p>
      </div>

      <h2 className="mt-16 text-2xl font-medium">Buttons</h2>
      <div className="mt-5 flex flex-wrap gap-4 rounded-2xl border p-6">
        <Button href="#" variant="accent">Accent</Button>
        <Button href="#" variant="ink">Ink</Button>
        <span className="rounded-full bg-ink p-4"><Button href="#" variant="cream">Cream on ink</Button></span>
      </div>

      <h2 className="mt-16 text-2xl font-medium">Labels and cards</h2>
      <div className="mt-5 flex flex-wrap items-start gap-6 rounded-2xl border p-6">
        <span className="pill">Section label</span>
        <span className="rounded-full bg-ink px-4 py-2 text-sm text-cream"><span className="pill-dark pill">On dark</span></span>
        <div className="max-w-xs rounded-3xl border bg-paper p-6 shadow-[0_24px_50px_-30px_rgba(23,23,23,0.5)]"><p className="font-medium text-ink">Card</p><p className="mt-2 text-body">White surface, 24px radius, one soft shadow.</p></div>
      </div>
    </main>
  );
}
