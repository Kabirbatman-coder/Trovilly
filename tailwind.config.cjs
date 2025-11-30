/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "'Poppins'",
          "'Inter'",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "sans-serif",
        ],
      },
      colors: {
        app: {
          background: "#E9F5FF",
          surface: "#FFFFFF",
          muted: "#F4F7FB",
        },
        brand: {
          primary: "#0077C8",
          primaryStrong: "#004A8F",
          primarySoft: "#E3F4FF",
          secondary: "#00B3D7",
          secondarySoft: "#D5F7FF",
        },
        text: {
          primary: "#111827",
          secondary: "#6B7280",
          muted: "#9CA3AF",
          onPrimary: "#FFFFFF",
        },
        border: {
          subtle: "#E1E6F0",
          light: "#D3D9E8",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.06)",
        medium: "0 18px 40px rgba(15, 23, 42, 0.10)",
        card: "0 8px 24px rgba(15, 23, 42, 0.08)",
        navbar: "0 1px 3px rgba(15, 23, 42, 0.05)",
      },
      borderRadius: {
        xl: "24px",
        "2xl": "32px",
        "3xl": "40px",
        pill: "9999px",
        card: "24px",
        photo: "24px",
      },
      backgroundImage: {
        "app-gradient":
          "linear-gradient(180deg, rgba(255, 240, 245, 0.3) 0%, rgba(240, 245, 255, 0.3) 50%, rgba(240, 255, 245, 0.3) 100%)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
      },
      keyframes: {
        floatSoft: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "float-soft": "floatSoft 3000ms ease-in-out infinite alternate",
        "fade-in": "fadeIn 400ms ease-out forwards",
        "slide-up": "slideUp 500ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        "scale-in": "scaleIn 400ms ease-out forwards",
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
        "bounce-in": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
    },
  },
  plugins: [],
};


