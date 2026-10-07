import { cta, site } from '@/content/site';
import Button from './Button';
import { Download, Mail } from './Icons';

export default function CtaBanner() {
  return (
    <section aria-label="Contact call to action" className="py-20 md:py-24">
      <div className="wrap">
        <div className="relative overflow-hidden rounded-[32px] bg-ink p-8 text-cream sm:p-12">
          <div aria-hidden="true" className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/90 blur-[2px]" />
          <div aria-hidden="true" className="absolute -right-4 top-24 h-40 w-40 rounded-full bg-cream/10" />
          <div className="relative max-w-2xl">
            <h2 className="text-[clamp(2rem,4.4vw,3.2rem)] font-medium leading-[1.05] tracking-[-0.03em] !text-cream">{cta.heading}</h2>
            <p className="mt-4 max-w-lg text-lg text-on-dark">{cta.text}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={`mailto:${site.email}`} variant="accent" icon={<Mail width={16} height={16} />}>Email me</Button>
              <Button href={site.resume} variant="cream" download icon={<Download width={16} height={16} />}>Download resume</Button>
            </div>
          </div>
          <dl className="relative mt-12 flex gap-10 border-t border-white/15 pt-6">
            <div className="flex flex-col-reverse"><dt className="text-sm text-on-dark">Projects delivered</dt><dd className="text-4xl font-medium tracking-[-0.03em] text-cream">27+</dd></div>
            <div className="flex flex-col-reverse"><dt className="text-sm text-on-dark">Years full-time</dt><dd className="text-4xl font-medium tracking-[-0.03em] text-cream">4+</dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}
