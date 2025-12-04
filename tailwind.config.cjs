/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors defined to be used as Tailwind classes
        primary: {
          50: '#F4F3FF',
          500: '#7E70FF',
          600: '#685AEF',
        },
        'accent-teal': {
          DEFAULT: '#4DB6AC', // Main shade for accent-teal
          light: '#E0F7FA',   // Lighter shade for accent-teal
        },
        neutral: {
          50: '#F8FAFC',
          300: '#D1D5DB',
          500: '#6B7280',
          600: '#4B5563',
          700: '#3D3D3D',
          900: '#1F1F1F',
        },
        // Other existing custom colors
        error: '#DC2626',
        secondary: {
          500: '#FF8650',
        },
        accent: { // Your original accent green, if still needed for other purposes
            100: '#DCFCEF',
            600: '#10B981',
            700: '#059669',
        }
      },
      // You can also extend other Tailwind properties like spacing, fontSize, etc.
    },
  },
  plugins: [],
}
