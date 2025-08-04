 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
     extend: {
      backgroundImage: {
        'header-bg': "url(/src/resources/img/header-bg.jpeg)"
      },
      colors: {
        'dark-blue': "#2e189385",
        'bright-blue': "#482BE7"
      }
     },
   },
   plugins: [],
 }