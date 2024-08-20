/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        404: "linear-gradient(to right, rgba(255, 255, 255), rgba(255, 255, 255, 0)), url(/404-bg.jpg)",
      },
      boxShadow: {
        "inset-focus": "0 0 0 1px rgba(68, 76, 231), 0 0 0 4px rgba(68, 76, 231, 0.12)",
        "inset-error-focus": "0 0 0 1px rgba(217, 45, 32), 0 0 0 4px rgba(217, 45, 32, 0.12)",
        faq: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0.5px 0.5px 0 0 #E6E6E6, inset -0.5px -0.5px 0 0 #E6E6E6",
        secondary:
          "inset 0.5px 0.5px 0 0 #E6E6E6, inset -0.5px -0.5px 0 0 #E6E6E6, 0 1px 3px 0 rgba(0, 0, 0, 0.01), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        focus: "0 0 0 4px rgba(68, 76, 231, 0.12)",
        "focus-red": "0 0 0 1px rgba(217, 45, 32), 0 0 0 4px rgba(217, 45, 32, 0.12)",
      },
      keyframes: {
        scroll: {
          to: { translate: "calc(-50% - 16px)" },
        },
      },
      animation: {
        scroll: "scroll 30s linear infinite",
      },
    },
  },
  plugins: [],
};
