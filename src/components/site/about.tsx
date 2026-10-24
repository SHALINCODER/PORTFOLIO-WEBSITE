import { Section } from '@/components/site/section';
import { about } from '@/lib/portfolio';

export function About() {
  return (
    <Section id="about" label="04 / About" title="About me">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="max-w-2xl space-y-5 text-lg leading-relaxed lg:col-span-7">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <dl className="space-y-5 lg:col-span-5">
          {about.facts.map((fact) => (
            <div key={fact.label} className="border-t border-border pt-4">
              <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {fact.label}
              </dt>
              <dd className="mt-1">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
