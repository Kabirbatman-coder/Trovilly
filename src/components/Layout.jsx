import React from "react";
import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";
import Prism from "./Prism.jsx";

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-app-background relative">
      {/* Prism Animated Background */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0" style={{ opacity: 0.3 }}>
        <Prism
          height={3.5}
          baseWidth={5.5}
          animationType="rotate"
          glow={0.8}
          noise={0}
          transparent
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          hoverStrength={2}
          inertia={0.05}
          bloom={1}
          timeScale={0.5}
        />
      </div>

      {/* Main Content with relative positioning to stay above Prism */}
      <div className="relative z-10">
        <Header />

        <main className="pt-20 sm:pt-28 pb-16 sm:pb-20 md:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col">
            {children}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}


