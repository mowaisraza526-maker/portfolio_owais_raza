import Image from 'next/image';
import { counters, statsStatement } from '@/content/site';

export default function Stats() {
  const [lead, ...rest] = statsStatement.split(' across ');
  return (
    <section aria-label="Experience in numbers" className="bg-cream py-16 md:py-20">
      <div className="wrap">
        <p className="mx-auto max-w-3xl text-center text-[clamp(1.4rem,2.6vw,2rem)] font-medium leading-snug tracking-[-0.02em] text-ink">
          {lead} <span className="text-muted">across {rest.join(' across ')}</span>
        </p>
        <div className="mt-12 grid items-center gap-8 md:grid-cols-[170px_1fr]">
          <Image src="/images/portrait-square.webp" alt="" width={640} height={638} sizes="170px" className="mx-auto aspect-[4/3] w-[170px] rounded-2xl object-cover object-[50%_20%]" />
          <dl className="grid grid-cols-2 gap-y-8 md:grid-cols-4">
            {counters.map((c) => (
              <div key={c.label} className="flex flex-col-reverse border-l pl-5">
                <dt className="mt-2 text-[0.95rem] text-muted">{c.label}</dt>
                <dd className="text-[clamp(2.6rem,4.4vw,3.6rem)] font-medium leading-none tracking-[-0.03em] text-ink tabular-nums">
                  <span data-count={c.value} data-suffix={c.suffix}>{c.value}{c.suffix}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
