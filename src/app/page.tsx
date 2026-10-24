import { About } from "@/components/site/about";
import { Contact } from "@/components/site/contact";
import { Education } from "@/components/site/education";
import { Experience } from "@/components/site/experience";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Projects } from "@/components/site/projects";
import { Skills } from "@/components/site/skills";
import { education, site } from "@/lib/portfolio";

// Structured data so search engines can identify the person behind the site.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.title,
  url: site.url,
  email: site.email,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  worksFor: { "@type": "Organization", name: "IARM Information Security" },
  alumniOf: { "@type": "CollegeOrUniversity", name: education.school },
  sameAs: [site.github, site.linkedin],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          // Escape "<" so the JSON cannot close the script tag early.
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <About />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
