import React from "react";
import { ScrollSection } from "../components/ScrollSection.jsx";

export function Events() {
  return (
    <ScrollSection className="space-y-12">
      {/* Hero with visual track */}
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
        <div className="space-y-3">
          <p className="inline-flex px-3 py-1 rounded-full bg-brand-primary text-[12px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-text-onPrimary">
            Events
          </p>
          <h1 className="ds-hero-title text-3xl sm:text-4xl font-bold tracking-tight">
            <span className="text-text-primary">Trovilly</span>{" "}
            <span className="ds-accent">Grand Prix</span>
          </h1>
          <p className="text-sm sm:text-[15px] text-text-secondary max-w-3xl leading-relaxed">
            A 30‑day global league where ideas race instead of cars. Seven
            formats, surprise twists, and a live points table that turns every
            round into part of a bigger story.
          </p>

          <div className="flex flex-wrap gap-3 mt-4 text-xs sm:text-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-app-surface border border-border-subtle">
              <span className="uppercase tracking-[0.16em] text-text-muted">
                Duration
              </span>
              <span className="font-medium">30 days</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-app-surface border border-border-subtle">
              <span className="uppercase tracking-[0.16em] text-text-muted">
                Formats
              </span>
              <span className="font-medium">7+ (with surprises)</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-app-surface border border-border-subtle">
              <span className="uppercase tracking-[0.16em] text-text-muted">
                Mode
              </span>
              <span className="font-medium">Virtual · Global</span>
            </div>
          </div>
        </div>

        {/* Visual "track" card to make it feel alive */}
        <div className="rounded-3xl glass-card p-6 space-y-4 tilt-card animate-float-soft">
          <p className="text-[11px] uppercase tracking-[0.18em] text-text-muted">
            League progress preview
          </p>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-text-secondary">
              <span>Day 1</span>
              <span>Day 30</span>
            </div>
            <div className="h-2.5 rounded-full bg-app-muted overflow-hidden">
              <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary animate-track-pulse" />
            </div>
            <p className="text-xs text-text-secondary">
              Imagine your name climbing a global points table as you adapt to
              new formats every week.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center text-xs">
            <div className="rounded-2xl bg-app-surface/80 border border-border-subtle px-3 py-2 shadow-soft transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-medium">
              <p className="text-[10px] uppercase tracking-[0.16em] text-text-muted">
                Rounds
              </p>
              <p className="mt-1 text-sm font-semibold text-text-primary">
                Multi‑stage
              </p>
            </div>
            <div className="rounded-2xl bg-app-surface/80 border border-border-subtle px-3 py-2 shadow-soft transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-medium">
              <p className="text-[10px] uppercase tracking-[0.16em] text-text-muted">
                Formats
              </p>
              <p className="mt-1 text-sm font-semibold text-text-primary">
                Classic + wild
              </p>
            </div>
            <div className="rounded-2xl bg-app-surface/80 border border-border-subtle px-3 py-2 shadow-soft transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-medium">
              <p className="text-[10px] uppercase tracking-[0.16em] text-text-muted">
                Mood
              </p>
              <p className="mt-1 text-sm font-semibold text-text-primary">
                Action‑packed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Primary cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-app-surface border border-border-subtle shadow-soft p-6 flex flex-col gap-3 transition-transform duration-200 hover:-translate-y-1 hover:shadow-medium">
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-primaryStrong">
            Format
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed">
            30-day league with 7 debate formats (including surprise formats),
            full training, and mocks included so everyone can ramp up with
            confidence.
          </p>
          <p className="text-xs text-text-muted">
            Expect formats you haven&apos;t even heard of yet.
          </p>
        </div>

        <div className="rounded-2xl bg-app-surface border border-border-subtle shadow-soft p-6 flex flex-col gap-3 transition-transform duration-200 hover:-translate-y-1 hover:shadow-medium">
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-primaryStrong">
            Details
          </h2>
          <ul className="text-sm text-text-secondary space-y-1.5">
            <li>Mode – Virtual</li>
            <li>Scope – Global, inclusive participants</li>
            <li>Level – Beginner to advanced debaters</li>
          </ul>
          <p className="text-xs text-text-muted">
            Tournament window: 1st April – 30th April 2026.
          </p>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-brand-primarySoft/70 via-brand-secondarySoft/60 to-app-surface border border-border-subtle shadow-soft p-6 flex flex-col gap-4 transition-transform duration-200 hover:-translate-y-1 hover:shadow-medium">
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-primaryStrong">
            Registrations
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed">
            Registrations open soon. The Trovilly Grand Prix runs from{" "}
            <span className="font-medium">1st April to 30th April 2026</span>.
            Get ready to claim your spot on the global leaderboard.
          </p>
          <button className="mt-auto inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium bg-brand-primary text-text-onPrimary shadow-soft hover:bg-brand-primaryStrong hover:shadow-medium transition-all">
            Registrations opening soon
          </button>
        </div>
      </div>

      {/* Extra context */}
      <div className="grid gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-start">
        <div className="rounded-2xl bg-app-muted border border-border-subtle p-6 space-y-3 transition-transform duration-200 hover:-translate-y-1 hover:shadow-soft">
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-primaryStrong">
            Who is this for?
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed">
            Whether you&apos;re an experienced pro, a beginner testing the
            waters, or a working professional who loves a good clash, the
            Grand Prix is designed to stretch your creativity and argument
            muscles.
          </p>
          <ul className="text-sm text-text-secondary list-disc list-inside space-y-1.5">
            <li>Students &amp; campus debaters</li>
            <li>Seasoned circuit debaters &amp; MUN regulars</li>
            <li>Educators, coaches, and curious hobbyists</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-app-surface border border-border-subtle shadow-soft p-6 space-y-3 transition-transform duration-200 hover:-translate-y-1 hover:shadow-medium">
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-primaryStrong">
            Highlights you can expect
          </h2>
          <ul className="text-sm text-text-secondary space-y-1.5">
            <li>Live points table and progression across 30 days.</li>
            <li>Creative motions across genres – from IR to pop culture.</li>
            <li>Clear feedback loops for both debaters and adjudicators.</li>
          </ul>
          <p className="text-xs text-text-muted">
            A surprise for all participants is planned for the full launch.
          </p>
        </div>
      </div>
    </ScrollSection>
  );
}


