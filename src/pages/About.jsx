import React from "react";
import { ScrollSection } from "../components/ScrollSection.jsx";

export function About() {
  return (
    <ScrollSection className="space-y-10">
      {/* Hero with side visual */}
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-center">
        <div className="space-y-3 max-w-3xl">
          <p className="inline-flex px-3 py-1 rounded-full bg-brand-primary text-[12px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-text-onPrimary">
            About
          </p>
          <h1 className="ds-hero-title text-3xl sm:text-4xl font-bold tracking-tight">
            <span className="text-text-primary">Built by debaters,</span>{" "}
            <span className="ds-accent">
              for people who refuse to stay silent.
            </span>
          </h1>
          <p className="text-sm text-text-secondary leading-relaxed">
            Trovilly began with a simple question –{" "}
            <span className="italic">why did debating stop being fun?</span> We
            saw debates getting trapped in formal circuits: the same MUNs, the
            same motions, the same pressure. Yet everywhere, people loved
            sharing opinions – in classrooms, group chats, and late-night calls
            – they just didn&apos;t have a place to say it{" "}
            <span className="font-medium">creatively</span> and{" "}
            <span className="font-medium">globally</span>.
          </p>
        </div>

        {/* Abstract debate "spark" visual */}
        <div className="rounded-3xl glass-card p-6 flex flex-col gap-4 tilt-card animate-float-soft">
          <p className="text-[11px] uppercase tracking-[0.18em] text-text-muted">
            The spark
          </p>
          <div className="relative h-24 flex items-center justify-center">
            <div className="w-28 h-28 rounded-full bg-brand-primary/10 absolute animate-orb-pulse" />
            <div className="w-16 h-16 rounded-full bg-brand-secondary/70 blur-sm" />
            <div className="w-8 h-8 rounded-full bg-app-surface shadow-soft" />
          </div>
          <p className="text-xs text-text-secondary text-center">
            Every clash of ideas starts with one person saying, &quot;I actually
            think...&quot; Trovilly exists to give that moment a stage.
          </p>
        </div>
      </div>

      {/* Story cards */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-app-muted border border-border-subtle p-6 space-y-3 transition-transform duration-200 hover:-translate-y-1 hover:shadow-soft">
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-primaryStrong">
            What if debate could be about everything?
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed">
            Not just policy and procedure, but movies, AI, pop culture,
            philosophy, and hypothetical worlds. A place where you don&apos;t
            need a suit or UN rules to join – just curiosity and a point of
            view.
          </p>
          <p className="text-sm text-text-secondary">
            That question sparked{" "}
            <span className="font-semibold">Trovilly</span> – a global stage to{" "}
            <span className="font-semibold">
              make debating fun, accessible, and credible again.
            </span>
          </p>
        </div>

        <div className="rounded-2xl bg-app-surface border border-border-subtle shadow-soft p-6 space-y-3 transition-transform duration-200 hover:-translate-y-1 hover:shadow-medium">
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-primaryStrong">
            What to expect on Trovilly
          </h2>
          <ul className="text-sm text-text-secondary space-y-2">
            <li>
              Fresh formats and reimagined classics – from 1v1 clashes to
              league tournaments and fictional showdowns.
            </li>
            <li>
              Consistent, credible events that move the question from
              &quot;Where are the debates?&quot; to{" "}
              <span className="font-medium">&quot;When&apos;s the next one?&quot;</span>
              .
            </li>
            <li>
              A focus on real recognition: feedback, proof of talent, and
              rewards that actually help you in the future.
            </li>
          </ul>
          <p className="text-sm text-text-secondary">
            Because to us, debating isn&apos;t just competition – it&apos;s the
            purest form of thinking out loud. And at Trovilly, we&apos;re
            bringing that spirit back, one clash at a time.
          </p>
        </div>
      </div>

      {/* Values strip */}
      <div className="rounded-3xl bg-gradient-to-r from-app-surface via-brand-primarySoft/50 to-brand-secondarySoft/40 border border-border-subtle shadow-soft p-6 sm:p-7 space-y-4">
        <p className="text-[11px] uppercase tracking-[0.18em] text-text-muted">
          Our core principles
        </p>
        <div className="grid gap-4 md:grid-cols-3 text-sm text-text-secondary">
          <div className="space-y-1">
            <p className="font-semibold">Fun is non‑negotiable</p>
            <p>
              If an event doesn&apos;t feel alive, it doesn&apos;t ship. We
              optimise for energy, not formality.
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-semibold">Access over gatekeeping</p>
            <p>
              You shouldn&apos;t need a badge or invite to debate. Trovilly is
              built for the world, not one circuit.
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-semibold">Proof, not just praise</p>
            <p>
              Recognition means portfolios, feedback, and outcomes that matter
              beyond the Zoom call.
            </p>
          </div>
        </div>
      </div>
    </ScrollSection>
  );
}


