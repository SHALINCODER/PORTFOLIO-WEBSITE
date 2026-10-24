'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // The theme is only known in the browser, so render a same-sized placeholder until mounted.
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-11 w-11 lg:h-9 lg:w-9" aria-hidden="true" />;

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="flex h-11 w-11 items-center justify-center rounded-full border lg:h-9 lg:w-9 border-foreground/20 text-foreground/70 transition-colors hover:bg-foreground/10 hover:text-foreground"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {isDark ? (
        <Sun className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Moon className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}
