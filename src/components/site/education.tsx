import { Section } from '@/components/site/section';
import { certification, education } from '@/lib/portfolio';

export function Education() {
  return (
    <Section id="education" label="05 / Education" title="Education and certification">
      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-lg border border-border bg-card p-6">
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Degree
          </h3>
          <p className="mt-4 text-xl font-bold tracking-tight">{education.degree}</p>
          <p className="mt-1">{education.school}</p>
          <p className="mt-3 text-sm text-muted-foreground">
            {education.graduated} · {education.cgpa}
          </p>
        </article>
        <article className="rounded-lg border border-border bg-card p-6">
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Certification
          </h3>
          <p className="mt-4 text-xl font-bold tracking-tight">{certification.name}</p>
          <p className="mt-1">by {certification.by}</p>
          <p className="mt-3 text-sm text-muted-foreground">{certification.date}</p>
        </article>
      </div>
    </Section>
  );
}
