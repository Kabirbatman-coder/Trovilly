import React from "react";
import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-app-background relative">
      <Header />

      <main className="pt-20 sm:pt-28 pb-16 sm:pb-20 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}


