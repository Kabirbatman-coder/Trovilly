import React from "react";

// Generic wrapper that can be used to add layered depth behind hero content.
// Currently not wired into the page; you can wrap your hero section with <Hero3D>...</Hero3D>
// to get the animated gradient background and soft 3D effect.

export function Hero3D({ children }) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-brand-primarySoft/60 via-app-surface to-app-surface p-[1px] shadow-medium">
      <div className="pointer-events-none absolute inset-[-40%] bg-[radial-gradient(circle_at_top,_rgba(0,179,215,0.18),transparent_55%),radial-gradient(circle_at_bottom,_rgba(0,119,200,0.25),transparent_60%)]" />
      <div className="relative z-10 rounded-[22px] bg-white/80 px-5 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.16)] backdrop-blur-xl sm:px-8 sm:py-8 lg:px-10 lg:py-10">
        {children}
      </div>
    </section>
  );
}


