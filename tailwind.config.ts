import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ── MONACO DESIGN SYSTEM ─────────────────────────────────────────
      colors: {
        monaco: {
          // Backgrounds
          void:    "#070706",
          black:   "#0D0C0A",
          deep:    "#141310",
          surface: "#1E1C19",
          card:    "#252320",
          border:  "#2E2C28",
          "border-light": "#3A3835",

          // Gold palette — champagne sophistication
          gold: {
            dark:    "#8A6A2A",
            DEFAULT: "#B8943E",
            light:   "#D4AE5C",
            bright:  "#E8C878",
            muted:   "#A08035",
          },

          // Neutrals
          white:   "#FAFAF7",
          cream:   "#F0EDE5",
          silver:  "#C8C4BC",
          gray:    "#8A8780",
          muted:   "#545250",
          subtle:  "#2A2825",
        },
      },

      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body:    ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono:    ["var(--font-dm-mono)", "monospace"],
      },

      fontSize: {
        "2xs":  ["0.625rem",  { lineHeight: "1rem" }],
        "display-xs": ["2rem",    { lineHeight: "1.1",  letterSpacing: "-0.02em" }],
        "display-sm": ["2.5rem",  { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-md": ["3.25rem", { lineHeight: "1.0",  letterSpacing: "-0.03em" }],
        "display-lg": ["4.5rem",  { lineHeight: "0.95", letterSpacing: "-0.035em" }],
        "display-xl": ["6rem",    { lineHeight: "0.9",  letterSpacing: "-0.04em" }],
        "display-2xl":["8rem",    { lineHeight: "0.88", letterSpacing: "-0.045em" }],
      },

      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "38": "9.5rem",
        "42": "10.5rem",
        "46": "11.5rem",
        "50": "12.5rem",
        "section": "8rem",
        "section-lg": "12rem",
      },

      borderRadius: {
        "xs": "2px",
        "sm": "4px",
        "DEFAULT": "6px",
        "md": "8px",
        "lg": "12px",
        "xl": "16px",
        "2xl": "24px",
        "3xl": "32px",
      },

      boxShadow: {
        "gold-sm":  "0 0 12px rgba(184, 148, 62, 0.15)",
        "gold-md":  "0 0 24px rgba(184, 148, 62, 0.2)",
        "gold-lg":  "0 0 48px rgba(184, 148, 62, 0.25)",
        "inner-gold": "inset 0 1px 0 rgba(184, 148, 62, 0.2)",
        "card":     "0 4px 24px rgba(0, 0, 0, 0.4), 0 1px 0 rgba(255,255,255,0.04) inset",
        "card-hover": "0 12px 48px rgba(0, 0, 0, 0.6), 0 1px 0 rgba(255,255,255,0.06) inset",
        "product":  "0 24px 80px rgba(0, 0, 0, 0.7)",
        "text":     "0 2px 4px rgba(0, 0, 0, 0.5)",
      },

      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #8A6A2A 0%, #D4AE5C 50%, #8A6A2A 100%)",
        "gold-horizontal": "linear-gradient(90deg, transparent, #B8943E, transparent)",
        "surface-gradient": "linear-gradient(180deg, #1E1C19 0%, #141310 100%)",
        "hero-gradient": "linear-gradient(180deg, rgba(7,7,6,0) 0%, rgba(7,7,6,0.3) 40%, rgba(7,7,6,0.85) 80%, #070706 100%)",
        "card-gradient": "linear-gradient(180deg, transparent 40%, rgba(7,7,6,0.95) 100%)",
        "shimmer": "linear-gradient(90deg, transparent 0%, rgba(184,148,62,0.08) 50%, transparent 100%)",
      },

      animation: {
        "fade-in":     "fadeIn 0.6s ease forwards",
        "fade-up":     "fadeUp 0.7s ease forwards",
        "fade-left":   "fadeLeft 0.7s ease forwards",
        "fade-right":  "fadeRight 0.7s ease forwards",
        "shimmer":     "shimmer 2.5s infinite",
        "pulse-gold":  "pulseGold 3s ease-in-out infinite",
        "spin-slow":   "spin 8s linear infinite",
        "float":       "float 6s ease-in-out infinite",
        "line-expand": "lineExpand 0.8s ease forwards",
      },

      keyframes: {
        fadeIn:      { from: { opacity: "0" }, to: { opacity: "1" } },
        fadeUp:      { from: { opacity: "0", transform: "translateY(24px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        fadeLeft:    { from: { opacity: "0", transform: "translateX(24px)" }, to: { opacity: "1", transform: "translateX(0)" } },
        fadeRight:   { from: { opacity: "0", transform: "translateX(-24px)" }, to: { opacity: "1", transform: "translateX(0)" } },
        shimmer:     { "0%": { backgroundPosition: "-200% center" }, "100%": { backgroundPosition: "200% center" } },
        pulseGold:   { "0%, 100%": { opacity: "0.4" }, "50%": { opacity: "0.8" } },
        float:       { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
        lineExpand:  { from: { width: "0" }, to: { width: "100%" } },
      },

      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
        "1000": "1000ms",
      },

      transitionTimingFunction: {
        "luxury": "cubic-bezier(0.25, 0.1, 0.25, 1)",
        "dramatic": "cubic-bezier(0.4, 0, 0.2, 1)",
        "spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },

      screens: {
        "xs": "375px",
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1440px",
        "3xl": "1920px",
      },

      zIndex: {
        "60": "60",
        "70": "70",
        "80": "80",
        "90": "90",
        "100": "100",
      },
    },
  },
  plugins: [],
};

export default config;
