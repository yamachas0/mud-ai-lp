import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mudai: {
          black: "#0A0A0A",
          white: "#FFFFFF",
          gray: {
            50: "#F9FAFB",
            100: "#F3F4F6",
            200: "#E5E7EB",
            300: "#D1D5DB",
            400: "#9CA3AF",
            500: "#6B7280",
            600: "#4B5563",
            700: "#374151",
            800: "#1F2937",
            900: "#111827",
          },
          // アクセントカラー: グリーン（エメラルド）
          accent: "#10B981",
          "accent-dark": "#059669",
        },
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-jp)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
