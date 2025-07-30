/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    // These paths tell Tailwind CSS where to look for your utility classes.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      colors: {
        // Your custom colors if any
      },
      boxShadow: { // NEW: Define a custom large shadow
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.6)', // Darker, more spread out shadow
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

module.exports = config;