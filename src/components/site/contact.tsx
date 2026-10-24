import { Download, Mail } from 'lucide-react';
import { Section } from '@/components/site/section';
import { buttonVariants } from '@/components/ui/button';
import { site, socialLinks } from '@/lib/portfolio';

export function Contact() {
  const email = socialLinks.find((link) => link.key === 'email');

  return (
    <Section id="contact" label="06 / Contact" title="Get in touch">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            If you&apos;re a recruiter or part of an engineering team, I&apos;d like to
            hear from you. Email me, or connect on LinkedIn or GitHub.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={email?.href} className={buttonVariants()}>
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email me
            </a>
            <a
              href={site.resume}
              download={site.resumeFileName}
              className={buttonVariants({ variant: 'outline' })}
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </a>
          </div>
        </div>

        <dl className="space-y-5 lg:col-span-5">
          <div className="border-t border-border pt-4">
            <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Email
            </dt>
            <dd className="mt-1">
              <a href={email?.href} className="underline underline-offset-4">
                {site.email}
              </a>
            </dd>
          </div>
          <div className="border-t border-border pt-4">
            <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              LinkedIn
            </dt>
            <dd className="mt-1">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Shalin Sunil Kumar on LinkedIn
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </dd>
          </div>
          <div className="border-t border-border pt-4">
            <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              GitHub
            </dt>
            <dd className="mt-1">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                github.com/shalincoder
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </dd>
          </div>
          <div className="border-t border-border pt-4">
            <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Location
            </dt>
            <dd className="mt-1">{site.location}</dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}
