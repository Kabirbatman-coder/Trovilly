import React from "react";

// Standalone featured event card mirroring the home hero card.
// Not currently used; you can import it into Home and replace the inline aside.

export function FeaturedEventCard() {
  return (
    <aside
      className="tilt-card glass-card rounded-2xl p-6 flex flex-col gap-4 relative z-10"
      aria-label="Featured Trovilly event"
    >
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.16em] bg-brand-secondarySoft text-brand-secondary">
          Featured event
        </span>
        <button
          type="button"
          className="w-8 h-8 rounded-full flex items-center justify-center text-text-secondary hover:bg-app-muted transition-colors"
          aria-label="More event options"
        >
          <span className="text-base">•••</span>
        </button>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Trovilly Global Grand Prix</h2>
        <p className="text-xs text-text-secondary mt-1">
          Prototype preview · Details coming soon
        </p>
      </div>

      <ul className="list-disc list-inside text-sm text-text-secondary space-y-1">
        <li>30-day, league-style points table</li>
        <li>Multiple surprise formats &amp; rounds</li>
        <li>Deliberation, contradiction &amp; real discussion</li>
        <li>Revive the inner debater (or arguer) in you</li>
      </ul>

      <div className="flex flex-wrap gap-2">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-app-muted text-[11px]">
          <span className="uppercase tracking-[0.16em] text-text-muted">
            Mode
          </span>
          <span className="font-medium text-xs">Virtual · Global</span>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-app-muted text-[11px]">
          <span className="uppercase tracking-[0.16em] text-text-muted">
            Level
          </span>
          <span className="font-medium text-xs">Beginner to Pro</span>
        </div>
      </div>

      <button className="mt-1 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium bg-brand-primary text-text-onPrimary shadow-soft hover:bg-brand-primaryStrong hover:shadow-medium transition-all w-full">
        Join now for free
      </button>
      <p className="text-[11px] text-text-muted">
        In the live version, this will link to the Devpost page.
      </p>
    </aside>
  );
}


