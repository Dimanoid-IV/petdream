/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#7B61FF",
          blue: "#4AA8FF",
          teal: "#39D0C1",
          green: "#4BD37B",
          peach: "#FF8FB1",
          pink: "#FF6FB5",
          orange: "#FFB36B",
          yellow: "#FFD66B"
        }
      },
      gradientColorStops: {},
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #7B61FF 0%, #FF6FB5 50%, #FFB36B 100%)',
      },
      fontFamily: {
        display: ['Poppins', 'ui-sans-serif', 'system-ui'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        soft: '0 10px 30px rgba(123,97,255,0.25)'
      },
      borderRadius: {
        xl2: '1.25rem'
      }
    },
  },
  plugins: [],
};
