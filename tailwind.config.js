/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        layers: "url('/layers3.svg')",
      },
      backgroundColor: {
        mainbg: '#1A1A1A',
        navbarcolor: '#111111',
        alt: '#0c0c0c',
      },
      keyframes: {
        blink: {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '100%',
          },
        },
        slide: {
          from: {
            filter: 'blur(4px)',
            transform: 'translateX(10%)',
          },
          to: {
            filter: 'blur(0)',
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        appear4s: 'blink 4s linear',
        appear7s: 'blink 7s linear',
        slide1s: 'slide 860ms linear',
        'slide1.5s': 'slide 1500ms linear',
      },
    },
  },
  plugins: [],
}
