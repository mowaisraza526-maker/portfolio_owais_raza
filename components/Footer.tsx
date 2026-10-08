import { site } from '@/content/site';
import { GitHub, LinkedIn, Mail, Phone, Pin, WhatsApp } from './Icons';

export default function Footer() {
  const items = [
    { Icon: Phone, label: 'Call', value: site.phone, href: site.phoneHref },
    { Icon: WhatsApp, label: 'WhatsApp', value: 'Message me', href: site.whatsapp, external: true },
    { Icon: Mail, label: 'Email me', value: site.email, href: `mailto:${site.email}` },
    { Icon: Pin, label: `Based in · ${site.timezone}`, value: site.location },
  ];
  return (
    <footer id="contact" className="bg-cream pt-20 md:pt-28">
      <div className="wrap">
        <h2 className="text-center text-[clamp(2.6rem,7.5vw,6rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-ink">
          Let’s work <span className="tone-2">together</span>
        </h2>
        <ul className="mx-auto mt-12 grid w-fit gap-x-12 gap-y-6 sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center">
          {items.map(({ Icon, label, value, href, external }) => (
            <li key={label} className="flex items-center gap-3">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border bg-paper text-ink"><Icon /></span>
              <span>
                <span className="block text-sm text-muted">{label}</span>
                {href ? <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="font-medium text-ink underline-offset-4 hover:underline">{value}{external && <span className="sr-only"> (opens in a new tab)</span>}</a> : <span className="font-medium text-ink">{value}</span>}
              </span>
            </li>
          ))}
        </ul>
        <ul className="mt-9 flex flex-wrap justify-center gap-3">
          <li><a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border bg-paper px-4 py-2 text-ink transition-colors hover:border-accent"><LinkedIn width={16} height={16} />LinkedIn</a></li>
          <li><a href={site.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border bg-paper px-4 py-2 text-ink transition-colors hover:border-accent"><GitHub width={16} height={16} />GitHub</a></li>
        </ul>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-ink/15 py-7 text-[0.95rem] text-muted">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li><a href={site.resume} download className="whitespace-nowrap hover:text-ink">Resume (PDF)</a></li>
            <li><a href={site.resumeAts} download className="whitespace-nowrap hover:text-ink">ATS-friendly resume</a></li>
            <li><a href="#home" className="whitespace-nowrap hover:text-ink">Back to top ↑</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
