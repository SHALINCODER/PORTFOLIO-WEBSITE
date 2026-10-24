import { SocialLinks } from '@/components/site/social-links';
import { site } from '@/lib/portfolio';
import { cn, container } from '@/lib/utils';

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div
        className={cn(
          container,
          'flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between'
        )}
      >
        <div>
          <p className="font-semibold tracking-tight">{site.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {site.title} · {site.location}
          </p>
        </div>
        <div className="flex flex-col gap-2 md:items-end">
          <SocialLinks className="-ml-3 md:-mr-3 md:ml-0 lg:-mr-2" showLabels />
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
