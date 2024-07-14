// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       animation: {
//         "spin-slow": "spin 3s linear infinite",
//       },
//     },
//   },
//   plugins: [],
// };

// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        spin: "spin 1s linear infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
