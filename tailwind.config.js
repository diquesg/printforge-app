module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
          fontFamily: {
            montserrat: ['var(--font-montserrat-alternates)', 'sans-serif'], // Substitui a fonte sans padrão
            albert: ['var(--font-albert-sans)', 'sans-serif'], // Substitui a fonte sans padrão
          },
        },
      },
    plugins: [],
  }