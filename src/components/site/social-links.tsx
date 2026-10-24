import { Github, Linkedin, Mail } from 'lucide-react';
import { socialLinks, type SocialKey } from '@/lib/portfolio';
import { cn } from '@/lib/utils';

const icons = { github: Github, linkedin: Linkedin, email: Mail } satisfies Record<
  SocialKey,
  typeof Github
>;

export function SocialLinks({
  className,
  showLabels = false,
}: {
  className?: string;
  showLabels?: boolean;
}) {
  return (
    <ul className={cn('flex flex-wrap items-center gap-x-2', className)}>
      {socialLinks.map((link) => {
        const Icon = icons[link.key];
        return (
          <li key={link.key}>
            <a
              href={link.href}
              aria-label={link.ariaLabel}
              {...(link.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="inline-flex items-center gap-2 rounded-md p-3 text-muted-foreground transition-colors hover:text-foreground lg:p-2"
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
              {showLabels && <span className="text-sm">{link.label}</span>}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
