import Image from 'next/image';
import { intro, site } from '@/content/site';
import Button from './Button';
import { Mail, Phone, WhatsApp } from './Icons';

export default function Intro() {
  return (
    <section id="about" className="overflow-hidden bg-ink py-20 text-cream md:py-28">
      <div className="wrap grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="max-w-[34rem] text-[clamp(1.8rem,3.4vw,2.6rem)] font-medium leading-[1.15] tracking-[-0.025em] !text-cream">
            {intro.heading.split(', a ')[0]}, <span className="text-on-dark">a {intro.heading.split(', a ')[1]}</span>
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-on-dark">{intro.body}</p>
          <ul className="mt-9 flex flex-wrap gap-x-10 gap-y-5">
            <li className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-accent text-white"><Phone width={18} height={18} /></span>
              <span><span className="block text-sm text-on-dark">Call</span><a href={site.phoneHref} className="font-medium text-cream hover:text-white">{site.phone}</a></span>
            </li>
            <li className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-accent text-white"><WhatsApp width={18} height={18} /></span>
              <span><span className="block text-sm text-on-dark">WhatsApp</span><a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="font-medium text-cream hover:text-white">Message me<span className="sr-only"> (opens in a new tab)</span></a></span>
            </li>
            <li className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-accent text-white"><Mail width={18} height={18} /></span>
              <span><span className="block text-sm text-on-dark">Email me</span><a href={`mailto:${site.email}`} className="font-medium text-cream hover:text-white">{site.email}</a></span>
            </li>
          </ul>
          <div className="mt-10"><Button href="#work" variant="cream">See my work</Button></div>
        </div>

        <div className="relative mx-auto h-[330px] w-full max-w-[520px] sm:h-[400px] lg:col-span-5 lg:max-w-none">
          <figure className="absolute left-0 top-0 w-[84%] rounded-3xl bg-cream p-2.5 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)]" data-parallax="0.04">
            <Image src="/images/tms-people.webp" alt="TMS People dashboard screenshot" width={1280} height={800} sizes="(min-width:1024px) 440px, 80vw" className="aspect-[16/10] w-full rounded-2xl object-cover object-top" />
          </figure>
          <figure className="absolute bottom-0 right-0 w-[68%] rounded-3xl bg-cream p-2.5 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)]" data-parallax="0.16">
            <Image src="/images/hrsi.webp" alt="HRSI website screenshot" width={1280} height={800} sizes="(min-width:1024px) 360px, 65vw" className="aspect-[16/10] w-full rounded-2xl object-cover object-top" />
          </figure>
        </div>
      </div>
    </section>
  );
}
