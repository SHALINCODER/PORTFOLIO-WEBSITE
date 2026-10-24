import { Section } from '@/components/site/section';
import { experience } from '@/lib/portfolio';

export function Experience() {
  return (
    <Section id="experience" label="03 / Experience" title="Experience">
      <ol className="space-y-10">
        {experience.map((job) => (
          <li
            key={job.id}
            className="grid gap-4 border-l-2 border-border pl-6 md:grid-cols-12 md:gap-8"
          >
            <p className="font-mono text-sm text-muted-foreground md:col-span-3">
              {job.period}
            </p>
            <div className="md:col-span-9">
              <h3 className="text-xl font-bold tracking-tight">{job.role}</h3>
              <p className="mt-1 text-muted-foreground">{job.company}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed marker:text-muted-foreground">
                {job.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
