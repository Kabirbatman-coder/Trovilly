import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();
  const navRef = useRef(null);
  const indicatorRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const updateIndicator = () => {
      if (!navRef.current || !indicatorRef.current) return;

      // Find active link by checking href against current pathname
      const links = navRef.current.querySelectorAll('a');
      let activeLink = null;
      
      links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === location.pathname || 
            (location.pathname === '/' && href === '/') ||
            (location.pathname.startsWith(href) && href !== '/')) {
          activeLink = link;
        }
      });

      if (activeLink) {
        const navRect = navRef.current.getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();
        
        setIndicatorStyle({
          left: `${linkRect.left - navRect.left}px`,
          width: `${linkRect.width}px`,
          opacity: 1,
        });
      } else {
        setIndicatorStyle({ opacity: 0 });
      }
    };

    // Small delay to ensure DOM is updated
    const timeoutId = setTimeout(updateIndicator, 10);
    
    // Update on resize
    window.addEventListener('resize', updateIndicator);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updateIndicator);
    };
  }, [location]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-brand-secondary via-brand-primary to-brand-primaryStrong flex items-center justify-center overflow-hidden relative shadow-lg border-2 border-white hover:scale-110 transition-transform duration-300">
              <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-white/95" />
            </div>
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-text-primary">
              <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">Trovilly</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav 
            ref={navRef}
            className="hidden md:flex items-center gap-1 text-sm relative"
          >
            {/* Sliding indicator */}
            <div
              ref={indicatorRef}
              className="absolute h-8 bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 rounded-full transition-all duration-300 ease-out -z-10"
              style={indicatorStyle}
            />
            
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `relative px-4 py-2 rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-brand-primary font-semibold"
                    : "text-text-secondary hover:text-brand-primary"
                }`
              }
              aria-current={location.pathname === '/' ? 'page' : undefined}
            >
              Home
            </NavLink>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                `relative px-4 py-2 rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-brand-primary font-semibold"
                    : "text-text-secondary hover:text-brand-primary"
                }`
              }
              aria-current={location.pathname.startsWith('/events') ? 'page' : undefined}
            >
              Events
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `relative px-4 py-2 rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-brand-primary font-semibold"
                    : "text-text-secondary hover:text-brand-primary"
                }`
              }
              aria-current={location.pathname.startsWith('/about') ? 'page' : undefined}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `relative px-4 py-2 rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-brand-primary font-semibold"
                    : "text-text-secondary hover:text-brand-primary"
                }`
              }
              aria-current={location.pathname.startsWith('/contact') ? 'page' : undefined}
            >
              Contact
            </NavLink>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center justify-center rounded-full px-5 py-2.5 text-base font-semibold text-text-primary hover:text-brand-primary transition-all duration-200 hover:scale-105">
              Become an adjudicator (Coming soon)
            </button>
            <button className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-bold bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-md hover:shadow-lg transition-all duration-300 border border-transparent hover:border-white/20 hover:scale-105 hover:-translate-y-0.5">
              Join a debate
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-12 h-12 rounded-xl bg-gray-50 active:bg-gray-100 transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span 
                className={`block h-0.5 w-6 bg-text-primary rounded-full transform transition-all duration-300 origin-center ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''
                }`} 
              />
              <span 
                className={`block h-0.5 w-6 bg-text-primary rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0 scale-0' : ''
                }`} 
              />
              <span 
                className={`block h-0.5 w-6 bg-text-primary rounded-full transform transition-all duration-300 origin-center ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''
                }`} 
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm bg-white shadow-2xl md:hidden transform transition-transform duration-300 ease-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <span className="text-xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              Menu
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-50 active:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-6 px-4">
            <div className="space-y-2">
              <NavLink
                to="/"
                end
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-5 py-4 rounded-2xl text-lg font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 text-brand-primary"
                      : "text-text-primary hover:bg-gray-50 active:bg-gray-100"
                  }`
                }
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </NavLink>
              <NavLink
                to="/events"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-5 py-4 rounded-2xl text-lg font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 text-brand-primary"
                      : "text-text-primary hover:bg-gray-50 active:bg-gray-100"
                  }`
                }
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Events
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-5 py-4 rounded-2xl text-lg font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 text-brand-primary"
                      : "text-text-primary hover:bg-gray-50 active:bg-gray-100"
                  }`
                }
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                About
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-5 py-4 rounded-2xl text-lg font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 text-brand-primary"
                      : "text-text-primary hover:bg-gray-50 active:bg-gray-100"
                  }`
                }
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact
              </NavLink>
            </div>
          </nav>

          {/* Mobile Menu Footer with CTAs */}
          <div className="p-4 border-t border-gray-100 space-y-3">
            <button className="w-full flex items-center justify-center rounded-2xl px-6 py-4 text-base font-bold bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-lg active:shadow-md transition-all duration-200">
              Join a debate
            </button>
            <button className="w-full flex items-center justify-center rounded-2xl px-6 py-4 text-base font-semibold text-text-primary bg-gray-50 active:bg-gray-100 transition-all duration-200">
              Become an adjudicator
            </button>
          </div>
        </div>
      </div>
    </>
  );
}


