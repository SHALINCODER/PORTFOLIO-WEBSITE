import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { Section } from '@/components/site/section';
import { projects, type Project } from '@/lib/portfolio';

function Label({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
      {children}
    </h4>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const hasCaseStudy = Boolean(project.architecture || project.decisions);

  return (
    <article
      aria-labelledby={`${project.id}-name`}
      className="rounded-lg border border-border bg-card p-6 md:p-8"
    >
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-mono text-xs text-muted-foreground">{project.status}</p>
          <h3
            id={`${project.id}-name`}
            className="mt-2 text-2xl font-bold tracking-tight"
          >
            {project.name}
          </h3>
          <p className="mt-1 text-muted-foreground">{project.subtitle}</p>

          <ul aria-label={`${project.name} technologies`} className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-border px-2 py-1 font-mono text-xs"
              >
                {tech}
              </li>
            ))}
          </ul>

          {project.link && (
            <a
              href={project.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium underline underline-offset-4"
            >
              {project.link.label}
              <span className="sr-only"> (opens in a new tab)</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
        </div>

        <div className="space-y-6 lg:col-span-8">
          <p className="leading-relaxed">{project.summary}</p>

          <div>
            <Label>Problem</Label>
            <p className="leading-relaxed text-muted-foreground">{project.problem}</p>
          </div>

          {project.productNote && (
            <p className="border-l-2 border-yellow-400 bg-muted px-4 py-3 text-sm dark:bg-transparent">
              {project.productNote}
            </p>
          )}

          <div>
            <Label>My contribution</Label>
            <ul className="list-disc space-y-2 pl-5 leading-relaxed marker:text-muted-foreground">
              {project.contribution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {hasCaseStudy && (
            <details className="group border-t border-border pt-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium [&::-webkit-details-marker]:hidden">
                <span>
                  Architecture and engineering decisions
                  <span className="sr-only"> for {project.name}</span>
                </span>
                <ChevronDown
                  className="h-4 w-4 transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>

              <div className="mt-6 space-y-6">
                {project.architecture && (
                  <div>
                    <Label>Architecture</Label>
                    <dl className="grid items-baseline gap-x-6 gap-y-3 sm:grid-cols-[9rem_1fr]">
                      {project.architecture.map((part) => (
                        <div key={part.layer} className="contents">
                          <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                            {part.layer}
                          </dt>
                          <dd>{part.items.join(', ')}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                )}

                {project.decisions && (
                  <div>
                    <Label>Engineering decisions</Label>
                    <ul className="list-disc space-y-2 pl-5 leading-relaxed marker:text-muted-foreground">
                      {project.decisions.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </details>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <Section id="projects" label="01 / Projects" title="Featured projects">
      <div className="space-y-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
