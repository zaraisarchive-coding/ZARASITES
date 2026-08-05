import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blush: {
          50: "#FEF6FA",
          100: "#FDF0F7",
          200: "#FBDCEC",
          400: "#F472B6",
          500: "#EC4899",
        },
        ink: {
          900: "#1B1725",
          700: "#3A3446",
        },
        navy: {
          900: "#0B1220",
          800: "#111A2E",
          700: "#1B2740",
        },
        accent: {
          blue: "#3B82F6",
          gold: "#FDE68A",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        ui: ["var(--font-poppins)", "sans-serif"],
      },
      backgroundImage: {
        "soft-gradient":
          "radial-gradient(120% 120% at 20% 0%, #FDF0F7 0%, #FEF6FA 40%, #FFFFFF 100%)",
        "navy-gradient":
          "radial-gradient(120% 120% at 50% 0%, #1B2740 0%, #0B1220 70%)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(59, 130, 246, 0.08)",
        "glass-lg": "0 20px 60px rgba(27, 23, 37, 0.08)",
      },
      borderRadius: {
        "3xl": "1.75rem",
      },
    },
  },
  plugins: [],
};
export default config;
