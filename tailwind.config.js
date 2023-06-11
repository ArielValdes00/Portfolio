/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            lineHeight: {
                'loose': '1.65',
            },
            colors: {
                black: '#111111',
            },
        },
    },
    plugins: [],
}
