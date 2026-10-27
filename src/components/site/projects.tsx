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
        <div className="lg:col-span-4">
          <h3
            id={`${project.id}-name`}
            className="text-2xl font-bold tracking-tight"
          >
            {project.name}
          </h3>

          <div className="mt-5">
            <Label>Technologies</Label>
            <ul aria-label={`${project.name} technologies`} className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-border px-2 py-1 font-mono text-xs"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-8">
          <ul className="list-disc space-y-3 pl-5 leading-relaxed marker:text-muted-foreground">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
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
