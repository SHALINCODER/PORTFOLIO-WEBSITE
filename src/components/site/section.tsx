import { cn, container } from '@/lib/utils';

type SectionProps = {
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

// Shared frame for every section below the hero: consistent spacing, label and heading.
export function Section({ id, label, title, children, className }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn('border-t border-border py-20 md:py-28', className)}
    >
      <div className={container}>
        <header className="mb-12 max-w-2xl">
          <p className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <span aria-hidden="true" className="h-2 w-2 bg-yellow-400" />
            {label}
          </p>
          <h2
            id={`${id}-title`}
            className="text-3xl font-bold tracking-tight md:text-4xl"
          >
            {title}
          </h2>
        </header>
        {children}
      </div>
    </section>
  );
}
