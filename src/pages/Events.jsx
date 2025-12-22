import React from "react";
import { ScrollSection } from "../components/ScrollSection.jsx";

export function Events() {
  return (
    <ScrollSection className="space-y-16 sm:space-y-20">
      {/* Hero with visual track */}
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
        <div className="space-y-3">
          <p className="inline-flex px-3 py-1 rounded-full bg-brand-primary text-[12px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-text-onPrimary">
            Events
          </p>
          <h1 className="ds-hero-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent font-black">Trovilly</span>{" "}
            <span className="ds-accent">Grand Prix</span>
          </h1>
          <p className="text-lg sm:text-xl text-text-primary font-medium max-w-2xl leading-relaxed">
            4‑day global league. 7+ formats. Live points table.
          </p>

          <div className="flex flex-wrap gap-3 mt-4 text-xs sm:text-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-app-surface border border-border-subtle">
              <span className="uppercase tracking-[0.16em] text-text-muted">
                Duration
              </span>
              <span className="font-medium">4 days</span>
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
              <span>Day 4</span>
            </div>
            <div className="h-2.5 rounded-full bg-app-muted overflow-hidden">
              <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary animate-track-pulse" />
            </div>
            <p className="text-sm text-text-primary font-medium">
              Climb the global leaderboard.
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
        <div className="rounded-3xl bg-white/90 backdrop-blur-sm border-2 border-gray-300 shadow-md p-8 flex flex-col gap-4 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
          <h2 className="text-lg font-bold uppercase tracking-wide text-brand-primaryStrong">
            Format
          </h2>
          <ul className="text-base text-text-primary font-medium space-y-2 list-disc list-inside">
            <li>4-day league</li>
            <li>7+ debate formats</li>
            <li>Surprise formats included</li>
            <li>Full training &amp; mocks</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-white/90 backdrop-blur-sm border-2 border-gray-300 shadow-md p-8 flex flex-col gap-4 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
          <h2 className="text-lg font-bold uppercase tracking-wide text-brand-primaryStrong">
            Details
          </h2>
          <ul className="text-base text-text-primary font-medium space-y-2 list-disc list-inside">
            <li>Virtual mode</li>
            <li>Global participants</li>
            <li>Beginner to advanced</li>
            <li>1st – 30th April 2026</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-brand-primarySoft/70 via-brand-secondarySoft/60 to-white/90 border-2 border-gray-300 shadow-md p-8 flex flex-col gap-4 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
          <h2 className="text-lg font-bold uppercase tracking-wide text-brand-primaryStrong">
            Registration
          </h2>
          <ul className="text-base text-text-primary font-medium space-y-2 list-disc list-inside mb-4">
            <li>Opening soon</li>
            <li>Free to join</li>
          </ul>
          <button className="mt-auto inline-flex items-center justify-center rounded-2xl px-8 py-4 text-lg font-bold bg-brand-primary text-white shadow-lg hover:bg-brand-primaryStrong hover:shadow-xl transition-all">
            Coming soon, Join waitlist
          </button>
        </div>
      </div>

      {/* Extra context */}
      <div className="grid gap-8 md:grid-cols-2 items-start">
        <div className="rounded-3xl bg-white/90 backdrop-blur-sm border-2 border-gray-300 shadow-md p-8 space-y-4 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
          <h2 className="text-xl font-bold uppercase tracking-wide text-brand-primaryStrong">
            Who is this for?
          </h2>
          <ul className="text-lg text-text-primary font-medium space-y-2 list-disc list-inside">
            <li>Students &amp; campus debaters</li>
            <li>Circuit debaters &amp; MUN regulars</li>
            <li>Educators &amp; coaches</li>
            <li>Curious hobbyists</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-white/90 backdrop-blur-sm border-2 border-gray-300 shadow-md p-8 space-y-4 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
          <h2 className="text-xl font-bold uppercase tracking-wide text-brand-primaryStrong">
            Highlights
          </h2>
          <ul className="text-lg text-text-primary font-medium space-y-2 list-disc list-inside">
            <li>Live points table</li>
            <li>Creative motions (IR to pop culture)</li>
            <li>Clear feedback loops</li>
            <li>Surprise rewards</li>
          </ul>
        </div>
      </div>
    </ScrollSection>
  );
}


