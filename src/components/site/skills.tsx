import { Section } from '@/components/site/section';
import { skillGroups } from '@/lib/portfolio';

export function Skills() {
  return (
    <Section id="skills" label="02 / Skills" title="Technical skills">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map(({ group, items }) => (
          <div key={group} className="rounded-lg border border-border bg-card p-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {group}
            </h3>
            <ul aria-label={`${group} skills`} className="mt-4 flex flex-wrap gap-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border px-2.5 py-1 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
