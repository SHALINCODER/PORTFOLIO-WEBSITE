'use client';

import * as React from 'react';
import { Download, Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { buttonVariants } from '@/components/ui/button';
import { navItems, site } from '@/lib/portfolio';
import { cn, container } from '@/lib/utils';

const sectionIds = navItems.map((item) => item.id);

// Which nav section is currently in view: the last one whose top has passed 35% of the viewport.
// Sections without a nav link (skills, education) keep the previous link highlighted.
function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = React.useState<string>(ids[0]);

  React.useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      let current = ids[0];
      if (atBottom) {
        current = ids[ids.length - 1];
      } else {
        for (const id of ids) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) {
            current = id;
          }
        }
      }
      setActive(current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ids]);

  return active;
}

export function Header() {
  const [open, setOpen] = React.useState(false);
  const menuButton = React.useRef<HTMLButtonElement>(null);
  const active = useActiveSection(sectionIds);

  React.useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className={cn(container, 'flex h-16 items-center justify-between')}>
        <a
          href="#home"
          className="py-3 text-base font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? 'location' : undefined}
              className={cn(
                'text-sm font-medium uppercase tracking-widest transition-colors hover:text-foreground',
                active === item.id
                  ? 'text-foreground underline decoration-yellow-400 decoration-2 underline-offset-8'
                  : 'text-muted-foreground'
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.resume}
            download={site.resumeFileName}
            className={cn(buttonVariants({ variant: 'outline' }), 'hidden lg:inline-flex lg:h-9')}
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download Resume
          </a>
          <ThemeToggle />
          <button
            ref={menuButton}
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-md lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Mobile" className={cn(container, 'flex flex-col py-4')}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={active === item.id ? 'location' : undefined}
                onClick={() => setOpen(false)}
                className={cn(
                  'border-b border-border py-3 text-sm font-medium uppercase tracking-widest',
                  active === item.id ? 'text-foreground' : 'text-muted-foreground'
                )}
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.resume}
              download={site.resumeFileName}
              onClick={() => setOpen(false)}
              className={cn(buttonVariants({ variant: 'outline' }), 'mt-4 w-full')}
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
