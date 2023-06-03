/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontSize: {
        sm: ["14px"],
      },
      colors: {
        starGreen: "#006140",
      },
      padding: {
        "spacing-1": "var(--spacing-1)",
        "spacing-2": "var(--spacing-2)",
        "spacing-3": "var(--spacing-3)"
      }
    },
  },
  plugins: [],
}

