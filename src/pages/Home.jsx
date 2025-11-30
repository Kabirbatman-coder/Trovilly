import React, { useEffect, useState } from "react";
import { ScrollSection } from "../components/ScrollSection.jsx";

function TypingHeadline() {
  const primary = "We host debates,";
  const highlight = "but not the boring ones.";
  const [index, setIndex] = useState(0);
  const fullLength = primary.length + 1 + highlight.length; // +1 for space/newline

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => {
        if (current >= fullLength) return current;
        return current + 1;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [fullLength]);

  const primaryVisible = primary.slice(0, Math.min(index, primary.length));
  const highlightStartIndex = primary.length + 1;
  const highlightChars =
    index > highlightStartIndex ? index - highlightStartIndex : 0;
  const highlightVisible =
    highlightChars > 0 ? highlight.slice(0, highlightChars) : "";

  return (
    <h1
      className="text-5xl sm:text-6xl lg:text-7xl leading-[1.1] font-bold tracking-tight"
      aria-label={`${primary} ${highlight}`}
    >
      <span className="text-text-primary" aria-hidden="true">
        {primaryVisible}
      </span>
      <br />
      <span className="ds-accent" aria-hidden="true">
        {highlightVisible}
      </span>
    </h1>
  );
}

export function Home() {
  return (
    <div className="space-y-32 sm:space-y-40">
      {/* Hero Section */}
      <ScrollSection className="relative min-h-[85vh] flex items-center">
        {/* Floating Images - positioned around hero with 3D animations */}
        <div className="pointer-events-none absolute top-20 left-8 w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white z-0 opacity-90 floating-3d" style={{ animationDelay: '0s' }}>
          <div className="w-full h-full bg-gradient-to-br from-brand-primarySoft via-brand-secondarySoft to-app-muted" />
        </div>
        <div className="pointer-events-none absolute top-32 right-12 w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden shadow-xl border-4 border-white z-0 opacity-90 floating-3d" style={{ animationDelay: '1.5s' }}>
          <div className="w-full h-full bg-gradient-to-br from-brand-secondarySoft via-brand-primarySoft to-app-muted" />
        </div>
        <div className="pointer-events-none absolute bottom-32 left-16 w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shadow-xl border-4 border-white z-0 opacity-85 floating-3d" style={{ animationDelay: '3s' }}>
          <div className="w-full h-full bg-gradient-to-br from-app-muted via-brand-primarySoft to-brand-secondarySoft" />
        </div>
        <div className="pointer-events-none absolute bottom-20 right-20 w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shadow-xl border-4 border-white z-0 opacity-80 floating-3d" style={{ animationDelay: '4.5s' }}>
          <div className="w-full h-full bg-gradient-to-br from-brand-primarySoft via-app-muted to-brand-secondarySoft" />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-8">
          {/* Dominant Trovilly Branding */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-4 mb-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-br from-brand-secondary via-brand-primary to-brand-primaryStrong flex items-center justify-center overflow-hidden relative shadow-xl border-4 border-white hover:scale-110 transition-transform duration-300">
                <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/95" />
              </div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-none">
                <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primaryStrong bg-clip-text text-transparent">
                  Trovilly
                </span>
              </h1>
            </div>
          </div>

          {/* Announcement Banners */}
          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href="#"
              className="smooth-hover inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 text-xs sm:text-sm text-text-primary hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <span>▶</span>
              <span>Discover Trovilly</span>
            </a>
          </div>

          {/* Main Hero Content */}
          <div className="space-y-8 mb-12">
            <TypingHeadline />
            <div className="max-w-3xl">
              <p className="text-base sm:text-lg lg:text-xl text-text-secondary font-normal leading-relaxed">
                We host debates that feel alive – fun, meaningful, and accessible. Whether you&apos;re a student, hobbyist, working professional, or pro-arguer:{" "}
                <span className="text-brand-primaryStrong font-bold text-lg sm:text-xl lg:text-2xl">Debate</span>{" "}
                means{" "}
                <span className="text-brand-secondary font-bold text-xl sm:text-2xl lg:text-3xl">Trovilly</span>.
              </p>
            </div>
          </div>

          {/* Stats/Features */}
          <div className="flex flex-wrap gap-10 sm:gap-16 pt-12 border-t-2 border-gray-300">
            <div className="flex flex-col gap-2">
              <span className="text-sm uppercase tracking-wider text-text-muted font-semibold">
                Formats
              </span>
              <span className="text-xl sm:text-2xl font-bold text-text-primary">
                7+ creative styles
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm uppercase tracking-wider text-text-muted font-semibold">
                Debaters
              </span>
              <span className="text-xl sm:text-2xl font-bold text-text-primary">
                Global &amp; inclusive
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm uppercase tracking-wider text-text-muted font-semibold">
                Promise
              </span>
              <span className="text-xl sm:text-2xl font-bold text-text-primary">
                Fun, credible, bias-checked
              </span>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Featured Event Card */}
      <ScrollSection className="relative">
        <div className="max-w-4xl mx-auto">
          <div className="premium-card bg-white/90 backdrop-blur-xl rounded-3xl p-10 sm:p-12 border-2 border-gray-300 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs uppercase tracking-wider bg-brand-secondarySoft text-brand-secondary font-medium">
                Featured event
              </span>
              <button
                type="button"
                className="w-9 h-9 rounded-full flex items-center justify-center text-text-secondary hover:bg-gray-100 transition-colors"
                aria-label="More event options"
              >
                <span className="text-lg">•••</span>
              </button>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
                <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent font-black">Trovilly</span> Global Grand Prix
              </h2>
            </div>

            <ul className="list-disc list-inside text-lg sm:text-xl text-text-primary font-medium space-y-4 mb-10">
              <li>30-day, league-style points table</li>
              <li>Multiple surprise formats &amp; rounds</li>
              <li>Deliberation, contradiction &amp; real discussion</li>
              <li>Revive the inner debater (or arguer) in you</li>
            </ul>

            <div className="flex flex-wrap gap-4 mb-10">
              <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white border-2 border-gray-200 text-base shadow-sm">
                <span className="uppercase tracking-wider text-text-muted text-sm font-bold">
                  Mode
                </span>
                <span className="font-bold text-text-primary">Virtual · Global</span>
              </div>
              <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white border-2 border-gray-200 text-base shadow-sm">
                <span className="uppercase tracking-wider text-text-muted text-sm font-bold">
                  Level
                </span>
                <span className="font-bold text-text-primary">Beginner to Pro</span>
              </div>
            </div>

            <button className="btn-premium w-full sm:w-auto inline-flex items-center justify-center rounded-2xl px-8 py-4 text-lg font-bold bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-lg hover:shadow-xl relative overflow-hidden transition-all duration-300">
              <span className="relative z-10">Join now for free</span>
            </button>
          </div>
        </div>
      </ScrollSection>

      {/* Problems in the current debate ecosystem */}
      <ScrollSection className="space-y-16">
        <div className="space-y-8 max-w-4xl relative">
          <p className="inline-flex px-4 py-1.5 rounded-full bg-brand-primary text-xs font-semibold tracking-wider uppercase text-white shadow-md">
            What&apos;s broken right now
          </p>
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight relative z-10">
              <span className="text-text-primary">Why debates stopped feeling </span>
              <span className="ds-accent inline-block">fun</span>
              <span className="text-text-primary">, </span>
              <span className="ds-accent inline-block">fair</span>
              <span className="text-text-primary">, and </span>
              <span className="ds-accent inline-block">accessible</span>
              <span className="text-text-primary">.</span>
            </h2>
            {/* Decorative gradient background */}
            <div className="absolute -left-8 -top-8 w-32 h-32 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-full blur-3xl -z-0" />
            <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-gradient-to-br from-brand-secondary/10 to-brand-primary/10 rounded-full blur-3xl -z-0" />
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl text-text-primary font-medium leading-relaxed">
            These are the frictions we hear from students, hobbyists, working
            professionals, and pro-arguers across the world.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="premium-card bg-white/90 backdrop-blur-sm rounded-3xl p-10 border-2 border-gray-300 shadow-md">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-primaryStrong mb-4">
              Irregularity &amp; inaccessibility
            </h3>
            <p className="text-lg text-text-primary font-medium leading-relaxed">
              Debates? When and where? Events are scattered, hard to find, and
              often locked behind institutions or geography.
            </p>
          </div>

          <div className="premium-card bg-white/90 backdrop-blur-sm rounded-3xl p-10 border-2 border-gray-300 shadow-md">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-primaryStrong mb-4">
              "Trust issues"
            </h3>
            <p className="text-lg text-text-primary font-medium leading-relaxed">
              Unethical competitions chasing profit over the spirit of debate.
              No single, trusted organizer of quality debates for everyone
              globally.
            </p>
          </div>

          <div className="premium-card bg-white/90 backdrop-blur-sm rounded-3xl p-10 border-2 border-gray-300 shadow-md">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-primaryStrong mb-4">
              Lack of creativity &amp; inclusivity
            </h3>
            <p className="text-lg text-text-primary font-medium leading-relaxed">
              Current systems focus on WSDCs, MUNs, and BPs. Debate feels
              reserved for diplomatic prodigies, not people who argue for fun or
              from different fields and fandoms.
            </p>
          </div>

          <div className="premium-card bg-white/90 backdrop-blur-sm rounded-3xl p-10 border-2 border-gray-300 shadow-md">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-primaryStrong mb-4">
              Unfair judgement
            </h3>
            <p className="text-lg text-text-primary font-medium leading-relaxed">
              No transparent system of checks and balances. Favouritism and
              bias spoil the experience for everyone involved.
            </p>
          </div>

          <div className="premium-card bg-white/90 backdrop-blur-sm rounded-3xl p-10 border-2 border-gray-300 shadow-md md:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-primaryStrong mb-4">
              No proper recognition
            </h3>
            <p className="text-lg text-text-primary font-medium leading-relaxed">
              A digital certificate isn&apos;t enough. Debaters and
              adjudicators rarely get proof of talent or personalised rewards
              that actually help in the future.
            </p>
          </div>
        </div>
      </ScrollSection>

      {/* Where Trovilly comes to play */}
      <ScrollSection className="space-y-16">
        <div className="space-y-8 max-w-4xl relative">
          <p className="inline-flex px-4 py-1.5 rounded-full bg-brand-primary text-xs font-semibold tracking-wider uppercase text-white shadow-md">
            Where <span className="font-black">Trovilly</span> comes to play
          </p>
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight relative z-10">
              <span className="text-text-primary">Built by </span>
              <span className="ds-accent inline-block">debaters</span>
              <span className="text-text-primary">, for people who </span>
              <span className="ds-accent inline-block">refuse to stay silent</span>
              <span className="text-text-primary">.</span>
            </h2>
            {/* Decorative gradient background */}
            <div className="absolute -left-8 -top-8 w-32 h-32 bg-gradient-to-br from-brand-secondary/10 to-brand-primary/10 rounded-full blur-3xl -z-0" />
            <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-full blur-3xl -z-0" />
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl text-text-primary font-medium leading-relaxed">
            We&apos;re not just hosting more events – we&apos;re redesigning the
            experience so debates feel energetic, fair, and genuinely rewarding.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="premium-card bg-white/90 backdrop-blur-sm rounded-3xl p-10 border-2 border-gray-300 shadow-md">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-primaryStrong mb-4">
              Makes debate fun again
            </h3>
            <p className="text-lg text-text-primary font-medium leading-relaxed">
              Not your usual MUNs or WSDCs – but creative, energetic formats:
              1v1s, region-specific leagues, fictional universes, and debates on
              everything you can imagine. (Max Verstappen vs. Michael
              Schumacher, anyone?)
            </p>
          </div>

          <div className="premium-card bg-white/90 backdrop-blur-sm rounded-3xl p-10 border-2 border-gray-300 shadow-md">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-primaryStrong mb-4">
              Makes debate accessible &amp; global
            </h3>
            <p className="text-lg text-text-primary font-medium leading-relaxed">
              Virtual, global, awesome, and inclusive. Debate is for everyone –
              not just IR prodigies, but hobbyists, educationalists, and even
              self-proclaimed arguers.
            </p>
          </div>

          <div className="premium-card bg-white/90 backdrop-blur-sm rounded-3xl p-10 border-2 border-gray-300 shadow-md">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-primaryStrong mb-4">
              Redefines quality virtual debating
            </h3>
            <p className="text-lg text-text-primary font-medium leading-relaxed">
              This isn&apos;t just another Zoom or Meet room. It&apos;s a
              dedicated debate environment that captures the buzz of physical
              tournaments – just 1000× more flexible.
            </p>
          </div>

          <div className="premium-card bg-white/90 backdrop-blur-sm rounded-3xl p-10 border-2 border-gray-300 shadow-md">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-primaryStrong mb-4">
              No bias, pure results
            </h3>
            <p className="text-lg text-text-primary font-medium leading-relaxed">
              Structured checks and balances on every decision. Outcomes are
              re-reviewed, with systems that minimise human bias (and make sure
              any &quot;bias&quot; is transparent and accountable).
            </p>
          </div>

          <div className="premium-card bg-white/90 backdrop-blur-sm rounded-3xl p-10 border-2 border-gray-300 shadow-md md:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-primaryStrong mb-4">
              Deserved recognition for all
            </h3>
            <p className="text-lg text-text-primary font-medium leading-relaxed">
              Participants and adjudicators earn more than PDFs – think LORs,
              recommendations, meaningful rewards, courses, and real feedback
              that proves and grows your talent.
            </p>
          </div>
        </div>
      </ScrollSection>

      {/* Adjudicator CTA */}
      <ScrollSection>
        <div className="premium-card bg-white/90 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
            <div className="space-y-4 flex-1">
              <p className="text-sm tracking-wider uppercase text-text-muted font-bold">
                Become an adjudicator
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary">
                Think you&apos;ve got the skills to call the clash?
              </h2>
              <p className="text-lg sm:text-xl text-text-primary font-medium leading-relaxed">
                Put yourself out there and experience an action‑packed adjudicator
                journey on a global stage.
              </p>
              <p className="text-xl sm:text-2xl font-bold text-brand-primaryStrong">
                Debate means <span className="font-black text-2xl sm:text-3xl bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">Trovilly</span>. We host debates, but not the boring ones.
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full md:w-auto">
              <button className="btn-premium inline-flex items-center justify-center rounded-2xl px-8 py-4 text-lg font-bold bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-lg hover:shadow-xl relative overflow-hidden transition-all duration-300">
                <span className="relative z-10">Fill adjudicator form</span>
              </button>
            </div>
          </div>
        </div>
      </ScrollSection>
    </div>
  );
}


