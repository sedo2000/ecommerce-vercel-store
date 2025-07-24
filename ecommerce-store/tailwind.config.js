/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        arabic: ['"Cairo"', "sans-serif"]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
  // لدعم RTL في تطبيق Next.js استخدم dir="rtl" في <html> (أنظر _document.tsx)
}
