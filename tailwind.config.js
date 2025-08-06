 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
     extend: {
      backgroundImage: {
        'header-bg': "url(/src/resources/img/header-bg.jpeg)",
        'content-bg': "url(/src/resources/img/content-bg.jpeg)",
        'features-bg': "url(/src/resources/img/features-bg.jpeg)",
        'call-bg': "url(/src/resources/img/call-bg.jpg)",
        'contact-bg': "url(/src/resources/img/contact-bg.jpg)",
      },
      colors: {
        'dark-blue': "#2e189385",
        'bright-blue': "#482BE7",
        'light-blue': "#1DA1F2",
        'turquoise': "#25DAC5",
        'dark-dark-blue': "#1E0E62",
        'light-grey': "rgba(21,20,57,0.40)"
      }
     },
   },
   plugins: [],
 }