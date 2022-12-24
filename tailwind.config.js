/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            'body': ['"Open Sans"'],
        },
        extend: {
            colors: {
                'white': '#ffffff',
                'black': '#000000',
                'aaa-blue': '#2c2e43',
                'aaa-yellow': '#ffc100',
                'mid-color': '#967822',
            },
        },
    },
    plugins: [],
}