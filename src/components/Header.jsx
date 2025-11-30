import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();
  const navRef = useRef(null);
  const indicatorRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({});

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
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="inline-flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-secondary via-brand-primary to-brand-primaryStrong flex items-center justify-center overflow-hidden relative shadow-lg border-2 border-white hover:scale-110 transition-transform duration-300">
            <span className="w-7 h-7 rounded-lg bg-white/95" />
          </div>
          <span className="text-2xl sm:text-3xl font-bold text-text-primary">
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">Trovilly</span>
          </span>
        </div>

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

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center justify-center rounded-full px-5 py-2.5 text-base font-semibold text-text-primary hover:text-brand-primary transition-all duration-200 hover:scale-105">
            Become an adjudicator
          </button>
          <button className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-bold bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-md hover:shadow-lg transition-all duration-300 border border-transparent hover:border-white/20 hover:scale-105 hover:-translate-y-0.5">
            Join a debate
          </button>
        </div>
      </div>
    </header>
  );
}


