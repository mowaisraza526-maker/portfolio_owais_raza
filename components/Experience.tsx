import { education, experience, learning } from '@/content/site';
import { delay } from '@/lib/utils';
import SectionHeader from './SectionHeader';

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-title" className="bg-cream py-20 md:py-28">
      <div className="wrap">
        <SectionHeader id="exp-title" label="Experience" a="Where I’ve" b="worked" />
        <ol className="mt-14 border-t border-ink/15">
          {experience.map((e, i) => (
            <li key={e.org} data-reveal style={delay(i * 100)} className="grid gap-6 border-b border-ink/15 py-9 md:grid-cols-[1fr_auto] md:gap-12">
              <div>
                <h3 className="text-[clamp(1.5rem,2.6vw,2rem)] font-medium tracking-[-0.025em] text-ink">{e.org}</h3>
                <p className="mt-1 text-body">{e.title} · {e.place}</p>
                {e.steps.length > 0 && (
                  <ol aria-label="Role progression" className="relative mt-5 space-y-3 border-l-2 border-ink/15 pl-5">
                    {e.steps.map((s) => (
                      <li key={s} className="relative text-[0.95rem] text-ink">
                        <span aria-hidden="true" className="absolute -left-[27px] top-[0.45em] h-2.5 w-2.5 rounded-full bg-accent" />
                        {s}
                      </li>
                    ))}
                  </ol>
                )}
                <ul className="mt-5 max-w-2xl space-y-2.5 text-body">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3"><span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 bg-accent" />{p}</li>
                  ))}
                </ul>
              </div>
              <div className="md:text-right">
                <p className="font-medium text-ink">{e.years}</p>
                <span className="mt-2 inline-block rounded-full border border-ink/20 bg-paper px-3 py-1 text-sm text-ink">{e.kind}</span>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-[1.3rem] font-medium tracking-[-0.015em] text-ink">Education</h3>
            <ul className="mt-4 space-y-4">
              {education.map((e) => (
                <li key={e.title} className="rounded-2xl bg-paper p-5 ring-1 ring-ink/10">
                  <p className="font-medium text-ink">{e.title}</p>
                  <p className="mt-1 text-[0.95rem] text-body">{e.place} · {e.detail}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[1.3rem] font-medium tracking-[-0.015em] text-ink">Continuous learning</h3>
            <p className="mt-4 max-w-md leading-relaxed text-body">{learning}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
