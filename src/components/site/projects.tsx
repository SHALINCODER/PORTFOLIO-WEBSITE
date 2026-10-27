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
  return (
    <article
      aria-labelledby={`${project.id}-name`}
      className="rounded-lg border border-border bg-card p-6 md:p-8"
    >
      <div className="grid gap-8 lg:grid-cols-12">
        <h3
          id={`${project.id}-name`}
          className="text-2xl font-bold tracking-tight lg:col-span-4"
        >
          {project.name}
        </h3>

        <div className="space-y-4 lg:col-span-8">
          <p className="leading-relaxed">{project.overview}</p>
          <ul className="list-disc space-y-3 pl-5 leading-relaxed marker:text-muted-foreground">
            {project.details.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-border pt-5">
        <Label>Technologies used</Label>
        <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-2 xl:grid-cols-3">
          {project.technologies.map(({ category, items }) => (
            <div key={category}>
              <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {category}
              </dt>
              <dd className="mt-1 text-sm leading-relaxed">{items.join(', ')}</dd>
            </div>
          ))}
        </dl>
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
