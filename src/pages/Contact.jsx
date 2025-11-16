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
            Open adjudicator form (soon)
          </button>
        </div>

        <div className="rounded-2xl bg-app-surface border border-border-subtle shadow-soft p-5 space-y-3 transition-transform duration-200 hover:-translate-y-1 hover:shadow-medium">
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-primaryStrong">
            General contact
          </h2>
          <p className="text-sm text-text-secondary">
            EMAIL: info@trovilly.com
          </p>
          <div className="flex flex-wrap gap-2">
            <button className="inline-flex items-center justify-center rounded-full px-4 py-2 text-xs sm:text-sm font-medium bg-app-surface border border-border-subtle text-text-primary hover:bg-brand-primarySoft transition-colors">
              Email Trovilly (placeholder)
            </button>
            <button className="inline-flex items-center justify-center rounded-full px-4 py-2 text-xs sm:text-sm font-medium bg-app-surface border border-border-subtle text-text-primary hover:bg-brand-primarySoft transition-colors">
              Join community (placeholder)
            </button>
          </div>
        </div>
      </div>
    </ScrollSection>
  );
}


