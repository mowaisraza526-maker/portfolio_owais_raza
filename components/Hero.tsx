import Image from 'next/image';
import { site, heroStats } from '@/content/site';
import { delay } from '@/lib/utils';
import Button from './Button';
import { GitHub, LinkedIn, Mail } from './Icons';

const socials = [
  { label: 'LinkedIn', href: site.linkedin, Icon: LinkedIn, external: true },
  { label: 'GitHub', href: site.github, Icon: GitHub, external: true },
  { label: 'Email', href: `mailto:${site.email}`, Icon: Mail, external: false },
];

export default function Hero() {
  return (
    <section id="home" className="pb-16 pt-10 md:pb-20 md:pt-16">
      <div className="wrap grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <p className="rise text-lg text-ink" style={delay(0)}>Hey there. I’m</p>
          <h1 className="rise mt-2 text-[clamp(2.9rem,5.4vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.035em]" style={delay(90)}>
            <span className="block text-ink">{site.first}</span>
            <span className="tone-2 block">{site.last}</span>
          </h1>
          <p className="rise mt-6 max-w-[26rem] text-lg leading-relaxed text-body" style={delay(200)}>
            I build responsive WordPress, Shopify and frontend interfaces from Figma designs, then test, tune and ship them.
          </p>
          <div className="rise mt-8 flex flex-wrap items-center gap-3" style={delay(300)}>
            <Button href="#work" variant="accent">See my work</Button>
            <Button href={site.resume} variant="ink" download>Download resume</Button>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="card-in relative mx-auto w-full max-w-[330px] rounded-[28px] bg-paper p-2.5 shadow-[0_28px_60px_-28px_rgba(23,23,23,0.45)] ring-1 ring-ink/10">
            <div className="relative aspect-[0.86] overflow-hidden rounded-[20px] bg-cream">
              <Image src="/images/portrait-main.webp" alt={`Portrait of ${site.name}`} fill priority sizes="330px" className="object-cover object-[50%_16%]" />
              <ul className="absolute right-3 top-3 flex flex-col gap-2">
                {socials.map(({ label, href, Icon, external }) => (
                  <li key={label}>
                    <a href={href} aria-label={label} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="grid h-10 w-10 place-items-center rounded-full bg-paper/90 text-ink backdrop-blur transition-colors hover:bg-accent hover:text-white">
                      <Icon width={18} height={18} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <p className="flex items-center justify-center gap-2 py-3.5 text-sm text-ink">
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              {site.status}
            </p>
          </div>
        </div>

        <div className="rise lg:col-span-3" style={delay(420)}>
          <div className="border-l-2 border-ink/80 pl-4 text-[0.95rem] leading-snug text-body">{heroStats.line}</div>
          <p className="mt-6 text-[clamp(3.2rem,5vw,4.2rem)] font-semibold leading-none tracking-[-0.04em] text-ink">
            {heroStats.value}
          </p>
          <p className="mt-2 text-lg font-medium text-ink">{heroStats.label}</p>
          <p className="mt-1 text-[0.95rem] text-muted">{heroStats.sub}</p>
        </div>
      </div>
    </section>
  );
}
