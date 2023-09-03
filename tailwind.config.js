/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                "dark-gray": "hsl(var(--dark-gray) / <alpha-value>)",
                "light-purple": "hsl(var(--light-purple) / <alpha-value>)",
                "dark-purple": "hsl(var(--dark-purple) / <alpha-value>)",
                "dark-gray": "hsl(var(--dark-gray) / <alpha-value>)",
            },
        },
    },
    plugins: [],
};
