import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { SocialLinks } from '@/components/site/social-links';
import { buttonVariants } from '@/components/ui/button';
import { site } from '@/lib/portfolio';
import { cn, container } from '@/lib/utils';

// Entrance animations are CSS keyframes (animate-* in tailwind.config.ts), staggered with
// animation-delay. Unlike JS animations they don't wait for hydration, they run without
// JavaScript, and motion-reduce:animate-none turns them off for people who ask for less motion.
export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[calc(100svh-4rem)] w-full flex-col items-center justify-between overflow-hidden pb-6 pt-5 md:pb-10 md:pt-8"
    >
      {/*
        Layout: stacked below lg; three columns from lg. From lg up the portrait is positioned
        against this section (no positioned ancestor in between), so it stands on the bottom edge.
        DOM order puts the heading first for the document outline; columns are placed with
        lg:col-start-* so the visual order is text | portrait | heading.
      */}
      <div
        className={cn(
          container,
          'grid flex-grow grid-cols-1 items-center gap-5 py-3 md:gap-8 md:py-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)_minmax(0,0.9fr)] lg:gap-0 lg:py-0 2xl:max-w-[110rem] 2xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.5fr)_minmax(0,0.9fr)]'
        )}
      >
        <div className="z-20 order-2 flex animate-fade-up justify-center text-center [animation-delay:400ms] motion-reduce:animate-none lg:order-none lg:col-start-3 lg:row-start-1 lg:justify-start lg:pl-8 lg:text-left">
          <h1
            id="hero-heading"
            className="text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-5xl md:leading-[1.1] lg:text-4xl lg:leading-[1.1] xl:text-[length:clamp(3rem,3.75vw,3.6rem)]"
          >
            {site.headline}
          </h1>
        </div>

        <div className="relative order-1 flex h-full items-center justify-center lg:static lg:order-none lg:col-start-2 lg:row-start-1">
          <div
            aria-hidden="true"
            className="absolute z-0 h-[min(300px,38svh)] w-[min(300px,38svh)] animate-pop-in rounded-full bg-yellow-400/90 motion-reduce:animate-none md:h-[400px] md:w-[400px] lg:h-[min(360px,55svh)] lg:w-[min(360px,55svh)] xl:h-[min(500px,65svh)] xl:w-[min(500px,65svh)] 2xl:h-[min(620px,70svh)] 2xl:w-[min(620px,70svh)]"
          />
          <Image
            src={site.portrait}
            alt={`Portrait of ${site.name}`}
            width={1122}
            height={1402}
            sizes="(min-width: 1536px) 768px, (min-width: 1280px) 563px, (min-width: 1024px) 410px, (min-width: 768px) 320px, 256px"
            loading="eager"
            fetchPriority="high"
            className="relative z-10 h-[min(20rem,40svh)] w-auto animate-rise-up [animation-delay:150ms] motion-reduce:animate-none md:h-auto md:w-80 lg:absolute lg:inset-x-0 lg:top-auto lg:bottom-0 lg:mx-auto lg:h-[min(78svh,32rem)] lg:w-auto xl:h-[min(86svh,44rem)] 2xl:h-[min(92svh,60rem)]"
          />
        </div>

        <div className="z-20 order-3 animate-fade-up text-center [animation-delay:300ms] motion-reduce:animate-none lg:order-none lg:col-start-1 lg:row-start-1 lg:text-left">
          <p className="mx-auto max-w-xs text-base leading-relaxed text-muted-foreground lg:mx-0 lg:max-w-[16rem] xl:max-w-xs">
            {site.intro}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a href="#projects" className={buttonVariants()}>
              View Projects
            </a>
            <a href="#contact" className={buttonVariants({ variant: 'outline' })}>
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div
        className={cn(
          container,
          'z-30 flex animate-fade-up items-center justify-between pt-4 [animation-delay:500ms] motion-reduce:animate-none 2xl:max-w-[110rem]'
        )}
      >
        <SocialLinks className="-ml-3 lg:-ml-2" />
        <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" aria-hidden="true" />
          {site.locationShort}
        </p>
      </div>
    </section>
  );
}
