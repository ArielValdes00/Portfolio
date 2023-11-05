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
                laravel: '#F05340',
                react: '#61DBFB',
                git: '#F34F29',
                node: '#68a063',
                typescript: '#007acc',
                mysql: '#00758F',
                mongo: '#3FA037'
            },
        },
    },
    plugins: [],
}
