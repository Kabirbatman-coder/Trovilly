import React from "react";
import { ScrollSection } from "../components/ScrollSection.jsx";

export function About() {
  return (
    <ScrollSection className="space-y-16 sm:space-y-20">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="space-y-3">
          <p className="inline-flex px-3 py-1 rounded-full bg-brand-primary text-[12px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-text-onPrimary">
            About
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
            <span className="text-text-primary">Built by debaters,</span>
            <br />
            <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primaryStrong bg-clip-text text-transparent">
              for people who refuse to stay silent.
            </span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <div className="relative">
            <p className="text-lg sm:text-xl text-text-primary font-medium leading-relaxed">
              Trovilly began with a simple question –{" "}
              <span className="text-brand-primaryStrong font-semibold italic">
                why did debating stop being fun?
              </span>
            </p>
          </div>

          <div className="space-y-6 text-lg text-text-primary font-medium leading-relaxed">
            <p>
              We saw debates getting trapped in formal circuits: the same MUNs, the
              same motions, the same pressure.
            </p>
            <p>
              Yet everywhere, people loved sharing opinions – in classrooms, group chats, and late-night calls – they just didn&apos;t have a place to say it{" "}
              <span className="font-bold text-brand-primaryStrong">creatively</span> and{" "}
              <span className="font-bold text-brand-primaryStrong">globally</span>.
            </p>
          </div>

          {/* Spark Quote Card */}
          <div className="rounded-3xl bg-gradient-to-br from-brand-primarySoft/20 via-brand-secondarySoft/20 to-white/90 backdrop-blur-sm border-2 border-gray-300 shadow-md p-8 mt-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 absolute animate-pulse" />
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary shadow-lg relative z-10" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-lg text-text-primary font-medium leading-relaxed">
                  &quot;Every clash of ideas starts with one person saying, <span className="text-brand-primaryStrong italic">&apos;I actually think...&apos;</span>&quot;
                </p>
                <p className="text-lg text-text-primary font-medium mt-4">
                  Trovilly exists to give that moment a stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Story cards */}
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl bg-white/90 backdrop-blur-sm border-2 border-gray-300 shadow-md p-8 space-y-4 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
          <h2 className="text-xl font-bold uppercase tracking-wide text-brand-primaryStrong">
            What if debate could be about everything?
          </h2>
          <div className="space-y-4">
            <p className="text-lg text-text-primary font-medium leading-relaxed">
              Not just policy and procedure, but movies, AI, pop culture,
              philosophy, and hypothetical worlds.
            </p>
            <p className="text-lg text-text-primary font-medium leading-relaxed">
              A place where you don&apos;t need a suit or UN rules to join – just curiosity and a point of view.
            </p>
            <div className="pt-4 border-t-2 border-gray-200">
              <p className="text-lg text-text-primary font-medium leading-relaxed">
                That question sparked{" "}
                <span className="font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">Trovilly</span> – a global stage to{" "}
                <span className="font-semibold text-brand-primaryStrong">
                  make debating fun, accessible, and credible again.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-white/90 to-brand-primarySoft/10 backdrop-blur-sm border-2 border-gray-300 shadow-md p-8 space-y-4 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
          <h2 className="text-xl font-bold uppercase tracking-wide text-brand-primaryStrong">
            What to expect on Trovilly
          </h2>
          <ul className="text-lg text-text-primary font-medium space-y-2 list-disc list-inside leading-relaxed">
            <li>Fresh formats and reimagined classics – from 1v1 clashes to league tournaments and fictional showdowns.</li>
            <li>Consistent, credible events that move the question from &quot;Where are the debates?&quot; to <span className="font-semibold">&quot;When&apos;s the next one?&quot;</span>.</li>
            <li>A focus on real recognition: feedback, proof of talent, and rewards that actually help you in the future.</li>
          </ul>
          <div className="pt-4 border-t-2 border-gray-200">
            <p className="text-lg text-text-primary font-medium leading-relaxed">
              Because to us, debating isn&apos;t just competition – it&apos;s the purest form of thinking out loud. And at <span className="font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">Trovilly</span>, we&apos;re bringing that spirit back, one clash at a time.
            </p>
          </div>
        </div>
      </div>

      {/* Values strip */}
      <div className="rounded-3xl bg-gradient-to-br from-white/90 via-brand-primarySoft/20 to-brand-secondarySoft/20 border-2 border-gray-300 shadow-md p-8 space-y-8">
        <div className="text-center">
          <p className="text-lg uppercase tracking-wider text-brand-primary font-bold">
            Our core principles
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <p className="text-xl font-bold text-brand-primaryStrong">Fun is non‑negotiable</p>
            <p className="text-lg text-text-primary font-medium leading-relaxed">
              If an event doesn&apos;t feel alive, it doesn&apos;t ship. We optimise for energy, not formality.
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-xl font-bold text-brand-primaryStrong">Access over gatekeeping</p>
            <p className="text-lg text-text-primary font-medium leading-relaxed">
              You shouldn&apos;t need a badge or invite to debate. <span className="font-semibold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">Trovilly</span> is built for the world, not one circuit.
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-xl font-bold text-brand-primaryStrong">Proof, not just praise</p>
            <p className="text-lg text-text-primary font-medium leading-relaxed">
              Recognition means portfolios, feedback, and outcomes that matter beyond the Zoom call.
            </p>
          </div>
        </div>
      </div>
    </ScrollSection>
  );
}


