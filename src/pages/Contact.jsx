import React from "react";
import { ScrollSection } from "../components/ScrollSection.jsx";

export function Contact() {
  return (
    <ScrollSection className="space-y-6">
      <div className="space-y-2 max-w-2xl">
        <p className="inline-flex px-3 py-1 rounded-full bg-brand-primary text-[12px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-text-onPrimary">
          Contact
        </p>
        <h1 className="ds-hero-title text-3xl sm:text-4xl font-bold tracking-tight">
          <span className="text-text-primary">Want to collaborate, adjudicate,</span>{" "}
          <span className="ds-accent">
            or host with Trovilly?
          </span>
        </h1>
        <p className="text-sm text-text-secondary">
          This prototype page gives you space for your preferred channels –
          forms, email, socials, or sponsor outreach. We&apos;ll wire real
          links and forms once you&apos;re ready.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-app-muted border border-border-subtle p-5 space-y-3 transition-transform duration-200 hover:-translate-y-1 hover:shadow-soft">
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-primaryStrong">
            Become an adjudicator
          </h2>
          <p className="text-sm text-text-secondary">
            Think you&apos;ve got the skills to put yourself out there and
            experience an action‑packed adjudicator journey? 
          </p>
          <button className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium bg-brand-primary text-text-onPrimary shadow-soft hover:bg-brand-primaryStrong hover:shadow-medium transition-all">
            Open adjudicator form (Coming soon)
          </button>
        </div>

        <div className="rounded-2xl bg-app-surface border border-border-subtle shadow-soft p-5 space-y-3 transition-transform duration-200 hover:-translate-y-1 hover:shadow-medium">
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-primaryStrong">
            General contact
          </h2>
          <div className="text-sm text-text-secondary space-y-1">
            <div>EMAIL: contacttrovilly@gmail.com</div>
            <div>Phone: 97550 08438</div>
            <div>Phone: 8871984913</div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="inline-flex items-center justify-center rounded-full px-4 py-2 text-xs sm:text-sm font-medium bg-app-surface border border-border-subtle text-text-primary hover:bg-brand-primarySoft transition-colors">
              Email Trovilly
            </button>
            <button className="inline-flex items-center justify-center rounded-full px-4 py-2 text-xs sm:text-sm font-medium bg-app-surface border border-border-subtle text-text-primary hover:bg-brand-primarySoft transition-colors">
              Join community
            </button>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="space-y-8 mt-16">
        <div className="space-y-2">
          <p className="inline-flex px-3 py-1 rounded-full bg-brand-primary text-[12px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-text-onPrimary">
            Our Team
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
            Meet the Founders
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Mufaddal Mansoor */}
          <div className="rounded-3xl bg-white/90 backdrop-blur-sm border-2 border-gray-300 shadow-md p-8 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-xl font-bold text-brand-primaryStrong mb-2">
              Mufaddal Mansoor
            </h3>
            <p className="text-base text-text-secondary font-medium mb-3">
              Co-Founder: Growth and Execution
            </p>
            <a href="https://www.linkedin.com/in/mufaddal-mansoor-hasan-840813347?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-primary hover:text-brand-primaryStrong font-medium">
              LinkedIn →
            </a>
          </div>

          {/* Abdul Kabir Khan */}
          <div className="rounded-3xl bg-white/90 backdrop-blur-sm border-2 border-gray-300 shadow-md p-8 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-xl font-bold text-brand-primaryStrong mb-2">
              Abdul Kabir Khan
            </h3>
            <p className="text-base text-text-secondary font-medium mb-3">
              Co-Founder: Tech and IT
            </p>
            <a href="https://www.linkedin.com/in/abdul-kabir-khan-5380662a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-primary hover:text-brand-primaryStrong font-medium">
              LinkedIn →
            </a>
          </div>

          {/* Soha Khan */}
          <div className="rounded-3xl bg-white/90 backdrop-blur-sm border-2 border-gray-300 shadow-md p-8 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-xl font-bold text-brand-primaryStrong mb-2">
              Soha Khan
            </h3>
            <p className="text-base text-text-secondary font-medium mb-3">
              Co-Founder: Outreach and PR
            </p>
            <a href="https://www.linkedin.com/in/soha-khan-57a455396?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-primary hover:text-brand-primaryStrong font-medium">
              LinkedIn →
            </a>
          </div>

          {/* Tanishq Dhanwani */}
          <div className="rounded-3xl bg-white/90 backdrop-blur-sm border-2 border-gray-300 shadow-md p-8 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-xl font-bold text-brand-primaryStrong mb-2">
              Tanishq Dhanwani
            </h3>
            <p className="text-base text-text-secondary font-medium mb-3">
              Co-Founder: Marketing and Design
            </p>
            <a href="https://www.linkedin.com/in/tanishq-dhanwani-aaaa53391?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-primary hover:text-brand-primaryStrong font-medium">
              LinkedIn →
            </a>
          </div>
        </div>
      </div>
    </ScrollSection>
  );
}


